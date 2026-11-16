# Datos para la web de Smart Panel

Completá este archivo y guardalo en la raíz del repo. Claude Code lo lee para cargar todo el contenido.

**Reglas simples:**
- Lo que no sepas, dejalo vacío o escribí `TODO`. No inventes datos.
- Los precios son **precios base de obra gris, de referencia**.
- Para repetir un bloque (otro modelo, otra obra), copiá y pegá el bloque entero.

---

## 1. Datos generales

- Nombre comercial: Smart Panel 
- Eslogan o frase corta (opcional): 
- WhatsApp (con código de país, ej. 5493510000000): +54 9 3517 03-8778
- Email de contacto: informacion@smartpanelconstructora.com
- Teléfono (si es distinto del WhatsApp):
- Instagram (link): https://www.instagram.com/smartpanel.oficial/
- Facebook (link): https://www.facebook.com/profile.php?id=61554326391582
- Otras redes: 
- Zonas donde trabajan (ej. Gran Buenos Aires, Córdoba, todo el país): Todo el país. 
- Dirección u oficina (si se muestra): 
- Horario de atención: Lun a Vier 09 a 18 - Sabados de 09 a 13
- Años de experiencia / cantidad de obras entregadas (si querés mostrarlo): más de 500 casas entregadas
- Moneda de los precios (USD o ARS): -
- Fecha de actualización de los precios (ej. octubre 2026): -
- Aclaración legal bajo los precios (ej. "Precios de referencia, sujetos a variación según terreno y ubicación"): Tiene que decir. precios desde y el valor

### Colores y logo
- Archivo del logo (nombre y ubicación, ej. `public/logo.svg`):
- Color principal (hex): #020C1C
- Color secundario (hex): #0A3D4D
- Color de acento (hex): 
- Color de texto y fondo, si los tenés (hex): #FFFFFF
- Tipografías actuales (si las sabés): Montserrat, sans-serif;

### Analítica
- ID de Google Analytics (G-XXXXXXX):
- ID de Meta Pixel: 
- Google Sheet para leads (link):

---

## 2. Servicios

Un bloque por servicio. Sugeridos: Obra gris, Llave en mano, Obras a medida.

### Servicio: Obra gris
- Qué incluye: 
- Qué NO incluye (lo termina el cliente):
- Precio desde (por m², si aplica):
- Plazo estimado: 30 días

### Servicio: Llave en mano
- Qué incluye:
- Precio desde (por m², si aplica):
- Plazo estimado: de 90 a 120 días

### Servicio: Obras a medida
- Descripción: se cotiza por m²
- Cómo se cotiza (ej. enviando planos):

---

## 3. Ventajas / diferenciales

Una línea por cada una, con un dato concreto si lo tenés.

- Aislación con sistema EIFS: si
- Tiempos de obra: 30 días Obra Gris
- Precio: desde $550.000
- Otra ventaja: Platea de hormigón incluida 
- Otra ventaja: flete bonificado por 700km

---

## 4. Modelos

Un bloque por modelo. Copiá el bloque completo para agregar más.

### Modelo
- Nombre:
- Slug (nombre para la URL, en minúsculas y con guiones, ej. `modelo-aurora`):
- Destacado en el inicio (sí / no):
- Metros cuadrados cubiertos:
- Metros semicubiertos (si hay):
- Dormitorios:
- Baños:
- Otros ambientes (cocina-comedor, galería, quincho, etc.):
- Precio base de obra gris:
- Precio llave en mano (si lo querés mostrar):
- Plazo estimado de construcción (ej. 90 días):
- Descripción corta (1 o 2 frases, para la tarjeta):
- Descripción larga (para la ficha):
- Características (una por línea):
  -
  -
  -
- Imágenes (nombres de archivo, la primera es la portada):
  - Renders:
  - Plano:
- Notas (qué se puede personalizar, ampliaciones, etc.):

---

## 5. Obras entregadas

Un bloque por obra. Copiá el bloque completo para agregar más.

### Obra
- Nombre o referencia (ej. "Casa en Villa Allende"):
- Zona / localidad y provincia:
- Año de entrega:
- Metros cuadrados:
- Modelo (si corresponde, si no "a medida"):
- Tipo (obra gris / llave en mano / a medida):
- Plazo real de construcción:
- Descripción corta (opcional):
- Testimonio del cliente (opcional, con nombre o iniciales y permiso para publicar):
- Fotos (nombres de archivo, la primera es la portada):

---

## 6. Preguntas frecuentes

Pregunta y respuesta, una abajo de otra. Sugeridas: cuánto tarda, qué es EIFS, qué incluye la obra gris, cómo se paga, si construyen en mi zona, si necesito planos, qué garantía tienen.

**Pregunta:**
**Respuesta:**

**Pregunta:**
**Respuesta:**

---

## 7. Textos de la web vieja

Pegá acá los textos que quieras conservar o mejorar (inicio, quiénes somos, el sistema constructivo, etc.). Claude Code los reescribe para SEO.

```
[PEGAR TEXTOS]
```

---

## 8. PDF comerciales (para después)

- PDF 1, título y qué materiales describe:
- PDF 2, título y qué materiales describe:
- Lista de materiales por sistema (estructura, aislación EIFS, terminaciones, aberturas, instalaciones):

---

## 9. Dónde van los archivos de imágenes

Guardalos en el repo con estos nombres para que Claude Code los encuentre:

```
src/assets/
  modelos/
    nombre-del-modelo/
      01-portada.jpg
      02-render-frente.jpg
      03-render-interior.jpg
      plano.jpg
  obras/
    nombre-de-la-obra/
      01-portada.jpg
      02-foto.jpg
  logo/
    logo.svg
public/
  pdf/
    (los 2 PDF van acá cuando estén)
```

**Consejos:**
- Nombres sin tildes, sin espacios, en minúsculas y con guiones.
- Subí las imágenes en buena calidad (no hace falta achicarlas): la web las optimiza sola al construir.
- Los planos mejor en JPG o PNG; si son PDF, avisame y lo resolvemos.
