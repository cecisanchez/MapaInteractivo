var mapa;

/* Crear la variable posicionCentral con las coordenadas donde se va a centrar el mapa */
var posicionCentral = {lat: -31.4107244, lng: -64.1935737};
// Inicializa el mapa con un valor de zoom y una locación en el medio
function inicializarMapa () {
  map = new google.maps.Map(document.getElementById('map'), {
    center: posicionCentral,
    zoom: 16
  });
  mapa = map; // reasigno valor a variable mapa
  
  geocodificadorModulo.inicializar()
  marcadorModulo.inicializar()
  direccionesModulo.inicializar()
  lugaresModulo.inicializar()
  streetViewModulo.inicializar()
}
