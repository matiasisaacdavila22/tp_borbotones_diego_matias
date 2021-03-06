<!DOCTYPE html>
<html lang="es">
<head>
<title>obras online</title>
<meta charset="utf-8" />
<script src="../../javascript/jquery-3.5.1.min.js"></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
<script src="../../javascript/obras/obrasEdit.js"></script>
<script src="../../javascript/obras/obrasController.js"></script>
<link rel="stylesheet" href="../css/home.css" />
</head>
<body>
  <div class="starter-template">
    <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
      <a class="navbar-brand" href="../home.html">Home</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
              <a class="btn btn-link" href="./index.html">Mis Obras</a>
          </li>
          <li class="nav-item active">
            <button type="button" class="btn btn-link" id="taller">Taller</button>
          </li>
          <li class="nav-item active">
            <button type="button" class="btn btn-link" id="pago">Patrocinar</button>
          </li>
          <li class="nav-item">
            <button type="button" class="btn btn-link" id="config">Config</button>
          </li>
          <li class="nav-item">
            <button type="button" class="btn btn-link" id="logout">Logout</button>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search">
          <button class="btn btn-secondary my-2 my-sm-0" type="submit">Buscar</button>
        </form>
      </div>
    </nav>
  </div>

  <div class="container">
      <div class="box box-success">
          <div class="box-header">
              <i class="fa fa-comments-o"></i>
              <h3 class="box-title">Editar Obra</h3>
              <style media="screen">
              img{
                max-width: 250px;
                height: auto;
              }
              </style>
          </div>
          <div class="box-body chat" id="chat-box">
                <?php
                $variable = $_GET['variable'];
                 ?>

                   <input type="text" id="idObra2" class="form-control">
              <Form id="formObrasEdit">
                <div class="row">
                      <div class="col-md-4">
                          <div class="form-group">
                              <label for="">Nombre</label>
                              <input type="text" id="name" class="form-control" >
                          </div>
                          <div class="form-group">
                              <label for="">Autor</label>
                              <input type="text" id="autor" class="form-control">
                          </div>
                          <div class="form-group">
                            <label for="exampleFormControlTextarea1">Descripcion</label>
                            <textarea class="form-control" id="description" rows="3" ></textarea>
                          </div>
                        <div class="form-row">
                          <div class="form-group col-md-6">
                              <label for="">Año</label>
                              <input type="text" id="anio" class="form-control" >
                          </div>
                          <div class="form-group col-md-6">
                                  <label for="">Estilo</label>
                                  <input type="text" id="estilo" class="form-control" >
                          </div>
                        </div>
                        <div class="form-group">
                                  <label for="">Tecnica</label>
                                  <input type="text" id="tecnica" class="form-control">
                        </div>
                      </div>
                    <div class="col-md-4">
                     <div class="form-row">
                      <div class="form-group col-md-8">
                          <select id="list" class="custom-select" onchange="getSelectValue()" >
                            <option value="">Tipo</option>
                            <option value="1">Original</option>
                            <option value="2">Replica</option>
                          </select>
                        </div>
                          <div class="form-group col-md-4">
                            <select id="list2" class="custom-select" onchange="getSelectValue()"  >
                              <option value="">Clase</option>
                              <option value="1">Unica</option>
                              <option value="2">Seriada</option>
                            </select>
                          </div>
                     </div>
                    <div class="form-group">
                        <label for="exampleFormControlTextarea1" id="textLabel" >observaciones</label>
                        <textarea class="form-control" id="textarea" rows="3"></textarea>
                    </div>
                    <div class="form-group col-md-12">
                          <label for="" id="labelAutor">Autro Clasico</label>
                          <input type="text" id="autorClasico" class="form-control" >
                      </div>
                      <div class="form-group col-md-12">
                              <label for="" id="labelNombre">Nombre autor</label>
                              <input type="text" id="nombreAutor" class="form-control">
                      </div>
                      <div class="form-group col-md-6">
                              <label for="" id="labelAnio">año</label>
                              <input type="text" id="anioClasico" class="form-control" >
                    </div>
                    <div class="form-group col-md-12">
                      <select id="list3" class="custom-select" onchange="getSelectValue()"  >
                        <option value="">Disponibilidad</option>
                        <option value="1">venta</option>
                        <option value="2">Exibicion</option>
                      </select>
                    </div>
                </div>
                <div class="col-md-4">
                    <table>
                      <tr>
                        <div class="form-group" id="imagenPrevia">
                          <img src="#" width="150" height="auto" />
                      </tr>
                    <div class="form-group">
                      <div class="custom-file">
                        <input type="file" class="custom-file-input" id="image_logo" required>
                        <label class="custom-file-label" for="validatedInputGroupCustomFile">Buscar imagen...</label>
                      </div>
                    </div>
                      <div class="orm-group">
                          <h5 class="card-title">Imagen Producto</h5>
                      </div>
                    </table>
                    </div>
                  </div>
                  <div class="col-md-12">
                      <button type="submit" class="btn btn-success pull-right" >Guardar</button>
                  </div>
              </div>
          </form>
      </div>
    </div>
  </div>
        <footer>
          <br><br><br>
            Creado por borbotones en el 2020
        </footer>

<script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<!-- <script type="text/javascript"> -->
<script type="application/javascript">

  (function(){
     function filePreview(input){
       if(input.files && input.files[0]){
         var reader = new FileReader();

         reader.onload = function(e){

           $('#imagenPrevia').html("<img src='"+e.target.result+"' />");
         }
         reader.readAsDataURL(input.files[0]);
       }
     }
     $('#image_logo').change(function(){
       filePreview(this);
     });
  })();
 mostrarObra(<?=$variable?>);
 
  function mostrarObra(id){
    var obra = searchObrasLocalStore(id);
      var ruta = '../img/'+obra.foto;
      $('#imagenPrevia').html("<img src='"+ruta+"' />");
    document.getElementById('idObra2').value = obra.id;
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


</script>
</body>
</html>
