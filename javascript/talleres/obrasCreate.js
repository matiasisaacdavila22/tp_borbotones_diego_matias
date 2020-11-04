$(document).ready(function() {

  $( "#formObras" ).submit(function( event ) {
    saveObra() ;
    mensajeRegistro();
    event.preventDefault();
    });

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
        }else if(selectedValue == 2){
          $("#textarea").hide();
          $("#textLabel").hide();
          $("#list2").hide();
          $("#autorClasico").show();
          $("#nombreAutor").show();
          $("#anioClasico").show();
          $("#labelAutor").show();
          $("#labelNombre").show();
          $("#labelAnio").show();
        }else{
          $("#textarea").hide();
          $("#textLabel").hide();
          $("#list2").hide();
          $("#autorClasico").hide();
          $("#nombreAutor").hide();
          $("#anioClasico").hide();
          $("#labelAutor").hide();
          $("#labelNombre").hide();
          $("#labelAnio").hide();
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

    function mensajeRegistro(){
      swal({
        title: "Muy Bien!",
        text: "Continuar!",
        icon: "success",
        button: "Aww yiss!",
      }).then((value) => {
               location.href ="./index.html";
      });
     }
     function saveObra() {
           getObras();
            var fecha = new Date();
            let photo = document.getElementById('image_logo').files[0].name;
             var id = getId();
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
             saveObra(obra);
        }
