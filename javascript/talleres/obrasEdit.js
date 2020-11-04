$(document).ready(function() {
    var isAuth = localStorage.getItem('isAuth');

    if ( isAuth != null) {
          $("#login").hide();
          $("#register").hide();
          $("#logout").show();
          $("#panel").show();
          }else{
                location.href ="../home.html";
        }

          getSelectValue();

          var idObra = $("#idObra2").val();
            $( "#formObrasEdit" ).submit(function( event ) {
            mensajeRegistro(idObra);
            event.preventDefault();
            });

  $("#logout").click( function() {
            localStorage.removeItem('isAuth');
          //  localStorage.clear();
            location.href ="../home.html";
        });

$("#panel").click( function() {
          location.href ="../panel.html";
              });

$("#obras").click( function() {
          location.href ="../obras/index.html";
              });

});

function getSelectValue(){
        var selectedValue = document.getElementById("list").value;

        if(selectedValue == 1){
          $("#textarea").show();
          $("#textLabel").show();
          $("#list2").show();
          $("#autorClasico").hide();
          $("#nombreAutor").hide();
          $("#anioClasico").hide();
          $("#labelAutor").hide();
          $("#labelNombre").hide();
          $("#labelAnio").hide();
        }else{
          $("#textarea").hide();
          $("#textLabel").hide();
          $("#list2").hide();
          $("#autorClasico").show();
          $("#nombreAutor").show();
          $("#anioClasico").show();
          $("#labelAutor").show();
          $("#labelNombre").show();
          $("#labelAnio").show();
        }
    }

    function mostrarObra(id){
        var obra = searchObrasLocalStore(id);
        alert(obra.name);
        var ruta = '../img/'+obra.foto;
        $('#imagenPrevia').html("<img src='"+ruta+"' />");
      document.getElementById('id').value = obra.id;
      document.getElementById('name').value = obra.name;
      document.getElementById('autor').value = obra.autor;
      document.getElementById('description').value = obra.description;
      document.getElementById('anio').value = obra.anio;
      document.getElementById('estilo').value = obra.estilo;
      document.getElementById('tecnica').value = obra.tecnica;
      document.getElementById('list').value = obra.list;
      document.getElementById('list3').value = obra.list3;
      if(obra.list == 1){
        document.getElementById('list2').value = obra.list2;
        document.getElementById('textarea').value = obra.textarea;
      }else{
        document.getElementById('autorClasico').value = obra.autorClasico;
        document.getElementById('nombreAutor').value = obra.nombreAutor;
        document.getElementById('anioClasico').value = obra.anioClasico;
    }
    }

     function cambiaTamanio(){
       if ('#image_logo') {
         document.images.logo.width=100;
         document.images.logo.height=100;
       } else {
         logo = document.getElementById("logo");
         logo.width = 100;
         logo.height = 100;
       }
     }
     function editObra() {
            var fecha = new Date(); // se va cambiar la fecha por si,plificacion del codigo
            let photo = document.getElementById('image_logo').files[0].name;
             var id = $("#idObra2").val();
             var name = $("#name").val();
             var autor = $("#autor").val(),
             description = $("#description").val(),
             anio = $("#anio").val(),
             estilo = $("#estilo").val(),
             tecnica = $("#tecnica").val(),
             list = document.getElementById("list").value,
             list2 = document.getElementById("list2").value,
             textarea = $("#textarea").val(),
             list3 = document.getElementById("list3").value,
             autorClasico = $("#autorClasico").val(),
             nombreAutor = $("#nombreAutor").val(),
             anioClasico = $("#anioClasico").val(),
             fechaPublicacion = fecha,
             foto = photo,
             status = false;

            var obra = createObras(id, name, autor, description, anio, estilo, tecnica, list, list2, textarea, list3, autorClasico, nombreAutor, anioClasico, fechaPublicacion, foto, status);
             editarObra(id, obra);
           }

     function mensajeRegistro(id){
     swal({
     title: "Tu estas Seguro?",
     text: "cambiran los datos de la Obra!",
     icon: "info",
     buttons: true,
     dangerMode: true,
   })
   .then((willDelete) => {
     if (willDelete) {
       swal("Poof! Tu obra se actualizo con Exito!", {
         icon: "success",
       });
         editObra();
          location.href ="./index.html";
     } else {
       swal("Tu obra sigue Guardada!");
     }
   });
   }
