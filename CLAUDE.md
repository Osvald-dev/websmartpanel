# Smart Panel Constructora: web nueva

Actuá como desarrollador web senior y estratega de conversión. El objetivo de esta web es captar consultas calificadas por WhatsApp. La estética también es muy importante, debe ser morderna. Trabajamos por fases y no avanzás a la siguiente sin mi aprobación. Al cerrar cada fase explicame en lenguaje simple qué hiciste, qué probar y qué sigue. Ante una decisión importante, dame 2 opciones con pros y contras.

## Negocio (Fase 0 aprobada)
- Smart Panel Constructora: casas en construcción en seco (Wood Frame).
- Servicios: obra gris con terminación exterior, llave en mano y obras a medida.
- Clientes: mayoría particulares, además pequeñas empresas y pequeños inversores.
- Zona: todo el país, con foco en Gran Buenos Aires y Córdoba.
- Diferencial: costo.
- Tono: cercano (voseo rioplatense).
- Contacto: WhatsApp 3517 03-8778, Instagram @smartpanel.oficial. Razón social y CUIT en el footer: [COMPLETAR]. Ubicación/enlace de Google Maps: [COMPLETAR] (cambió, lo pasa cuando lo tenga; va en footer y en contacto).
- Reseñas: NO enlazar el perfil de Google. Mostrar solo testimonios seleccionados (texto o captura). Si falta material, usar [COMPLETAR].
- Precios: EN STANDBY. El modelo de datos tiene el campo `precio` opcional y la UI no lo muestra mientras esté vacío. Cuando se activen: un único archivo de datos, leyenda "Precio de referencia a [mes año]" y aclarar si es obra gris o llave en mano.

## Catálogo: 4 líneas, 27 modelos cargados, una página por modelo
- 2 habitaciones: 10 modelos (A2 a J2)
- 3 habitaciones: 9 modelos (A3 a I3)
- Duplex: 2 modelos (DP1 y DP2, cada uno con plano de planta baja y planta alta)
- Smart AI: 6 modelos (Smart AI 1 a 6)
- Sin cargar por ahora (decisión del cliente): CA, CB, CC y CD. Sus renders y planos están en las carpetas pero no figuran en `modelos.json`.
- Convención de archivos: renders en `src/assets/modelos-renders/` y planos en `src/assets/modelos-planos/`. El último número del nombre del render es la cantidad de habitaciones (`ai53` = Smart AI 5, 3 habitaciones). En los duplex el número es parte del nombre.
- Los m² cubiertos y de galería o pérgola salen de la franja de datos de cada plano.
- Falta cargar: baños, ambientes, descripciones y habitaciones de los duplex.
- Hay dos fichas técnicas de materiales (obra gris con terminación exterior y llave en mano), con especificaciones.
- Una sola plantilla de página alimentada por datos. Cargar o corregir un modelo es editar una ficha, nunca tocar código.

## Stack
- Astro (sitio estático), CSS moderno, mobile-first, sistema de espaciado y tamaños consistente, sin medidas a mano por imagen.
- Imágenes con `astro:assets` (WebP/AVIF, lazy loading, alt descriptivo). Fuentes autoalojadas.
- Formulario "Cotizamos tu hogar personalizado", en 2 pasos para que se sienta liviano:
  - Paso 1 (visible en el hero): ¿tenés terreno? (sí / no todavía), localidad y WhatsApp.
  - Paso 2 (se despliega después): nombre, m² a construir (aprox.), cantidad de habitaciones, servicio de interés (obra gris / llave en mano / a medida), ¿para cuándo querés construir? (lo antes posible / en 3 meses / en 6 meses / más adelante / solo estoy mirando), modelo de interés (automático si viene de una página de modelo) y mensaje opcional.
  - Se guarda en Google Sheets (Apps Script), con validación, mensaje de éxito/error y anti-spam (honeypot). Después abre WhatsApp con el mensaje prellenado con esos datos. Si el visitante completa solo el paso 1, igual se guarda ese lead parcial.
- Botón flotante de WhatsApp y botón "Consultar este modelo" en cada página de modelo, con el nombre del modelo en el mensaje.
- Carruseles automáticos (hero y modelos): con pausa al tocar o pasar el mouse, flechas, puntos y respeto de `prefers-reduced-motion`.
- GitHub con commits chicos y descriptivos. Repo nuevo, trabajo directo en main.
- Hosting: Hostinger con publicación manual. Entregable: build estático para subir a `public_html`, más instrucciones de publicación y `.htaccess` (HTTPS, redirecciones desde la web vieja).

## Diseño y conversión
- El primer pantallazo es lo más importante: propuesta de valor, prueba de que es real y acción, todo visible sin scrollear.
- Hero mixto (decidido): titular + 2 botones ("Ver modelos" y "Cotizar mi casa") + el paso 1 del formulario presentado de forma sutil ("Cotizamos tu hogar personalizado"), todo limpio y sin recargar. Video en pantallas grandes (liviano, con imagen de respaldo) y hero estático con punch en celular, con un solo campo de WhatsApp y botón. El video todavía no existe, usar placeholder.
- Titular principal (decidido, H1 del inicio): "Tu casa, a tu estilo. Con el costo claro desde el primer día."
- Titulares de secciones: "Ves tu casa antes de construirla: diseño y render personalizados" y "Pagás a medida que ves avanzar tu casa". El viejo "La única obra gris más completa del país" NO se usa tal cual (superlativo no comprobable): se reemplaza por "Obra gris con terminación exterior incluida: mirá qué trae", apoyado en la ficha técnica.
- Dirección visual (decidida): claridad que da confianza, pero con calidad y sensación de servicio excelente (nada que parezca barato). Fondos claros cálidos, petróleo en títulos y secciones de contraste, hero oscuro para el video, acento cálido en botones, buenos espacios y fotografía cuidada.
- Paleta (decidida): #020C1C principal, #0A3D4D secundario y blanco para las letras. Sitio oscuro de punta a punta. El naranja NO es de la marca y no se usa. Logo en `public/logo.png` y favicon en `public/favicon.png`. Tipografía: Montserrat en títulos, combinada con una de lectura cómoda.
- Referencia que hay que superar: nexaconstructora.com.ar.
- Textos orientados al beneficio del cliente, jerarquía visual evidente, buen contraste, mucho aire. Meta: 90+ en Lighthouse.
- Fotos y videos disponibles de calidad dispareja: elegir pocos y buenos, y no mostrar los flojos.

## SEO
- Title y meta description únicos, Open Graph, un solo H1 por página, sitemap.xml, robots.txt, URLs limpias.
- Schema.org (LocalBusiness / Organization, y Product o Residence en cada modelo).
- Espacios preparados para Meta Pixel y Google Analytics (todavía no existen los IDs).

## Restricciones
- No inventes datos del negocio (precios, cantidades de obras, certificaciones, testimonios, plazos). Usá placeholders visibles tipo [COMPLETAR].
- Nada de librerías pesadas si se resuelve con HTML/CSS simple.
- Código limpio, comentado donde no sea obvio, sin duplicaciones.

## Mapa del sitio (Fase 1 aprobada)
- `/` inicio
- `/modelos/` catálogo con filtros (línea, habitaciones, m²)
- `/modelos/2-habitaciones/`, `/modelos/3-habitaciones/`, `/modelos/duplex/`, `/modelos/smart-ai/` listados por línea
- `/modelos/[linea]/[modelo]/` 30 páginas desde una sola plantilla
- `/obra-gris/` y `/llave-en-mano/` una por servicio, con su ficha técnica de materiales
- `/wood-frame/` qué es el sistema y por qué conviene
- `/obras/` galería de obras terminadas
- `/contacto/` y `/privacidad/`
- Orden del inicio: hero → 4 líneas de modelos → modelos destacados en carrusel → por qué elegirnos (costo) → obra gris vs llave en mano → cómo trabajamos → obras → testimonios seleccionados → preguntas frecuentes → formulario final → footer.

## Estructura de carpetas (aprobada)
```
smartpanelv2/
├─ CLAUDE.md
├─ DATOS.md             datos del negocio para cargar contenido
├─ _fuentes/            capturas y material original (fuera del build)
├─ apps-script/Code.gs  receptor de leads para Google Sheets
├─ public/              robots.txt, favicon, .htaccess
├─ src/
│  ├─ data/             sitio.json, modelos.json, servicios.json, faq.json, obras.json
│  ├─ assets/modelos/<slug>/frente.webp, plano.webp
│  ├─ components/       Header, Footer, WhatsAppFlotante, Hero, Carrusel,
│  │                    TarjetaModelo, FormularioLead, SeccionCotizar, Faq,
│  │                    FichaEspecificaciones, ImagenPlaceholder, Migas,
│  │                    PaginaServicio
│  ├─ layouts/Base.astro
│  ├─ lib/              sitio.ts, modelos.ts, contenido.ts (acceso a los datos)
│  ├─ pages/
│  └─ styles/           tokens.css, global.css
```

## Dónde se carga cada cosa (sin tocar código)
- `src/data/sitio.json`: contacto, horario, redes, razón social, CUIT, dominio, IDs de Meta Pixel y Google Analytics, URL del Apps Script (`leadsEndpoint`) y video del hero (`heroVideo`).
- `src/data/modelos.json`: las 30 fichas de modelos. Un campo vacío o en `null` no se muestra. Mientras falte el render y los m², la tarjeta y la página avisan "ficha en preparación".
- `src/data/servicios.json`: las 2 fichas técnicas. Cada item que diga `[COMPLETAR]` se ve marcado como pendiente.
- `src/data/faq.json`: preguntas frecuentes. Solo se publican las que tienen la respuesta terminada; las que dicen `[COMPLETAR]` quedan guardadas pero no salen en la web.
- `src/data/obras.json`: obras entregadas y testimonios. El testimonio se publica solo con `"autorizado": true`.
- Imágenes: `src/assets/modelos/<slug>/` y `src/assets/obras/<slug>/`. El video del hero va en `public/video/`.

## Fases
- Fase 0: contexto. APROBADA.
- Fase 1: arquitectura, carpetas, dirección visual y titular. APROBADA.
- Fase 2: estructura base, layout, header, footer y botón de WhatsApp. HECHA.
- Fase 3: secciones y plantilla de modelo. HECHA: 27 modelos con render, planos y metros. Pendiente: baños, ambientes y descripciones de cada modelo, y las fotos de obra.
- Fase 4: formulario conectado a Google Sheets y WhatsApp. El formulario ya valida, guarda el lead parcial del hero y abre WhatsApp con los datos escritos. Pendiente: instalar `apps-script/Code.gs` y pegar la URL en `leadsEndpoint`.
- Fase 5: SEO, rendimiento y accesibilidad. Hecho: títulos y descripciones únicos, Open Graph, un H1 por página, `sitemap.xml` automático, robots.txt, URLs limpias, foco visible, saltar al contenido, contraste verificado y respeto de `prefers-reduced-motion`. Pendiente: Schema.org, IDs de Pixel y Analytics, y medición de Lighthouse con las imágenes reales cargadas.
- Fase 6: build, publicación en Hostinger y checklist final.
