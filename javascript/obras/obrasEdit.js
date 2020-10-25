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
          mostrarObra();
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

     function mostrarObra(){
       var obra;
       if(localStorage.getItem("obra")){
         var personJSONFromLS = localStorage.getItem("obra");
         obra = JSON.parse(personJSONFromLS);
         var ruta = '../img/'+obra.foto;
         $('#imagenPrevia').html("<img src='"+ruta+"' />");

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
     }else{
       location.href ="../home.html";
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

     function editar(){
       var fecha = new Date();
       let foto = document.getElementById('image_logo').files[0].name;
     var obra = {
         "name": $("#name").val(),
         "autor": $("#autor").val(),
         "description": $("#description").val(),
         "anio": $("#anio").val(),
         "estilo": $("#estilo").val(),
         "tecnica": $("#tecnica").val(),
         "list": document.getElementById("list").value,
         "list2": document.getElementById("list2").value,
         "textarea": $("#textarea").val(),
         "list3": document.getElementById("list3").value,
         "autorClasico": $("#autorClasico").val(),
         "nombreAutor": $("#nombreAutor").val(),
         "anioClasico": $("#anioClasico").val(),
         "fechaPublicacion": fecha,
         "foto" : foto,
       }
     var jsonObra = JSON.stringify(obra);
     localStorage.setItem("obra", jsonObra);
             alerta();

     }
     function alerta(){
       swal({
         title: "Muy Bien!",
         text: "Continuar!",
         icon: "success",
         button: "Aww yiss!",
       }).then((value) => {
                location.href ="./index.html";
       });
     }
