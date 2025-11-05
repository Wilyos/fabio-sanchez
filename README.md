# Integración del formulario: WhatsApp + Google Sheets

Este proyecto envía los datos del formulario de contacto a:
- WhatsApp (abre el chat con mensaje prellenado)
- Google Sheets (vía Google Apps Script como Web App)

## 1) WhatsApp
No requiere configuración adicional. El número está definido en `script.js`:

- `WHATSAPP_NUMBER = '573165281355'` (formato internacional sin `+`).

El mensaje se arma así:
```
Hola mi nombre es: [Nombre] estos son mis datos: correo [correo], [telefono] estoy interesado en cotizar. [mensaje]
```

## 2) Guardado en Google Sheets (Apps Script)
Para almacenar cada lead en una Hoja de cálculo ("Excel de Google Drive"), crea un endpoint con Google Apps Script.

### Pasos
1. Crea una hoja en Google Sheets (vacía o con encabezados). Por ejemplo: `Leads landing`.
2. Ve a Extensiones > App Script (se abrirá el editor).
3. Reemplaza el contenido por este script:

```javascript
function doPost(e) {
  try {
    var ss = SpreadsheetApp.openById('REEMPLAZAR_SHEET_ID');
    var sheet = ss.getSheetByName('Hoja 1') || ss.getSheets()[0];

    var data = {};
    if (e.postData && e.postData.contents) {
      data = JSON.parse(e.postData.contents);
    }

    var ts = new Date();
    sheet.appendRow([
      ts,
      data.nombre || '',
      data.email || '',
      data.telefono || '',
      data.mensaje || '',
      data.origen || '',
      data.page || '',
      data.userAgent || ''
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

4. Obtén el ID de la hoja (está en la URL del Sheet) y reemplázalo en `openById('REEMPLAZAR_SHEET_ID')`.
5. Publica el Web App:
   - Ir a: Implementar > Implementar como aplicación web
   - "Ejecutar como": Tú (tu cuenta)
   - "Quién tiene acceso": Cualquiera (o Cualquiera con el enlace)
   - Copia la URL de la Web App desplegada.
6. En `script.js`, pega esa URL en:
   ```js
   const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/XXX/exec';
   ```
7. Opcional: Agrega encabezados CORS en el Apps Script si quieres leer la respuesta desde el navegador:
   ```javascript
   function doPost(e) {
     var output = ContentService.createTextOutput();
     output.setMimeType(ContentService.MimeType.JSON);
     var data = {};
     try {
       var ss = SpreadsheetApp.openById('REEMPLAZAR_SHEET_ID');
       var sheet = ss.getSheetByName('Hoja 1') || ss.getSheets()[0];
       if (e.postData && e.postData.contents) {
         data = JSON.parse(e.postData.contents);
       }
       sheet.appendRow([
         new Date(), data.nombre||'', data.email||'', data.telefono||'', data.mensaje||'', data.origen||'', data.page||'', data.userAgent||''
       ]);
       output.setContent(JSON.stringify({ ok: true }));
     } catch (err) {
       output.setContent(JSON.stringify({ ok: false, error: String(err) }));
     }
     return addCors(output);
   }

   function doOptions(e) {
     return addCors(ContentService.createTextOutput('OK'));
   }

   function addCors(output) {
     return output
       .setMimeType(ContentService.MimeType.JSON)
       .setHeaders({
         'Access-Control-Allow-Origin': '*',
         'Access-Control-Allow-Methods': 'POST, OPTIONS',
         'Access-Control-Allow-Headers': 'Content-Type'
       });
   }
   ```
   En este caso, puedes quitar `mode: 'no-cors'` del `fetch`.

## Campos que se guardan
- timestamp (ISO)
- nombre
- email
- telefono
- mensaje
- origen (constante "landing-fabio-sanchez")
- page (URL de la página)
- userAgent (navegador)

## Notas
- Si el usuario no tiene WhatsApp, el enlace puede abrir WhatsApp Web.
- En móviles, abrirá la app de WhatsApp.
- La llamada a Apps Script es asíncrona y no bloquea la apertura de WhatsApp.
