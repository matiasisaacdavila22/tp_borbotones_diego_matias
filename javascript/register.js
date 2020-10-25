
$(document).ready(function() {
  $( "#formRegistro" ).submit(function( event ) {
  saveUser() ;
  mensajeRegistro();
  event.preventDefault();
});
  var isAuth = localStorage.getItem('isAuth');
  if(isAuth != null){
    location.href ="./home.html";
  }else{
      $("#login").show();
      $("#register").show();
      $("#logout").hide();
      $("#panel").hide();

$("#login").click( function() {
          location.href ="./login.html";
              });

$("#register").click( function() {
          location.href ="./register.html";
              });

 getSelectValue();
 //drawUsers();

}
});

function saveUser() {
        getUsers();
        var id = getId();
        var name = $("#name").val();
        var email = $("#email").val();
        var password = $("#password").val();
        var  phone = $("#phone").val();
        var type = document.getElementById("list").value;
        var workshop = document.getElementById("myCheck").checked;
        var description = document.getElementById('textarea').value;
        var status = true;

        createUser(id, name, email, password, phone, type, workshop, description, status);
   }

   function drawUsers(){
     var list = getUsers();
     tbody = document.querySelector("#tableUsers tbody");
     tbody.innerHTML = '';

      for(var i =0; i< list.length; i++){
        var row = tbody.insertRow(i),
            idCell = row.insertCell(0),
            nameCell = row.insertCell(1),
            emailCell = row.insertCell(2),
            passwordCell = row.insertCell(3),
            phoneCell = row.insertCell(4),
            typeCell = row.insertCell(5),
            workshopCell = row.insertCell(6);
            descriptionCell = row.insertCell(7);
            statusCell = row.insertCell(8);

        idCell.innerHTML = list[i].id;
        nameCell.innerHTML = list[i].name;
        emailCell.innerHTML = list[i].email;
        passwordCell.innerHTML = list[i].password;
        phoneCell.innerHTML = list[i].phone;
        typeCell.innerHTML = (list[i].type == 1) ? 'artista' : 'aficionado';
        workshopCell.innerHTML = (list[i].workshop) ? 'con taller' : 'sin taller';
        descriptionCell.innerHTML = list[i].description;
        statusCell.innerHTML = (list[i].status) ? 'activo' : 'inactivo';

        tbody.appendChild(row);
      }
   }

   function getSelectValue()
       {
           var selectedValue = document.getElementById("list").value;
           var text= list.options[list.selectedIndex].text;
           var checkBox = document.getElementById("myCheck");
           var text = document.getElementById("text");
           if(selectedValue == 1){
             $("#myCheck").show();
             $("#checkBox").show();
             $("#textarea").hide();
             $("#textLabel").hide();
             document.getElementById("myCheck").checked = false;
             text.style.display = "none";
           }else{
             $("#myCheck").hide();
             $("#checkBox").hide();
             $("#textarea").show();
             $("#textLabel").show();
             document.getElementById("myCheck").checked = false;
             text.style.display = "none";
             }
       }

     function myFunction() {
     var checkBox = document.getElementById("myCheck");
     var text = document.getElementById("text");

     if (checkBox.checked == true){
       text.style.display = "block";
       $("#checkBox").hide();
     } else {
       text.style.display = "none";
       $("#checkBox").show();
     }
    }

    function mensajeRegistro(){
      swal({
        title: "Muy Bien!",
        text: "Continuar!",
        icon: "success",
        button: "Aww yiss!",
        }).then((value) => {
             location.href ="./home.html";
      });
     }
