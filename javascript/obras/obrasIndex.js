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

});

      function mostrarObras2() {

      var user = localStorage.user;
      if(user){
        var personJSONFromLS = localStorage.getItem("obra");
        obra = JSON.parse(personJSONFromLS);

      $.ajax({
        type: "POST",
        url: "index.php",
        data: { data: obra },
        dataType: 'json',
        success: function(data) {
            //$('#output').html(data);
            alert(obra.name);
        },
        error: function(error) {
            alert(error);
            console.log(error);
        }
      });
      }
      }

    function mostrarObras(){
      var obra;
      if(localStorage.getItem("obra")){
        var personJSONFromLS = localStorage.getItem("obra");
        obra = JSON.parse(personJSONFromLS);

        var name = document.getElementById('name');
        name.innerHTML = obra.name;

        var nameAutor = document.getElementById('nameAutor');
        nameAutor.innerHTML = (obra.autor.length > 1 ) ? obra.autor : obra.autorClasico;

        var type = document.getElementById('type');
        type.innerHTML = (obra.list == 1) ? 'Original' : 'Replica';

        var status = document.getElementById('status');
        status.innerHTML = (obra.list3 == 1) ? 'Venta' : 'Exibicion';
      }
    }

  function eliminarObra(){
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
    localStorage.removeItem('obra');
      location.reload();
  } else {
    swal("Tu obra sigue Guardada!");
  }
});
}
