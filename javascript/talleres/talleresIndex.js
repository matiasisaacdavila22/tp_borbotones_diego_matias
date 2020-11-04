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

    function mostrarTalleres(){
      var talleres = getTalleres();

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

            text.style.display = "none";
            contenido.innerHTML +=`
            <tr>
                <td><label id='name'>${nombre}</label></td>
                <td><label id="nameAutor">${valor.activities}</label></td>
                <td><label id="type">${direccion}</label></td>
                <td><label id="type">${valor.phone}</label></td>
                <td>
                <button type="" class="btn btn-success btn-sm" onclick="mostrarTaller(${x}, ${y})" >Ubicacion</button>
                </td>
            </tr>
            `
           }
          }else{

          }
    }
    function buscarTaller(){
      var name = $("#texto").val();
         var buscarTaller = searchTallerName(name);
         if(buscarTaller != null){
          var x = buscarTaller[0].direccionNormalizada.coordenadas.x;
          var y = buscarTaller[0].direccionNormalizada.coordenadas.y;
            mostrarTaller(x, y);
         }

    }
