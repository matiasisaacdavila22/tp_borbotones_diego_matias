  var ungsLocation = [-34.5221554, -58.7000067];
  var map = L.map('mapid').setView(ungsLocation, 15);

  L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  function mostrarTaller(x, y){
    var x1 = parseFloat(x);
    var y1 = parseFloat(y);
    var location = [x1, y1];
          var marker = L.marker(location).addTo(map)
          .bindPopup("taller")
          .openPopup();
           map.panTo(location);

    }
