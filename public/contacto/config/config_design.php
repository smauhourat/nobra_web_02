<?php
defined('ACCESO_SEGURO') or die('Acceso denegado');

return [
    'colores' => [
        // --- PALETA DONWEB ---
        
        // PRIMARIO: El Azul DonWeb para bordes, iconos y focos (Confianza)
        'primario'       => '#004593', 
        
        // HOVER: Un azul un poco más oscuro para interacciones
        'primario_hover' => '#003366',

        // --- BOTÓN DE ACCIÓN (El truco visual) ---
        // DonWeb usa Naranja para sus botones de acción ("Call to Action").
        // Si prefieres el botón azul, cambia esto por '#004593'.
        'boton_bg'       => '#FF6600', 
        'boton_hover'    => '#E65100', 
        'boton_texto'    => '#ffffff',

        // FONDOS Y TEXTOS (Estilo "Clean Corporate")
        'fondo_pagina'   => '#F3F4F6', // Gris muy suave, típico de paneles de control
        'fondo_form'     => '#ffffff', // Tarjeta blanca pura
        
        'texto_titulo'   => '#1F2937', // Gris casi negro
        'texto_label'    => '#4B5563', // Gris medio para etiquetas
        'borde_input'    => '#D1D5DB', // Gris suave para inputs inactivos
        
        // ESTADOS
        'error_bg'       => '#FEF2F2',
        'error_txt'      => '#991B1B',
        'exito_bg'       => '#F0FDF4',
        'exito_txt'      => '#166534'
    ],
    'textos' => [
        'titulo'            => '¿Podemos ayudarte?', // Un tono más de servicio al cliente
        'subtitulo'         => 'Completa el formulario y nuestro equipo te contactará.',
        'boton_enviar'      => 'ENVIAR CONSULTA', // En mayúsculas, estilo CTA
        'boton_cargando'    => 'Procesando...',
        'archivo_placeholder' => 'Adjuntar comprobante o archivo',
        'archivo_seleccionado'=> 'Archivo listo:',
        'exito'             => '¡Mensaje enviado! Te responderemos a la brevedad.',
        'error_gral'        => 'Ocurrió un error al enviar. Por favor verifica tus datos.'
    ],
    'guia' => [
        'asunto'   => 'Tu guía Nobra: Checklist de 10 puntos antes de construir',
        'exito'    => 'Listo. Revisá tu casilla, te enviamos el link de tu guía.',
    ],
    'estilos' => [
        // Fuente muy legible y moderna
        'fuente_principal'   => '"Inter", "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
        'bordes_redondeados' => '6px', // DonWeb usa bordes más sutiles, no tan redondos
        'bordes_inputs'      => '4px',
        'sombra_form'        => '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' // Sombra suave corporativa
    ]
];