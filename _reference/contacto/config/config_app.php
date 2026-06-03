<?php
// Protección contra acceso directo (aunque el .htaccess ya lo protege)
defined('ACCESO_SEGURO') or die('Acceso denegado');

return [
    // 1. Configuración SMTP
    'smtp' => [
        'host'       => 'mail.nobra.com.ar', // Obtener del panel de hosting DonWeb/Dattaweb
        'auth'       => true,
        'username'   => 'web@nobra.com.ar',
        'password'   => 'PCFI@QS2pK',  // Completar con la clave real del hosting
        'secure'     => 'ssl',
        'port'       => 465,
        'debug'      => 0, // 0 para producción, 2 para desarrollo
        'from_name'  => 'Nobra Arquitectura · Web',
        'recipient'  => 'santiagomauhourat@hotmail.com'
    ],

    // 2. Google reCAPTCHA (desactivado)
    'recaptcha' => [
        'activo'     => false,
        'site_key'   => '',
        'secret_key' => ''
    ],

    // 3. Activación de Campos
    'campos' => [
        'nombre'    => ['activo' => true,  'requerido' => true],
        'apellido'  => ['activo' => false, 'requerido' => false],
        'email'     => ['activo' => true,  'requerido' => true],
        'telefono'  => ['activo' => true,  'requerido' => false],
        'direccion' => ['activo' => false, 'requerido' => false],
        'pais'      => ['activo' => false, 'requerido' => false],
        'mensaje'   => ['activo' => true,  'requerido' => false],
        'adjuntos'  => ['activo' => false, 'requerido' => false]
    ],

    // 4. Seguridad Interna (WAF + Honeypot + TimeTrap)
    'seguridad' => [
        'permitir_adjuntos' => false,
        'tipos_permitidos'  => ['jpg', 'jpeg', 'png', 'pdf', 'doc', 'docx'],
        'max_size_mb'       => 5,
        'tiempo_minimo'     => 3,
        'honey_pot_field'   => 'website_check'
    ]
];
