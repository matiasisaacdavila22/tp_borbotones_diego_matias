$(document).ready(function() {
  $("#formularioLogin" ).submit(function( event ) {
   validarUser();
   event.preventDefault();
 });
  var isAuth = localStorage.isAuth;
  if(isAuth){
    location.href ="./home.html";
   }

});

function validarUser() {
  var email = $("#email").val();
  var password = $("#password").val();
  var existsUser = searchUserLocalStore(email, password);

  if(existsUser){
        localStorage.setItem('isAuth', true);
        mensajeLoginSuccess();
        }else{
         mensajeLoginError();
    }
}

function salir() {
  location.href ="../views/home.html";
}

function mensajeLoginSuccess(){
  swal({
  title: "Muy bien!",
  text: "Te logueaste correctamente!",
  icon: "success",
  button: "continue!",
}).then((value) => {
           location.href ="./home.html";
});
}

function mensajeLoginError(){
  swal({
  title: "algo salio mal!",
  text: "toca continuar para volver a intentarlo!",
  icon: "warning",
  button: "Continuar!",
});
}
