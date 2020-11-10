var map;
var marker;

function bootstrap() {
    var location = [-34.5221554, -58.7000067];
    map = L.map('mapid').setView(location, 15);
    marker =L.marker(location)
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);
  }



$(document).ready(function () {
    $('#direccionesDropdown').empty();
    $('#direccionesDropdown').append($('<option></option>').val("-seleccionar-").html("-seleccionar-"));
});

function validarDir() {
    $('#direccionesDropdown').empty();
    var direccion = $("#direccion").val();
    var altura = $("#altura").val();

    if (altura != "" && direccion != "") {
        var direcciones = getDireccionesFrom(
            "http://servicios.usig.buenosaires.gob.ar/normalizar/?direccion="
            + direccion + " " + altura
        );
    } else {
        alert("Ingresar direccion y altura");
    }

}


function getDireccionesFrom(url) {
    var promise = getJsonFrom(url);


    promise.then(function getJsonList(result) {
        json = JSON.parse(result);
        var array = json.direccionesNormalizadas;
        $('#direccionesDropdown').empty();
        $('#direccionesDropdown').append($('<option></option>').val("-seleccionar-").html("-seleccionar-"));

        $.each(array, function (i, p) {
            var direccion = new DireccionNormalizada.fromJson(array[i]);
            $('#direccionesDropdown').append($('<option></option>').val(direccion.direccion).html(direccion.direccion));
        });

    }, function (error) {
        console.log(error);
    });
}

function refreshValidate() {

    var direccion = document.getElementById("direccionesDropdown").value;
    $('#direccionesDropdown').empty();
    $('#direccionesDropdown').append($('<option></option>').val(direccion).html(direccion));



    var direcciones = getFirstDireccion(
        "http://servicios.usig.buenosaires.gob.ar/normalizar/?direccion="
        + direccion
    );
}

function getFirstDireccion(url) {
    var promise = getJsonFrom(url);


    promise.then(function getJsonList(result) {
        json = JSON.parse(result);
        var array = json.direccionesNormalizadas;
        var direccion = new DireccionNormalizada.fromJson(array[0]);

        $("#altura").val(direccion.altura);
        $("#direccion").val(direccion.nombreCalle);
        $('#direccionesDropdown').empty();
        $('#direccionesDropdown').append($('<option></option>').val(direccion).html(direccion.direccion));

        map.removeLayer(marker)
        var location = [direccion.coordenadas.y, direccion.coordenadas.x];
        marker = new L.Marker(new L.LatLng(location[0], location[1]));
        marker.addTo(map);
        map.setView(location, 15);


        //var location = [direccion.coordenadas.y, direccion.coordenadas.x];
        //var marker =L.marker(location)
        //marker.addTo(map);
        //map.setView(location, 15);

        // Si es vacio, error

        // Si es tipo calle_calle, ingresar altura

        // Si es tipo calle_altura mostrar mapita

    }, function (error) {
        console.log(error);
    });
}

function validarForm(){
    alert("Taller solicitado correctamente, proximamente nos comunicaremos con usted");
      location.href ="./home.html";
}
