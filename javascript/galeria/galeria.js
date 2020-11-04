$(document).ready(function() {
  if(localStorage.getItem('localObrasList') == null){
    cargarObras();
  }
  const galeria = document.getElementById('galeria');
  var obras = getObras();
  mostrarObras(obras);
  //$("#modalObra").modal();

});
function modal(id){
  pintarModal(id)
  $("#modalObra").modal();
}

function pintarModal(id){
    var obra = searchObrasLocalStore(id);
    var ruta = './img/'+obra.foto;
    $('#imagenPrevia').html("<img src='"+ruta+"' />");

  nombre.innerHTML = obra.name;
  autor.innerHTML = obra.autor;
  description.innerHTML = obra.description;
  anio.innerHTML = obra.anio;
  estilo.innerHTML = obra.estilo;
  tecnica.innerHTML = obra.tecnica;
  disponibilidad.innerHTML= (obra.list3 == 1 ? 'En Venta' : 'En Exhibición');
  if(obra.list == 1){
      tipo.innerHTML = 'Original';
      clase.innerHTML= (obra.list2 == 1 ? 'Unica' : 'Sereada');
      observaciones.innerHTML = obra.textarea;
      $('#autorClasicoDiv').hide();
      $('#nombreAutorDiv').hide();
      $('#anioClasicoDiv').hide();
      $('#observacionesDiv').show();
  }else{
    tipo.innerHTML = 'Replica';
    $('#autorClasicoDiv').show();
    $('#nombreAutorDiv').show();
    $('#anioClasicoDiv').show();
    $('#observacionesDiv').hide();
    autorClasico.innerHTML = obra.autorClasico;
    nombreAutor.innerHTML = obra.nombreAutor;
    anioClasico.innerHTML = obra.anioClasico;
}
}

function mostrarObras(ob){

  if(ob.length > 0){
    galeria.innerHTML = '';

    for(let valor of ob){
        var ruta = './img/'+valor.foto;
        galeria.innerHTML +=`
        <div class="item" id="itemObra" onClick="modal(${valor.id})">
            <h1>${valor.name}</h1>
          <img src="${ruta}" alt="" class="item-img" width="250" height="300">
              <div class="item-text">
                <h3>${valor.autor}</h3>
                <p>${valor.description}</p>
              </div>
        </div>
        `
       }
      }else{
swal("No hay resultados!", " As Click para Continuar!", "error");
      }
}

    function buscarObras(){
      var name = $("#texto").val();
         var buscarObras = searchObrasName(name);
         mostrarObras(buscarObras);
    }
