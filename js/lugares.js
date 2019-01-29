lugaresModulo = (function () {
  var servicioLugares 


  function autocompletar () {
      var radio = new google.maps.Circle({
        center: posicionCentral,
        radius: 20000
        })
      var dir = document.getElementById('direccion');
      var desde = document.getElementById('desde');
      var hasta = document.getElementById('hasta');
      var agregarDir = document.getElementById('agregar');
      var autocompletar = new google.maps.places.Autocomplete(dir);
      var autocompletar = new google.maps.places.Autocomplete(desde);
      var autocompletar = new google.maps.places.Autocomplete(hasta);
      var autocompletar = new google.maps.places.Autocomplete(agregarDir);
      autocompletar.setBounds(radio.getBounds());
      
      //Completar la función autocompletar(): autocompleta los 4 campos de texto de la
       // página (las direcciones ingresables por el usuario).
       // Para esto creá un círculo con radio de 20000 metros y usalo para fijar
        //los límites de la búsqueda de dirección. El círculo no se debe ver en el mapa. */
  }

    // Inicializo la variable servicioLugares y llamo a la función autocompletar
  function inicializar () {
    servicioLugares = new google.maps.places.PlacesService(mapa)
    autocompletar()
  }

    // Busca lugares con el tipo especificado en el campo de TipoDeLugar

  function buscarCerca (posicion) {
    var lugar = [];
     var tipoDeLugar = document.getElementById('tipoDeLugar').value;
     var radioMetros = document.getElementById('radio').value;
     lugar[0] = tipoDeLugar;

     servicioLugares.nearbySearch({
       location: {
         lat: posicion.lat(),
         lng: posicion.lng(),
       },
       radius: radioMetros,
       type: lugar,
      },
      marcadorModulo.marcarLugares);


        /* Completar la función buscarCerca  que realice la búsqueda de los lugares
    del tipo (tipodeLugar) y con el radio indicados en el HTML cerca del lugar
    pasado como parámetro y llame a la función marcarLugares. */

  }
  return {
    inicializar,
    buscarCerca
  }
})()
