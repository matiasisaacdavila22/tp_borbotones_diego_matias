$(document).ready(function() {
    var isAuth = localStorage.getItem('isAuth');
      if ( isAuth != null) {
          $("#login").hide();
          $("#register").hide();
          $("#logout").show();
          $("#config").show();
          $("#pago").show();
          $("#taller").show();
          $("#obras").show();
          }else{
      $("#login").show();
      $("#register").show();
      $("#logout").hide();
      $("#config").hide();
      $("#pago").hide();
      $("#taller").show();
      $("#obras").hide();
        }

  $("#logout").click( function() {
            localStorage.removeItem('isAuth');
          //  localStorage.clear();
            location.href ="../views/home.html";
        });

$("#login").click( function() {
          location.href ="../views/login.html";
              });

$("#register").click( function() {
          location.href ="../views/register.html";
              });

$("#obras").click( function() {
          location.href ="../views/obras/index.html";
              });

$("#ingresar").click( function() {
        alert('fadsfsdfs');
    });

$("#taller").click( function() {
            location.href ="../views/talleres/view.html";
        });

});
function salir() {
  location.href ="../views/home.html";
}
