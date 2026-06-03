Integración en el sitio
Opción 1: Acceso directo
https://tudominio.com/contacto/
Opción 2: Integración mediante iframe
<iframe src="/contacto/index.php" width="100%" height="750" frameborder="0"></iframe>
Configuración
Toda la configuración se realiza desde:

/public_html/contacto/config/
Archivo: config_app.php
Define la lógica y el comportamiento del formulario.

SMTP
Permite configurar:

Servidor

Usuario y contraseña

Puerto y tipo de cifrado

Remitente y destinatario

Campos del formulario
Permite:

Activar o desactivar campos

Definir campos obligatorios

Campos disponibles:

Nombre

Apellido

Email

Teléfono

Dirección

Mensaje

Adjuntos

Seguridad
Parámetros configurables:

Tipos de archivos permitidos

Tamaño máximo de adjuntos

Tiempo mínimo de envío (TimeTrap)

Campo honeypot

reCAPTCHA (opcional)
Compatible con Google reCAPTCHA v2

Se valida del lado del servidor

Desactivado por defecto

Archivo: config_design.php
Permite modificar la apariencia sin tocar código PHP.

Opciones disponibles:

Colores del formulario

Textos visibles

Estilo del botón de envío

¿Cómo funciona el formulario?
1. Visualización (index.php)
Carga configuraciones

Genera medidas de seguridad

Muestra el formulario

2. Envío (form.js)
Valida datos en el navegador

Envía el formulario por AJAX

Muestra mensajes de error o éxito

3. Procesamiento (procesar.php)
Ejecuta validaciones de seguridad

Sanitiza los datos

Procesa adjuntos

Envía el correo

Devuelve una respuesta en JSON

Seguridad implementada
WAF interno contra XSS, SQLi y otros ataques comunes

Protección CSRF

Honeypot anti-bots

TimeTrap (envíos demasiado rápidos)

Validación estricta de tipos de datos

Adjuntos con validación MIME real

Problemas frecuentes
Error de autenticación SMTP
Credenciales incorrectas

Puerto o método de cifrado incorrecto

Error de reCAPTCHA
Casilla no marcada

Claves inválidas

Dominio no autorizado

Token inválido
Sesiones PHP deshabilitadas

Problemas de permisos en /tmp

Archivo no permitido
El tipo de archivo no está incluido en la configuración