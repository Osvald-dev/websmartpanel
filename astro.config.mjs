// @ts-check
import { defineConfig } from 'astro/config';
import sitio from './src/data/sitio.json' with { type: 'json' };

// La URL pública sale de sitio.json. Mientras sea "[COMPLETAR]" se omite:
// el sitio funciona igual, solo faltan canonical y og:url absolutos.
const dominio = sitio.dominio?.startsWith('http') ? sitio.dominio : undefined;

export default defineConfig({
  site: dominio,
  // URLs limpias terminadas en "/" (mapa del sitio de CLAUDE.md).
  // Hostinger sirve cada página como carpeta/index.html.
  trailingSlash: 'always',
  build: { format: 'directory' },
});
