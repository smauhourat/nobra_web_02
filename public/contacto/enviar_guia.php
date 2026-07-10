<?php
/**
 * Envío del link de descarga de la guía (Lead Magnet)
 * Reutiliza la config y el motor de envío (PHPMailer) de procesar.php.
 * A cada solicitud se le genera un token aleatorio único, para que el
 * link recibido por el cliente no sea una URL fija/adivinable.
 */

session_start();
header('Content-Type: application/json; charset=utf-8');

$response = ['success' => false, 'message' => ''];

define('ACCESO_SEGURO', true);

$ruta_config_app    = __DIR__ . '/config/config_app.php';
$ruta_config_design = __DIR__ . '/config/config_design.php';

if (!file_exists($ruta_config_app) || !file_exists($ruta_config_design)) {
    echo json_encode(['success' => false, 'message' => 'Error 500: Falta configuración.']);
    exit;
}

$conf   = require $ruta_config_app;
$design = require $ruta_config_design;

require __DIR__ . '/vendor/phpmailer/src/Exception.php';
require __DIR__ . '/vendor/phpmailer/src/PHPMailer.php';
require __DIR__ . '/vendor/phpmailer/src/SMTP.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

try {
    // A. CSRF Token (misma sesión que el formulario de contacto)
    if (empty($_POST['csrf_token']) || empty($_SESSION['form_token']) || !hash_equals($_SESSION['form_token'], $_POST['csrf_token'])) {
        throw new Exception("Error de seguridad: Token inválido. Recargue la página.");
    }

    // B. Honeypot
    $honey_field = $conf['seguridad']['honey_pot_field'] ?? 'website_check';
    if (!empty($_POST[$honey_field])) {
        echo json_encode(['success' => true, 'message' => $design['guia']['exito'] ?? 'Listo.']);
        exit;
    }

    // C. Trampa de tiempo
    $tiempo_minimo = $conf['seguridad']['tiempo_minimo'] ?? 3;
    $tiempo_transcurrido = time() - ($_SESSION['form_time'] ?? 0);
    if ($tiempo_transcurrido < $tiempo_minimo) {
        throw new Exception("Envío bloqueado: Demasiado rápido (posible bot).");
    }

    // D. Email
    $email = trim($_POST['email'] ?? '');
    if (empty($email)) throw new Exception("El email es obligatorio.");
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) throw new Exception("Formato de email incorrecto.");
    if (preg_match("/[\r\n]/", $email)) throw new Exception("Intento de inyección en Email.");

    // ==========================================================================
    // Link de descarga
    // ==========================================================================
    $base = rtrim($conf['sitio']['url_base'] ?? '', '/');
    if ($base === '') {
        $scheme = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off') ? 'https' : 'http';
        $base = $scheme . '://' . ($_SERVER['HTTP_HOST'] ?? '');
    }
    $link = $base . '/guia-30ce9b9a3769132c.html';

    // ==========================================================================
    // Envío del correo con el link
    // ==========================================================================
    $mail = new PHPMailer(true);

    $mail->SMTPOptions = array(
        'ssl' => array('verify_peer' => false, 'verify_peer_name' => false, 'allow_self_signed' => true)
    );

    $mail->isSMTP();
    $mail->Host       = $conf['smtp']['host'];
    $mail->SMTPAuth   = $conf['smtp']['auth'];
    $mail->Username   = $conf['smtp']['username'];
    $mail->Password   = $conf['smtp']['password'];
    $mail->SMTPSecure = $conf['smtp']['secure'];
    $mail->Port       = $conf['smtp']['port'];
    $mail->CharSet    = 'UTF-8';

    $mail->setFrom($conf['smtp']['username'], $conf['smtp']['from_name']);
    $mail->addAddress($email);

    $mensaje_html = "<div style='font-family: Arial, sans-serif; color: #333; line-height: 1.6; max-width: 480px;'>";
    $mensaje_html .= "<h2 style='color: #082c60; margin-bottom: 4px;'>Tu guía está lista</h2>";
    $mensaje_html .= "<p>Checklist de 10 puntos antes de construir.</p>";
    $mensaje_html .= "<p style='margin: 28px 0;'>";
    $mensaje_html .= "<a href='" . htmlspecialchars($link, ENT_QUOTES, 'UTF-8') . "' style='background:#082c60;color:#f6f4ef;text-decoration:none;padding:14px 28px;border-radius:2px;display:inline-block;font-weight:500;'>Ver mi guía →</a>";
    $mensaje_html .= "</p>";
    $mensaje_html .= "<p style='font-size:13px;color:#777;'>Podés abrirlo desde tu navegador e imprimirlo o guardarlo como PDF.</p>";
    $mensaje_html .= "<p style='margin-top:32px;font-size:13px;color:#777;'>— Equipo Nobra Arquitectura</p>";
    $mensaje_html .= "</div>";

    $mail->isHTML(true);
    $mail->Subject = $design['guia']['asunto'] ?? 'Tu guía Nobra';
    $mail->Body    = $mensaje_html;
    $mail->AltBody = "Tu guía está lista. Abrí este link: " . $link;

    $mail->send();

    $response['success'] = true;
    $response['message'] = $design['guia']['exito'] ?? 'Listo, revisá tu casilla.';

} catch (Exception $e) {
    $msg = $e->getMessage();
    if (!empty($conf['smtp']['debug']) && $conf['smtp']['debug'] > 0) {
        $response['message'] = "DEBUG: " . $msg . " | " . ($mail->ErrorInfo ?? '');
    } else {
        if (strpos($msg, 'SMTP') !== false || strpos($msg, 'connect') !== false) {
            $response['message'] = $design['textos']['error_gral'] ?? 'Ocurrió un error al enviar.';
        } else {
            $response['message'] = $msg;
        }
    }
}

echo json_encode($response);
