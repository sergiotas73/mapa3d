🗺️ Manual de Usuario — Mapa 3D
Versión: Última publicada | Idioma: Español | Plataforma: Navegador moderno (Chrome, Edge, Firefox, Safari) o PWA instalada en móvil.
1. 🚀 ¿Qué es esta app?
Mapa 3D es tu compañera ideal para consultar, navegar y controlar recintos y puntos de interés (parcelas SIGPAC, rutas, ubicaciones) sobre mapas en 2D y 3D.
🌟 Funciones destacadas:
• 🗺️ Mapas base variados: Mapa (OSM), Ortofoto PNOA (IGN), Satélite Esri y mapas offline .pmtiles.
• 📁 Importación KMZ/KML: Soporta puntos, líneas y polígonos.
• ✅ Control de parcelas visitadas: Con un color verde persistente para que no te pierdas nada.
• 🚘 Navegación paso a paso: Con voz en español, coche 3D y velocidad en tiempo real.
• 📶 100% Offline: Funciona totalmente sin conexión tras la primera apertura con red.
• 📲 Instalable (PWA): Llévala como una app nativa en la pantalla de inicio de tu móvil.
2. 📲 Instalación y primer uso
2.1 📲 Instalar como aplicación (¡Muy recomendado!)
• 🤖 Android (Chrome): Abre la URL ➔ Menú ⋮ ➔ Añadir a pantalla de inicio ➔ Instalar.
• 🍏 iOS (Safari): Abre la URL ➔ Botón Compartir ➔ Añadir a pantalla de inicio.
💡 Al instalarla, la app se abre a pantalla completa y fija la orientación en vertical para mayor comodidad.

2.2 🌐 Primera apertura (requiere red)
La primera vez que la abras necesitarás conexión para:
1. ⚙️ Registrar el Service Worker (para uso offline).
2. 📦 Descargar el "esqueleto" (HTML, scripts y estilos) en la caché local.
3. ⛰️ Descargar el relieve y las teselas si activas el 3D.
¡A partir de este momento, ya no necesitarás internet para abrir la app!



2.3 💾 Descargar el mapa de tu zona (recomendado)
Antes de irte al campo o a zonas sin cobertura:
1. 📥 Importa tus puntos/recintos (botón KMZ).
2. ⚙️ Pulsa Opciones ➔ Descargar mapa cerca de los puntos.
3. 👍 Confirma descarga. La app guardará los mapas y relieve alrededor de puntos y rutas.
3. 🖥️ La interfaz
3.1 🔝 Barra superior
Botón
Función
🗺️ Capas
Cambiar el mapa base
📂 KMZ
Importar archivos .kmz / .kml
📍 Puntos
Abrir la lista de puntos y recintos
⛰️ 3D
Activar/desactivar el relieve 3D
🎯 GPS
Activar la ubicación y el seguimiento
⚙️ Opciones
Configuración general y utilidades
3.2 🧭 Elementos flotantes
• 🧭 Brújula (arriba a la derecha): Indica la orientación. Al tocarla, alterna entre MANUAL, NORTE y AUTO.
• 🟦 Flecha azul triangular (arriba a la izquierda): Aparece con un recinto seleccionado. ¡Apunta desde tu posición hacia el centro de la parcela!
• 📐 Indicador de inclinación (centro): Se muestra 1 segundo al ajustar la inclinación con dos dedos en modo conducción.
• 🛣️ Cuadro de direcciones (arriba al centro): Exclusivo del modo navegación. Muestra la próxima maniobra, distancia y velocidad en km/h (si vas a más de 20 km/h).
• ⏱️ Barra inferior de navegación: Muestra tiempo restante (ETA), hora de llegada prevista y botones Iniciar / Simular / Cerrar.
4. 🗺️ Mapas base y capas
4.1 🎨 Capas disponibles
Pulsa Capas y elige tu preferida:
• 🏙️ Mapa (OpenStreetMap): Cartografía general con calles y nombres.
• 🌾 Ortofoto PNOA (IGN): La ortofoto oficial de España, la más precisa para agricultura.
• 🛰️ Satélite Esri: Imagen satelital mundial.
• 📦 + Cargar mapa offline (.pmtiles): Abre mapas guardados en tu dispositivo. (Si incluye dem, mdt, terrain o terrarium en el nombre, se carga como relieve 3D).
💡 Combinaciones recomendadas:
• 🚜 Uso agrícola en España: Ortofoto PNOA + ⛰️ 3D activado.
• 🚗 Conducción: Mapa (OSM) + ⛰️ 3D activado.
• 📴 Sin conexión: Utiliza el mapa base que hayas precargado.

5. 📥 Importación de archivos KMZ / KML
5.1 🛠️ Cómo importar
1. Pulsa KMZ.
2. Selecciona uno o varios archivos .kmz o .kml.
3. Elige los colores personalizados para:
o 🔴 Color de los puntos.
o 🔵 Color de las líneas de itinerario.
o 🟢 Color de los polígonos.
4. Pulsa Importar. (Tus colores preferidos se guardarán para la próxima).
5.2 🔍 ¿Qué datos se importan?
• 📍 Puntos, líneas, polígonos (recintos SIGPAC) y tracks GPS (gx:Track).
• 📋 Información extraída: Nombre, uso SIGPAC (código y descripción), grupo de cultivo (secano/regadío/permanente/pastos), pendiente y superficie (calculada o del KML).


6. 📋 La lista de puntos
6.1 📂 Abrir la lista
Pulsa Puntos para desplegar el panel desde la parte inferior.
6.2 📊 ¿Qué muestra cada elemento?
• Nombre, tipo de geometría, uso SIGPAC, superficie, pendiente, régimen (secano/regadío), distancia desde tu ubicación y acimut (grados y punto cardinal).
6.3 🔍 Búsqueda y ordenación
• 🔎 Búsqueda: Filtra por nombre en tiempo real.
• 📡 Con GPS activo: Los puntos se ordenan solos del más cercano al más lejano.
• 📴 Sin GPS: Se mantiene el orden de importación original.
6.4 🎯 Selección y colores
Al tocar una fila:
• ✈️ El mapa vuela hacia la ubicación.
• 🟢 El recinto seleccionado se ilumina en verde brillante.
• 🟡 La fila se resalta en amarillo.
• 🗣️ Si tiene uso SIGPAC, la app lo lee por voz.
🎨 Código de colores:
• 🟢 Verde: Recinto o punto marcado como visitado.
• 🟡 Amarillo: Recinto o punto actualmente seleccionado.
• ⚪ Sin color: Estado normal.
🏠 Si fijas un punto de origen, aparecerá siempre en la primera fila con el icono de la casa.
7. 🚜 Selección de recintos y uso SIGPAC
7.1 👆 Selección rápida
Toca cualquier polígono en el mapa o cualquier fila de la lista.
7.2 ⚡ ¿Qué sucede al seleccionar?
1. El recinto se ilumina en verde brillante.
2. Se abre un desplegable con los botones Ir aquí (calcula la ruta) y Visitado.
3. 📢 La app lee por voz el uso SIGPAC, el grupo de cultivo y la pendiente.
4. 🟦 Aparece la flecha azul apuntando al centroide del recinto.

8. ✅ Recintos visitados
8.1 🟢 Marcar como visitado
1. Toca un recinto para abrir su ventana.
2. Pulsa el botón rojo Visitado.
3. Cambiará a verde (Visitado ✓), pintando la parcela de verde sobre el mapa y en la lista.
8.2 🔗 Heredar estado a los puntos
Si un punto está dentro de un polígono visitado, se marcará automáticamente como verde en la lista. ¡Ideal para saber qué zonas ya has inspeccionado!
8.3 💾 Persistencia
Las marcas se guardan en el almacenamiento de tu móvil. No se borrarán al cerrar la app.

9. 📡 GPS y seguimiento
9.1 🎯 Activar el GPS
Pulsa GPS y acepta los permisos de ubicación de tu navegador.
9.2 🔄 Modos del botón GPS
El botón alterna su comportamiento según la situación:
• Con recinto seleccionado: Posición actual ↔ Recinto seleccionado.
• Sin recinto seleccionado: Posición actual ↔ Mapa general.
9.3 🧭 Control de orientación (Brújula)
• ✋ MANUAL: Giras el mapa libremente con los dedos.
• ⬆️ NORTE: El norte siempre apunta hacia arriba.
• 📱 AUTO: El mapa gira según la orientación física del móvil (muestra un cono verde indicando a dónde miras).

10. 🚘 Modo conducción (Navegación)
10.1 🎬 Iniciar la navegación
• Opción A: Selecciona un recinto/punto ➔ Pulsa Ir aquí ➔ Pulsa Iniciar.
• Opción B: Haz un clic o pulsación larga (~1 seg) en cualquier zona vacía del mapa para trazar una ruta directa.
10.2 🏎️ Durante la marcha
• ⛰️ Se activa el 3D, la cámara de seguimiento y la brújula AUTO.
• 🗣️ Instrucciones por voz: Indicaciones automáticas en español.
• 📳 Vibración: Avisos táctiles al acercarte a una maniobra.
• 🚘 Coche 3D: Tu icono de posición (personalizable en Opciones).
• 🔄 Recálculo automático: Si te desvías más de 150 m durante 20 segundos, se recalculará la ruta en silencio.
🔒 El mapa se bloquea durante la conducción para evitar gestos accidentales. Pulsa Cerrar para liberar la vista.

11. 🛣️ Cálculo de rutas
• 🌐 Servidor: Utiliza el motor OSRM (routing.openstreetmap.de) actualizado con datos de OpenStreetMap.
• 📍 Origen: Prioriza tu posición GPS ➔ Punto de origen ➔ Centro del mapa.
• ⚠️ Sin red: Si pierdes la conexión al calcular, la app trazará una línea recta orientativa al destino calculada a 50 km/h.

12. 🏠 Punto de origen
Un punto fijo que sirve como origen por defecto para tus rutas cuando no hay GPS.
• 📍 Configurar: Opciones ➔ 🏠 Fijar punto de origen ➔ Toca en el mapa y ponle nombre.
• 🔴 Icono: Se dibuja como una casita roja y aparece en el número 1 de tu lista de puntos.
• 🗑️ Borrar: Opciones ➔ ✕ Borrar punto de origen.

13. ⛰️ Modo 3D
• 🏔️ Activación: Pulsa 3D en la barra superior. Muestra el relieve del terreno (exageración 1.5x) y sombras.
• 📐 Inclinación: Inclinación libre de 62° (70° en modo conducción). Ajustable deslizando dos dedos en vertical.
• 🏢 Edificios 3D: Muestra volúmenes urbanos automáticamente con zoom alto cuando el mapa está parado.
14. ⚙️ Opciones avanzadas
Desde el menú Opciones puedes ajustar:
• 🔤 Nombres de puntos: Muestra etiquetas de texto sobre los puntos (zoom ≥ 14).
• 🔊 Voz & Vibración: Conmutadores para silenciar o apagar la respuesta háptica.
• 🏢 Edificios 3D (parado): Activa o desactiva las estructuras urbanas.
• 📍 Lista solo puntos: Filtra la lista para no saturar con líneas o polígonos.
• 📏 Radio y Zoom Máximo: Define el área (300m - 1000m) y el detalle (Zoom 16-18) para la descarga offline.
• 🚘 Icono del coche: Cambia el color (rojo, azul, verde, amarillo, blanco, negro o punto azul).
• 📥 Descargar / Borrar mapas: Administra la memoria de teselas en tu dispositivo.
• 📜 Historial de errores: Consulta el registro técnico de la app.
• 🗑️ Borrar todos los puntos / marcas: Limpia el mapa manteniendo tu configuración.

15. 📴 Funcionamiento sin conexión (Offline)
📲 Pasos antes de salir al campo:
1. 📲 Instala la app como PWA.
2. 🌐 Ábrela una vez con WiFi/4G para registrar el Service Worker.
3. 📁 Importa tus archivos KML/KMZ.
4. ⚙️ Ve a Opciones ➔ Descargar mapa cerca de los puntos y espera a que complete el proceso.
¡Listo! Ya tienes cartografía y datos listos para trabajar sin cobertura.

16. ⚠️ Historial de errores
• 🟡 Toast de aviso: Si la app sufre un error en segundo plano, verás un pequeño aviso amarillo con un triángulo durante 1 segundo.
• 📋 Consultar registro: Ve a Opciones ➔ Historial de errores. Podrás ver hasta 200 eventos con fecha y hora para identificar fallos.


17. 🖐️ Atajos y gestos
📱 En Móvil
Gesto
Acción
Toque corto (zona vacía)
Deseleccionar todo
Pulsación larga (~1s)
Marcar punto y calcular ruta
Toque en elemento
Abrir ficha emergente
Dos dedos (horizontal)
Rotar el mapa (en modo MANUAL)
Dos dedos (vertical)
Cambiar inclinación 3D
Pellizcar
Zoom in / Zoom out
💻 En PC
Acción
Resultado
Clic izquierdo (zona vacía)
Marcar punto y calcular ruta
Clic derecho (zona vacía)
Ver coordenadas exactas
Arrastrar
Desplazar mapa
Rueda del ratón
Zoom
Ctrl + Arrastrar
Rotar o inclinar el mapa


18. ❓ Preguntas Frecuentes (FAQ)
• ¿Puedo usar la app totalmente sin internet?
o ¡Sí! Solo necesitas abrirla una vez con red para guardar la app y descargar las teselas de tu zona desde el menú Opciones.
• ¿Por qué no puedo mover el mapa mientras navego?
o Es una función de seguridad. El mapa se bloquea centrado en tu vehículo. Para moverlo libremente, pulsa Cerrar en la barra inferior.
• ¿Cómo marco una parcela como visitada?
o Toca la parcela ➔ Pulsa Visitado. Se volverá de color verde brillante.
• ¿Qué pasa si borro todos los puntos?
o Eliminarás los KML e importaciones, pero tu punto de origen guardado se mantendrá a salvo.
📚 Glosario rápido
• SIGPAC: Sistema de Información Geográfica de Parcelas Agrícolas.
• Ortofoto: Fotografía aérea corregida geométricamente para medir distancias reales.
• PWA: Aplicación web instalable como si fuera una app nativa de la store.
• Tesela: Cada uno de los pequeños cuadros de imagen que componen el mapa completo.


Envíame un correo a sergiotas@hotmail.com





