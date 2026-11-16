/**
 * Acceso a los renders y planos de los modelos.
 *
 * Los archivos viven en src/assets/modelos-renders/ y
 * src/assets/modelos-planos/. Acá se cargan todos de una vez y se buscan
 * por nombre de archivo, que es lo que se escribe en modelos.json.
 * Al pasar por astro:assets, la web los achica y optimiza sola al construir.
 */
import type { ImageMetadata } from 'astro';

type Mapa = Record<string, { default: ImageMetadata }>;

const renders = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/modelos-renders/*.{webp,jpg,jpeg,png}',
  { eager: true }
) as Mapa;

const planos = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/modelos-planos/*.{webp,jpg,jpeg,png}',
  { eager: true }
) as Mapa;

function buscar(mapa: Mapa, archivo: string | undefined): ImageMetadata | undefined {
  if (!archivo) return undefined;
  const clave = Object.keys(mapa).find((ruta) => ruta.endsWith(`/${archivo}`));
  return clave ? mapa[clave].default : undefined;
}

/** Render frontal por nombre de archivo. undefined si el archivo no existe. */
export function imagenRender(archivo: string | undefined) {
  return buscar(renders, archivo);
}

/** Plano por nombre de archivo. undefined si el archivo no existe. */
export function imagenPlano(archivo: string | undefined) {
  return buscar(planos, archivo);
}
