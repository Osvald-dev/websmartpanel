/**
 * Receptor de leads de la web de Smart Panel → Google Sheets.
 *
 * CÓMO INSTALARLO (una sola vez, 5 minutos):
 *  1. Creá una planilla nueva en Google Sheets y ponele "Leads Smart Panel".
 *  2. En la planilla: Extensiones → Apps Script.
 *  3. Borrá lo que haya y pegá todo este archivo. Guardá.
 *  4. Implementar → Nueva implementación → tipo "Aplicación web".
 *       - Ejecutar como: Yo
 *       - Quién tiene acceso: Cualquier persona
 *  5. Copiá la URL que termina en /exec.
 *  6. Pegala en src/data/sitio.json, en "leadsEndpoint".
 *     Desde ese momento la web guarda cada consulta sola.
 *
 * Si más adelante cambiás este archivo, acordate de volver a implementar
 * (Implementar → Administrar implementaciones → editar → Nueva versión).
 */

/** Orden de las columnas de la planilla. */
var COLUMNAS = [
  'fecha',
  'paso',
  'nombre',
  'whatsapp',
  'localidad',
  'terreno',
  'metros',
  'habitaciones',
  'servicio',
  'plazo',
  'modelo',
  'mensaje',
  'origen',
];

/** Títulos legibles para la primera fila. */
var TITULOS = [
  'Fecha',
  'Paso',
  'Nombre',
  'WhatsApp',
  'Localidad',
  'Tiene terreno',
  'Metros',
  'Habitaciones',
  'Servicio',
  'Cuándo construye',
  'Modelo',
  'Mensaje',
  'Página de origen',
];

function doPost(e) {
  try {
    var datos = (e && e.parameter) || {};

    // La trampa anti-spam del formulario: si viene completa, es un robot.
    if (datos._apellido) {
      return respuesta({ ok: true, ignorado: true });
    }

    var hoja = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];

    // Primera vez: escribe los títulos y los deja fijos al hacer scroll.
    if (hoja.getLastRow() === 0) {
      hoja.appendRow(TITULOS);
      hoja.getRange(1, 1, 1, TITULOS.length).setFontWeight('bold');
      hoja.setFrozenRows(1);
    }

    var fila = COLUMNAS.map(function (columna) {
      if (columna === 'fecha') {
        // Fecha del servidor: no depende del reloj del visitante.
        return Utilities.formatDate(new Date(), 'America/Argentina/Cordoba', 'yyyy-MM-dd HH:mm');
      }
      return datos[columna] || '';
    });

    hoja.appendRow(fila);

    return respuesta({ ok: true });
  } catch (error) {
    return respuesta({ ok: false, error: String(error) });
  }
}

/** Permite abrir la URL en el navegador para comprobar que está publicada. */
function doGet() {
  return respuesta({ ok: true, mensaje: 'Receptor de leads de Smart Panel activo.' });
}

function respuesta(objeto) {
  return ContentService.createTextOutput(JSON.stringify(objeto)).setMimeType(
    ContentService.MimeType.JSON
  );
}
