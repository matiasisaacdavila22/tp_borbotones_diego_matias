  var ungsLocation = [-34.5221554, -58.7000067];
  var map = L.map('mapid').setView(ungsLocation, 15);

  L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

var mapMarkers = [];

  function mostrarTaller(id){
    var taller = searchTallerLocalStore(id);
    var x = taller.direccionNormalizada.coordenadas.x;
    var y = taller.direccionNormalizada.coordenadas.y;
    var x1 = parseFloat(x);
    var y1 = parseFloat(y);
    var location = [x, y];
          var marker = L.marker(location).addTo(map)
          .bindPopup(taller.name)
          .openPopup();
           map.panTo(location);

           marker.on("click", function (event) {
               var clickedMarker = event.layer;
                resaltar(taller.id)
                 });
     this.mapMarkers.push(marker);
    }
    
function removerTalleres(){
  for(var i = 0; i < this.mapMarkers.length; i++){
      this.map.removeLayer(this.mapMarkers[i]);
  }
}
