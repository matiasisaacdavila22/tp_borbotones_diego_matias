$(document).ready(function() {
 const contenido = document.getElementById('contenido');
 var isAuth = localStorage.getItem('isAuth');
     if ( isAuth != null) {
          $("#login").hide();
          $("#register").hide();
          $("#logout").show();
          $("#panel").show();
          }

  $("#logout").click( function() {
            localStorage.removeItem('isAuth');
            location.href ="../home.html";
        });

$("#panel").click( function() {
          location.href ="../panel.html";
              });

$("#obras").click( function() {
          location.href ="../obras/index.php";
              });

  mostrarTalleres();


});

    function mostrarTalleres(listTalleres){
      var talleres = [];
      if(listTalleres == undefined){
           talleres = getTalleres();
      }else{
          talleres = listTalleres;
      }

      if(talleres.length > 0){
          contenido.innerHTML = '';

        for(let valor of talleres){

            var text = document.getElementById('text');
            var nombreCalle = valor.direccionNormalizada.nombreCalle+' ';
             var alturaCalle = valor.direccionNormalizada.altura+' ';
             var localidad = valor.direccionNormalizada.nombreLocalidad;
             var direccion = nombreCalle.concat(alturaCalle,localidad);
             var x = valor.direccionNormalizada.coordenadas.x;
             var y = valor.direccionNormalizada.coordenadas.y;
             var nombre = valor.name;
            var idTaller = valor.id;
            mostrarTaller(idTaller);
            text.style.display = "none";
            contenido.innerHTML +=`
            <tr id="${idTaller}">
                <td ><label id='name'>${nombre}</label></td>
                <td><label id="nameAutor">${valor.activities}</label></td>
                <td><label id="type">${direccion}</label></td>
                <td><label id="type">${valor.phone}</label></td>
                <td>
                <button type="" class="btn btn-success btn-sm" onclick="mostrarTaller(${idTaller})" >Ubicacion</button>
                </td>
            </tr>
            `
           }
          }else{

          }
    }
    function buscarTaller(){
      removerTalleres();
      var name = $("#texto").val();
         var buscarTaller = searchTallerName(name);
         if(buscarTaller != null){
           mostrarTalleres(buscarTaller);
         }

    }

function pintar(id) {
   document.getElementById(id).style.backgroundColor='#20c997';
}
function despintar(id) {
  document.getElementById(id).style.backgroundColor="#fff";
}

function resaltar(id){
var MyTable = document.getElementById('tableTalleres');
var rows = MyTable.getElementsByTagName('tr');
for (var i = 0; i < rows.length; i++) {
    var aux = rows[i+1];
    if(aux.id == id){
      pintar(id);
}else{
      despintar(aux.id);
}
}
}
