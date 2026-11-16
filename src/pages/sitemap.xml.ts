/**
 * sitemap.xml generado a mano, sin dependencias.
 * Se arma con las rutas fijas más las 4 líneas y todos los modelos, así que
 * agregar un modelo en src/data/modelos.json lo suma solo al sitemap.
 *
 * La URL absoluta sale de "dominio" en src/data/sitio.json (que es lo que
 * alimenta `site` en astro.config.mjs).
 */
import type { APIRoute } from 'astro';
import { lineas, rutaLinea, rutaModelo } from '../lib/sitio';
import { modelos } from '../lib/modelos';

/** Páginas fijas, con su prioridad relativa. */
const fijas: { ruta: string; prioridad: string }[] = [
  { ruta: '/', prioridad: '1.0' },
  { ruta: '/modelos/', prioridad: '0.9' },
  { ruta: '/obra-gris/', prioridad: '0.9' },
  { ruta: '/llave-en-mano/', prioridad: '0.9' },
  { ruta: '/wood-frame/', prioridad: '0.7' },
  { ruta: '/obras/', prioridad: '0.7' },
  { ruta: '/contacto/', prioridad: '0.6' },
  { ruta: '/privacidad/', prioridad: '0.2' },
];

export const GET: APIRoute = ({ site }) => {
  // Sin dominio configurado no se puede armar un sitemap válido.
  if (!site) {
    return new Response('Falta "dominio" en src/data/sitio.json', { status: 404 });
  }

  const hoy = new Date().toISOString().slice(0, 10);

  const rutas = [
    ...fijas,
    ...lineas.map((linea) => ({ ruta: rutaLinea(linea.slug), prioridad: '0.8' })),
    ...modelos.map((modelo) => ({
      ruta: rutaModelo(modelo.linea, modelo.slug),
      prioridad: '0.7',
    })),
  ];

  const urls = rutas
    .map(({ ruta, prioridad }) => {
      const url = new URL(ruta, site).href;
      return `  <url>\n    <loc>${url}</loc>\n    <lastmod>${hoy}</lastmod>\n    <priority>${prioridad}</priority>\n  </url>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
