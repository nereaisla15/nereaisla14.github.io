<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- MODIFICA AQUÍ: Tu Nombre -->
    <title>Tu Nombre — Porfolio Profesional</title>
    <style>
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
            background-color: #FCFBF9; /* Fondo crema muy suave, cálido y elegante */
            color: #2C2A29; /* Texto carbón suave, menos agresivo que el negro */
            line-height: 1.6;
            padding: 60px 20px;
        }

        .container {
            max-width: 680px;
            margin: 0 auto;
        }

        /* Cabecera */
        header {
            margin-bottom: 60px;
            text-align: center; /* Centrado sutil para dar aire de marca personal */
        }

        h1 {
            font-family: "Playfair Display", "Didot", "Georgia", serif; /* Fuente elegante con serifa */
            font-size: 32px;
            font-weight: 400;
            letter-spacing: 1px;
            margin-bottom: 12px;
            color: #1A1919;
        }

        .subtitle {
            color: #8C827A; /* Tono taupe/tierra suave */
            font-size: 14px;
            text-transform: uppercase;
            letter-spacing: 2px;
            margin-bottom: 24px;
        }

        .links-bio {
            font-size: 14px;
            display: flex;
            justify-content: center;
            gap: 20px;
        }

        .links-bio a {
            color: #2C2A29;
            text-decoration: none;
            border-bottom: 1px solid #D9C3B0; /* Línea inferior fina color oro suave */
            padding-bottom: 2px;
            transition: all 0.3s ease;
        }

        .links-bio a:hover {
            color: #C49A83; /* Rosa viejo / Oro rosa al pasar el cursor */
            border-bottom-color: #C49A83;
        }

        /* Secciones */
        section {
            margin-bottom: 50px;
        }

        h2 {
            font-family: "Playfair Display", "Georgia", serif;
            font-size: 18px;
            font-weight: 400;
            font-style: italic;
            border-bottom: 1px solid #EAE5E0;
            padding-bottom: 10px;
            margin-bottom: 25px;
            color: #59524C;
        }

        .text-block {
            font-size: 15px;
            color: #4A4540;
            text-align: justify;
        }

        /* Lista de Proyectos Elegante */
        .project-row {
            display: flex;
            padding: 20px 16px;
            border-bottom: 1px solid #EAE5E0;
            text-decoration: none;
            color: inherit;
            border-radius: 8px;
            transition: all 0.3s ease;
        }

        .project-row:hover {
            background-color: #F5F1EC; /* Fondo sutil al posarse sobre el proyecto */
            transform: translateX(4px); /* Desplazamiento delicado hacia la derecha */
        }

        .project-date {
            width: 70px;
            min-width: 70px;
            font-size: 13px;
            color: #A69C94;
            font-weight: 300;
            padding-top: 2px;
        }

        .project-content {
            flex-grow: 1;
        }

        .project-title {
            font-size: 16px;
            font-weight: 500;
            color: #1A1919;
            margin-bottom: 6px;
        }

        .project-desc {
            font-size: 14px;
            color: #615B55;
            margin-bottom: 12px;
            font-weight: 300;
        }

        /* Etiquetas de Tecnologías Estilizadas */
        .tags {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
        }

        .tag {
            font-size: 11px;
            background-color: #EFEAE4; /* Botón nude/crema */
            color: #73675C;
            padding: 3px 10px;
            border-radius: 20px; /* Completamente redondeado, más orgánico y suave */
            font-size: 11px;
            letter-spacing: 0.5px;
        }

        /* Educación / Certificados */
        .edu-item {
            padding: 15px 16px;
            border-left: 2px solid #E3D9D0;
            margin-bottom: 15px;
            margin-left: 8px;
        }

        .edu-title {
            font-size: 15px;
            font-weight: 500;
            color: #2C2A29;
        }

        .edu-meta {
            font-size: 13px;
            color: #8C827A;
            margin-top: 2px;
        }

        footer {
            margin-top: 80px;
            font-size: 12px;
            text-align: center;
            color: #B3A8A0;
            letter-spacing: 1px;
        }

        /* Pantallas móviles */
        @media (max-width: 500px) {
            .project-row {
                flex-direction: column;
                padding: 15px 8px;
            }
            .project-date {
                margin-bottom: 6px;
            }
            header {
                text-align: left;
            }
            .links-bio {
                justify-content: flex-start;
            }
        }
    </style>
</head>
<body>

    <div class="container">

        <!-- CABECERA DE MARCA PERSONAL -->
        <header>
            <!-- MODIFICA AQUÍ: Tu Nombre -->
            <h1>Tu Nombre Completo</h1>
            <p class="subtitle">Desarrolladora & Diseñadora de Software</p>
            <div class="links-bio">
                <!-- MODIFICA AQUÍ: Tus enlaces reales -->
                <a href="https://github.com/tu-usuario" target="_blank">GitHub</a>
                <a href="https://linkedin.com/in/tu-usuario" target="_blank">LinkedIn</a>
                <a href="mailto:tu-correo@email.com">Email</a>
            </div>
        </header>

        <!-- SOBRE MÍ -->
        <section>
            <h2>Sobre Mí</h2>
            <div class="text-block">
                Hola, soy [Tu Nombre]. Desarrollo soluciones digitales combinando lógica, orden y una visión estética cuidada. Me especializo en [tu especialidad, ej: crear aplicaciones web intuitivas y organizar arquitecturas de código limpias].
            </div>
        </section>

        <!-- PROYECTOS DESTACADOS -->
        <section>
            <h2>Proyectos Seleccionados</h2>

            <!-- PROYECTO 1 -->
            <a href="https://github.com/tu-usuario/proyecto-1" class="project-row" target="_blank">
                <div class="project-date">2026</div>
                <div class="project-content">
                    <div class="project-title">Nombre de tu Proyecto Principal</div>
                    <div class="project-desc">Una descripción delicada y precisa de lo que resuelve este código. Enfocado en los resultados y la tecnología empleada.</div>
                    <div class="tags">
                        <span class="tag">React</span>
                        <span class="tag">Node.js</span>
                        <span class="tag">UI/UX</span>
                    </div>
                </div>
            </a>

            <!-- PROYECTO 2 -->
            <a href="https://github.com/tu-usuario/proyecto-2" class="project-row" target="_blank">
                <div class="project-date">2025</div>
                <div class="project-content">
                    <div class="project-title">Desarrollo de API & Automatización</div>
                    <div class="project-desc">Scripting inteligente para optimizar bases de datos y consumo de servicios externos de forma limpia.</div>
                    <div class="tags">
                        <span class="tag">Python</span>
                        <span class="tag">SQL</span>
                    </div>
                </div>
            </a>

        </section>

        <!-- EDUCACIÓN Y RECONOCIMIENTOS -->
        <section>
            <h2>Formación & Certificaciones</h2>
            
            <div class="edu-item">
                <div class="edu-title">Ingeniería de Software / Grado Web</div>
                <div class="edu-meta">Universidad o Escuela de Tecnología · 2025</div>
            </div>

            <div class="edu-item">
                <div class="edu-title">Certificación Oficial Cloud / Frontend</div>
                <div class="edu-meta">Institución Emisora · 2024</div>
            </div>
        </section>

        <!-- PIE DE PÁGINA -->
        <footer>
            <p>&copy; 2026 — Diseñado con elegancia a través de GitHub Pages</p>
        </footer>

    </div>

</body>
</html>