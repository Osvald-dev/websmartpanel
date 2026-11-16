/**
 * Acceso a los datos generales del sitio (src/data/sitio.json).
 * Para cambiar un dato se edita el JSON, nunca este archivo.
 */
import datos from '../data/sitio.json';

export const sitio = datos;

/**
 * Devuelve el valor solo si está cargado de verdad.
 * Un campo vacío o con "[COMPLETAR]" se trata como inexistente,
 * así la UI lo oculta en vez de mostrarle el placeholder al visitante.
 */
export function dato(valor: string | undefined | null): string | undefined {
  if (!valor) return undefined;
  const limpio = valor.trim();
  if (!limpio || limpio.includes('[COMPLETAR]')) return undefined;
  return limpio;
}

/** Enlace a WhatsApp con mensaje prellenado. */
export function enlaceWhatsApp(mensaje: string = sitio.whatsapp.mensaje): string {
  return `https://wa.me/${sitio.whatsapp.numero}?text=${encodeURIComponent(mensaje)}`;
}

/** Navegación principal (mapa del sitio de CLAUDE.md). */
export const navegacion = [
  { texto: 'Modelos', href: '/modelos/' },
  { texto: 'Obra gris', href: '/obra-gris/' },
  { texto: 'Llave en mano', href: '/llave-en-mano/' },
  { texto: 'Wood Frame', href: '/wood-frame/' },
  { texto: 'Obras', href: '/obras/' },
  { texto: 'Contacto', href: '/contacto/' },
];

/** Ancla del formulario de cotización (sección final del inicio). */
export const enlaceCotizar = '/#cotizar';

/**
 * Las 4 líneas del catálogo. `slug` es el tramo de URL y la clave que usa
 * cada modelo en modelos.json para decir a qué línea pertenece.
 */
export const lineas = [
  {
    slug: '2-habitaciones',
    texto: '2 habitaciones',
    titulo: 'Casas de 2 habitaciones',
    bajada: 'Planta compacta y bien aprovechada, pensada para ampliar más adelante.',
    habitaciones: 2,
  },
  {
    slug: '3-habitaciones',
    texto: '3 habitaciones',
    titulo: 'Casas de 3 habitaciones',
    bajada: 'Para familias que necesitan un dormitorio más sin resignar living ni galería.',
    habitaciones: 3,
  },
  {
    slug: 'duplex',
    texto: 'Duplex',
    titulo: 'Duplex',
    bajada: 'Dos plantas para aprovechar terrenos angostos o sumar unidades en el mismo lote.',
    habitaciones: null,
  },
  {
    slug: 'smart-ai',
    texto: 'Smart AI',
    titulo: 'Línea Smart AI',
    // Falta definir en una frase qué distingue a la línea Smart AI.
    bajada: '[COMPLETAR] en qué se diferencia la línea Smart AI del resto del catálogo.',
    habitaciones: null,
  },
] as const;

export type SlugLinea = (typeof lineas)[number]['slug'];

/** Devuelve la línea a partir de su slug de URL. */
export function buscarLinea(slug: string) {
  return lineas.find((linea) => linea.slug === slug);
}

/** Ruta del listado de una línea. */
export function rutaLinea(slug: string): string {
  return `/modelos/${slug}/`;
}

/** Ruta de la página de un modelo. */
export function rutaModelo(slugLinea: string, slugModelo: string): string {
  return `/modelos/${slugLinea}/${slugModelo}/`;
}

/** Los 3 servicios, para enlaces y para el selector del formulario. */
export const servicios = [
  { slug: 'obra-gris', texto: 'Obra gris con terminación exterior', href: '/obra-gris/' },
  { slug: 'llave-en-mano', texto: 'Llave en mano', href: '/llave-en-mano/' },
  { slug: 'a-medida', texto: 'Obra a medida', href: '/contacto/' },
];
