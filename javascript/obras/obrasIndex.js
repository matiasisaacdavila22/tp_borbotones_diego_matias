$(document).ready(function() {
 const contenido = document.getElementById('contenido');
 var isAuth = localStorage.getItem('isAuth');
     if ( isAuth != null) {
          $("#login").hide();
          $("#register").hide();
          $("#logout").show();
          $("#panel").show();
          }else{
                location.href ="../home.html";
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

  mostrarObras();

});

    function mostrarObras(){
      var obras = getObras();

      if(obras.length > 0){
        contenido.innerHTML = '';

        for(let valor of obras){
            var text = document.getElementById('text');
            text.style.display = "none";
            contenido.innerHTML +=`
            <tr>
                <td><label id='id'>${valor.id}</label></td>
                <td><label id='name'>${valor.name}</label></td>
                <td><label id="nameAutor">${valor.autor}</label></td>
                <td><label id="type">${valor.estilo}</label></td>
                <td>
                ${valor.status ? `<span class="badge badge-success">Activa</span>` : `<label class="badge badge-danger">Pendiente</label>`}
                </td>
                <td>
                  <a href="./edit.php?variable=${valor.id}" onClick="mostrarObra(${valor.id})" class="btn btn-warning">Editar</a>
                  <button type="" class="btn btn-danger btn-sm" onclick="eliminarObra(${valor.id})" >Eliminar</button>
                </td>
            </tr>
            `
           }
          }else{
            cargarObras();
          }
    }

    function mostrarObras2(){
      var obras = getObras();

      if(obras.length > 0){
        var contenido = document.getElementById('contenido');
        contenido.innerHTML = '';

        for(let valor of obras){
            var text = document.getElementById('text');
            text.style.display = "none";

            var id = document.getElementById('id');
            id.innerHTML+= valor.id;

            var name = document.getElementById('name');
            name.innerHTML += valor.name;

            var nameAutor = document.getElementById('nameAutor');
            nameAutor.innerHTML += (valor.autor.length > 1 ) ? valor.autor : valor.autorClasico;

            var type = document.getElementById('type');
            type.innerHTML += (valor.list == 1) ? 'Original' : 'Replica';

            var status = document.getElementById('status');
            status.innerHTML += (valor.list3 == 1) ? 'Venta' : 'Exibicion';
           }
          }else{
            var text = document.getElementById('text');
            text.style.display = "block";;
          }
    }

  function eliminarObra(id){
      swal({
  title: "Tu estas Seguro?",
  text: "La eliminacion es definitiva de tu Obra!",
  icon: "warning",
  buttons: true,
  dangerMode: true,
})
.then((willDelete) => {
  if (willDelete) {
    swal("Poof! Tu obra se elimino con Exito!", {
      icon: "success",
    });
      deleteObra(id);
      location.reload();
  } else {
    swal("Tu obra sigue Guardada!");
  }
});
}
