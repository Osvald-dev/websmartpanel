/**
 * Acceso a los contenidos editables: servicios, preguntas frecuentes y obras.
 * Regla única: un texto que contiene "[COMPLETAR]" está pendiente.
 * La web lo muestra marcado en las páginas internas y nunca lo publica
 * como si fuera contenido terminado.
 */
import serviciosData from '../data/servicios.json';
import faqData from '../data/faq.json';
import obrasData from '../data/obras.json';

export interface GrupoEspecificaciones {
  grupo: string;
  items: string[];
}

export interface Servicio {
  slug: string;
  nombre: string;
  titulo: string;
  bajada: string;
  plazo: string;
  paraQuien: string;
  incluye: string[];
  noIncluye: string[];
  especificaciones: GrupoEspecificaciones[];
}

export interface Pregunta {
  pregunta: string;
  respuesta: string;
}

export interface Obra {
  slug: string;
  nombre: string;
  localidad: string;
  provincia: string;
  anio: number | null;
  m2: number | null;
  modelo: string;
  tipo: string;
  plazoReal: string;
  descripcion: string;
  testimonio: { texto: string; autor: string; autorizado: boolean } | null;
  imagenes: string[];
}

export const servicios = serviciosData.servicios as unknown as Servicio[];
export const preguntas = faqData.preguntas as unknown as Pregunta[];
export const obras = obrasData.obras as unknown as Obra[];

/** true si el texto todavía es un recordatorio y no contenido publicable. */
export function esPendiente(texto: string | null | undefined): boolean {
  return Boolean(texto && texto.includes('[COMPLETAR]'));
}

/** Un servicio por su slug ("obra-gris" / "llave-en-mano"). */
export function buscarServicio(slug: string): Servicio | undefined {
  return servicios.find((servicio) => servicio.slug === slug);
}

/** Solo las preguntas con respuesta terminada: son las que se publican. */
export const preguntasPublicadas = preguntas.filter(
  (item) => item.respuesta && !esPendiente(item.respuesta)
);

/** Testimonios autorizados por el cliente. Si no hay, la sección no se muestra. */
export const testimonios = obras
  .filter((obra) => obra.testimonio?.autorizado && obra.testimonio.texto)
  .map((obra) => ({
    texto: obra.testimonio!.texto,
    autor: obra.testimonio!.autor,
    obra: obra.nombre,
    localidad: obra.localidad,
  }));
