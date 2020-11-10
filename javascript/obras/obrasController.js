var misObras = [];
function cargarObras(){
var obra1 = {
id : '1',
name : 'monalisa',
autor : 'Leonardo da Vinci',
description : 'description',
anio : '2005',
estilo : 'estilo',
tecnica : 'sfumato ',
list : '1',
list2 : '2',
list3 : '3',
textarea : 'textarea',
autorClasico : 'autorClasico',
nombreAutor : 'nombreAutor',
anioClasico : 'anioClasico',
fechaPublicacion : 'fechaPublicacion',
foto : '1.jpg',
status : true,
};
misObras.push(obra1);
var obra2 = {
id : '2',
name : 'la noche estrellada',
autor : 'Vincent van Gog',
description : 'description',
anio : '1889,',
estilo : 'estilo',
tecnica : 'tecnica',
list : '1',
list2 : '2',
list3 : '3',
textarea : 'textarea',
autorClasico : 'autorClasico',
nombreAutor : 'nombreAutor',
anioClasico : 'anioClasico',
fechaPublicacion : 'fechaPublicacion',
foto : '2.jpg',
status : false,
};
misObras.push(obra2);
var obra3 = {
id : '3',
name : 'el grito',
autor : 'Edvard Munch',
description : 'description',
anio : '1893',
estilo : 'estilo',
tecnica : 'tecnica',
list : '1',
list2 : '2',
list3 : '3',
textarea : 'textarea',
autorClasico : 'autorClasico',
nombreAutor : 'nombreAutor',
anioClasico : 'anioClasico',
fechaPublicacion : 'fechaPublicacion',
foto : '3.jpg',
status : false,
};
misObras.push(obra3);
var obra4 = {
id : '4',
name : 'El nacimiento de Venus',
autor : 'Sandro Botticelli',
description : 'description',
anio : '1482-1485',
estilo : 'Renacimiento',
tecnica : 'tecnica',
list : '1',
list2 : '2',
list3 : '3',
textarea : 'textarea',
autorClasico : 'autorClasico',
nombreAutor : 'nombreAutor',
anioClasico : 'anioClasico',
fechaPublicacion : 'fechaPublicacion',
foto : '4.jpg',
status : true,
};
misObras.push(obra4);
var obra5 = {
id : '5',
name : 'La creación de Adán',
autor : 'Miguel Ángel ',
description : 'description',
anio : '1511',
estilo : 'estilo',
tecnica : 'tecnica',
list : '1',
list2 : '2',
list3 : '3',
textarea : 'textarea',
autorClasico : 'autorClasico',
nombreAutor : 'nombreAutor',
anioClasico : 'anioClasico',
fechaPublicacion : 'fechaPublicacion',
foto : '5.jpg',
status : true,
};
misObras.push(obra5);
var obra6 = {
id : '6',
name : 'mariana',
autor : 'Nayla Vera',
description : 'description',
anio : '1982',
estilo : 'estilo',
tecnica : 'tecnica',
list : '1',
list2 : '2',
list3 : '3',
textarea : 'textarea',
autorClasico : 'autorClasico',
nombreAutor : 'nombreAutor',
anioClasico : 'anioClasico',
fechaPublicacion : 'fechaPublicacion',
foto : '6.jpg',
status : false,
};
misObras.push(obra6);
localStoregeObrasList(misObras);
};
var obra7 = {
id : '3',
name : 'el grito',
autor : 'Edvard Munch',
description : 'description',
anio : '1893',
estilo : 'estilo',
tecnica : 'tecnica',
list : '1',
list2 : '2',
list3 : '3',
textarea : 'textarea',
autorClasico : 'autorClasico',
nombreAutor : 'nombreAutor',
anioClasico : 'anioClasico',
fechaPublicacion : 'fechaPublicacion',
foto : '3.jpg',
status : false,
};
misObras.push(obra7);
var id;

function createObras(id, name, autor, description, anio, estilo, tecnica, list, list2, textarea, list3, autorClasico, nombreAutor, anioClasico, fechaPublicacion, foto, status){
    var obra = {
    id : id,
    name : name,
    autor : autor,
    description : description,
    anio : anio,
    estilo : estilo,
    tecnica : tecnica,
    list : list,
    list2 : list2,
    list3 : list3,
    textarea : textarea,
    autorClasico : autorClasico,
    nombreAutor : nombreAutor,
    anioClasico : anioClasico,
    fechaPublicacion : fechaPublicacion,
    foto : foto,
    status : status,
    };
    return obra;
    }

  function saveObra(obra){
    misObras.push(obra);
    localStoregeObrasList(misObras);
  }

  function getObras(){

    var obrasList = localStorage.getItem('localObrasList');
    if(obrasList == null){
      misObras = [];
      }else{
      misObras = JSON.parse(obrasList);
    }
    return misObras;
  }
  function localStoregeObrasList(list){
          localStorage.setItem('localObrasList', JSON.stringify(list));
  }

  function getId(){
    var obrasList = localStorage.getItem('localObrasList');
    if(obrasList == null){
      id = 1;
      }else{
      misObras = JSON.parse(obrasList);
      id = misObras.length +1;
      }
    return id;
  }       
  function searchObrasName(name){
    misObras = getObras();
    if(name.length == 0){
      return misObras;
    }else{
    var busquedaObras = [];
      for(let i = 0; i < misObras.length; i++){
        if(misObras[i].name.toLowerCase()  == name.toLowerCase() ||
           misObras[i].autor.toLowerCase() == name.toLowerCase()
           /*misObras[i].list3.toLowerCase() == name.toLowerCase()*/) {
              busquedaObras.push(misObras[i]);
             }
        else{
          if(name.toLowerCase() == 'en venta' &&
          misObras[i].list3.toLowerCase() == 1 ){
            busquedaObras.push(misObras[i]);
          }
          if(name.toLowerCase() == 'en exhibicion' &&
          misObras[i].list3.toLowerCase() != 1 ){
            busquedaObras.push(misObras[i]);
          }
        }
          }
            return busquedaObras;
      }
    }

  function searchObrasLocalStore(id){
      misObras = getObras();
    for(let i = 0; i < misObras.length; i++){
      if(misObras[i].id == id){
            return misObras[i];
           }
        }
       return null;
    }

    // function searchObrasName(name){
    //   misObras = getObras();
    //   if(name.length == 0){
    //     return misObras;
    //   }else{
    //   var busquedaObras = [];
    //     for(let i = 0; i < misObras.length; i++){
    //       if(misObras[i].name == name){
    //             busquedaObras.push(misObras[i]);
    //            }
    //         }
    //           return busquedaObras;
    //     }
    //   }

    function editarObra(id, obra){
      misObras = getObras();
      for(i of misObras){
        if(i.id == id){
          var j = misObras.indexOf(i);
          misObras.splice(j, 1, obra);
          localStoregeObrasList(misObras);
             }
        }
    }

  function deleteObra(id){
      misObras = getObras();
      for(i of misObras){
        if(i.id == id){
              var j = misObras.indexOf(i);
              misObras.splice(j, 1);
              localStoregeObrasList(misObras);
             }
          }
         return null;
    }
