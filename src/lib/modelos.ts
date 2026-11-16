/**
 * Acceso al catálogo (src/data/modelos.json).
 * Toda la web lee los modelos desde acá: para agregar o corregir uno
 * se edita el JSON, nunca el código ni las páginas.
 */
import datos from '../data/modelos.json';
import { lineas } from './sitio';

export interface Modelo {
  slug: string;
  nombre: string;
  linea: string;
  destacado: boolean;
  habitaciones: number | null;
  banos: number | null;
  m2Cubiertos: number | null;
  m2Semicubiertos: number | null;
  /** Qué es el semicubierto: "Galería" o "Pérgola". */
  semicubiertoTipo: string;
  ambientes: string[];
  descripcionCorta: string;
  descripcionLarga: string;
  caracteristicas: string[];
  plazo: string;
  /** Precios en standby: mientras sea null, la web no muestra ningún valor. */
  precio: number | string | null;
  imagenes: { frente: string; planos: { archivo: string; etiqueta: string }[] };
  notas: string;
}

// El JSON tiene campos todavía vacíos, así que TypeScript no puede inferir
// los tipos finales: se afirma el tipo una sola vez, acá.
export const modelos = datos.modelos as unknown as Modelo[];

/** Modelos de una línea, en el orden del archivo de datos. */
export function modelosDeLinea(slugLinea: string): Modelo[] {
  return modelos.filter((modelo) => modelo.linea === slugLinea);
}

/** Un modelo por su línea y su slug. */
export function buscarModelo(slugLinea: string, slugModelo: string): Modelo | undefined {
  return modelos.find((modelo) => modelo.linea === slugLinea && modelo.slug === slugModelo);
}

/** Modelos marcados como destacados, para el carrusel del inicio. */
export const destacados = modelos.filter((modelo) => modelo.destacado);

/** Número con coma decimal, como se escribe acá (73.61 → "73,61"). */
function numero(valor: number): string {
  return valor.toLocaleString('es-AR', { maximumFractionDigits: 2 });
}

/**
 * Un modelo está "cargado" cuando ya tiene render y metros cuadrados.
 * Mientras no lo esté, las tarjetas y la ficha muestran el estado
 * "en preparación" en vez de huecos vacíos.
 */
export function estaCargado(modelo: Modelo): boolean {
  return Boolean(modelo.imagenes.frente) && modelo.m2Cubiertos !== null;
}

export interface Especificacion {
  etiqueta: string;
  valor: string;
}

/** Especificaciones cargadas de un modelo, listas para mostrar. */
export function especificaciones(modelo: Modelo): Especificacion[] {
  const lista: Especificacion[] = [];

  if (modelo.m2Cubiertos !== null) {
    lista.push({ etiqueta: 'Cubiertos', valor: `${numero(modelo.m2Cubiertos)} m²` });
  }
  if (modelo.m2Semicubiertos !== null) {
    lista.push({
      etiqueta: modelo.semicubiertoTipo || 'Semicubiertos',
      valor: `${numero(modelo.m2Semicubiertos)} m²`,
    });
  }
  if (modelo.habitaciones !== null) {
    lista.push({
      etiqueta: modelo.habitaciones === 1 ? 'Habitación' : 'Habitaciones',
      valor: String(modelo.habitaciones),
    });
  }
  if (modelo.banos !== null) {
    lista.push({ etiqueta: modelo.banos === 1 ? 'Baño' : 'Baños', valor: String(modelo.banos) });
  }
  if (modelo.plazo) {
    lista.push({ etiqueta: 'Plazo de obra', valor: modelo.plazo });
  }

  return lista;
}

/** Datos cortos para la tarjeta del catálogo (máximo 3, para que no se amontone). */
export function resumenTarjeta(modelo: Modelo): Especificacion[] {
  return especificaciones(modelo).slice(0, 3);
}

/** Nombre visible de la línea de un modelo. */
export function nombreLinea(slugLinea: string): string {
  return lineas.find((linea) => linea.slug === slugLinea)?.texto ?? slugLinea;
}

/** Cantidad de modelos por línea, para los contadores del catálogo. */
export function conteoPorLinea(): Record<string, number> {
  const conteo: Record<string, number> = {};
  for (const linea of lineas) {
    conteo[linea.slug] = modelosDeLinea(linea.slug).length;
  }
  return conteo;
}

/**
 * Rangos de metros cuadrados cargados, para los filtros del catálogo.
 * Si todavía no hay ningún m² cargado devuelve una lista vacía y la UI
 * esconde ese filtro.
 */
export function rangosM2(): { etiqueta: string; min: number; max: number }[] {
  const cargados = modelos
    .map((modelo) => modelo.m2Cubiertos)
    .filter((valor): valor is number => valor !== null);
  if (cargados.length === 0) return [];

  return [
    { etiqueta: 'Hasta 60 m²', min: 0, max: 60 },
    { etiqueta: '60 a 90 m²', min: 60, max: 90 },
    { etiqueta: 'Más de 90 m²', min: 90, max: 100000 },
  ].filter((rango) => cargados.some((m2) => m2 >= rango.min && m2 < rango.max));
}
