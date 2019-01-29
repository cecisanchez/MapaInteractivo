streetViewModulo = (function () {
  var paronama // 'Visor' de StreetView
  var pano = document.getElementById('pano');

  function inicializar () {
        /* Completar la función inicializar()  que crea un panorama
        en una posición y lo muestra en la página. */
        panorama = new google.maps.StreetViewPanorama(pano, {
          position: posicionCentral,
        });
  }

    // Actualiza la ubicación del Panorama
  function fijarStreetView (ubicacion) {
      panorama = new google.maps.StreetViewPanorama(pano, {
      position: ubicacion,
    });
    
  }

  return {
    inicializar,
    fijarStreetView
  }
})()
