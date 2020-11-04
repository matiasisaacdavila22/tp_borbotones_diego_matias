    var listTalleres = [
        crearTallerRandom(),
        crearTallerRandom(),
        crearTallerRandom(),
        crearTallerRandom(),
        crearTallerRandom()
    ];


    function Taller(name, description, activities, time, phone, direccionNormalizada){
        this.name = name;
        this.description = description;
        this.activities = activities;
        this.time = time;
        this.phone = phone;
        this.direccionNormalizada = direccionNormalizada;
    }

    function DireccionNormalizada(altura, codCalle, codCalleCruce, codPartido, coordenadas, direccion, nombreCalle, nombreCalleCruce, nombreLocalidad, nombrePartido, tipo){
        this.altura = altura;                        //long
        this.codCalle = codCalle;                    //long
        this.codCalleCruce = codCalleCruce;          //long
        this.codPartido = codPartido;                //string
        this.coordenadas = coordenadas;              //Coordenada
        this.direccion = direccion;                  //string
        this.nombreCalle = nombreCalle;              //string
        this.nombreCalleCruce = nombreCalleCruce;    //string
        this.nombreLocalidad = nombreLocalidad;      //string
        this.nombrePartido = nombrePartido;          //string
        this.tipo = tipo;                            //string

        this.toJson = function (){
            return ("{" +
                "\"altura\":\"" + this.altura + "\"," +
                "\"codCalle\":\"" + this.codCalle + "\"," +
                "\"codCalleCruce\":\"" + this.codCalleCruce + "\"," +
                "\"codPartido\":" + this.codPartido + "," +
                "\"coordenadas\":" + this.coordenadas +
                "\"direccion\":" + this.direccion +
                "\"nombreCalle\":" + this.nombreCalle +
                "\"nombreCalleCruce\":" + this.nombreCalleCruce +
                "\"nombreLocalidad\":" + this.nombreLocalidad +
                "\"nombrePartido\":" + this.nombrePartido +
                "\"tipo\":" + this.tipo +
            "}");
        };
    }

    DireccionNormalizada.fromJson = function (json){
        return new DireccionNormalizada (json.altura, json.cod_calle, json.cod_calle_cruce, json.cod_partido, json.coordenadas, json.direccion, json.nombre_calle, json.nombre_calle_cruce, json.nombre_localidad, json.nombre_partido, json.tipo);
    };

    function Coordenadas(srid, x, y){
        this.srid = srid;
        this.x = x;
        this.y = y;
    }

    function crearTallerRandom() {
        var rand = numeroRandom(0, 50);
        var x = (Math.random() * (-34.5221554 +34.5251554 ) -34.5251554 ).toFixed(8);
        var y = (Math.random() * (-58.7000067 +58.9000067) -58.9000067).toFixed(8);
        return new Taller(
            "Taller " + rand,                                                           //nombre
            "Soy la descripcion del taller numero " + rand,                             //descripcion
            "Actividades del taller " + rand,                                           //actividades
            "Todavia no sabemos en que horario damos clases en el taller " + rand,      //horarios
            rand,                                                                       //telefono
            new DireccionNormalizada(                                                   //direccion normalizada
                rand,                                                                   //altura
                rand,                                                           //codCalle
                rand,                                                           //codCalleCruce
                rand,                                                           //codPartido
                new Coordenadas(rand, x, y),            //coordenadas
                rand,                                                           //direccion
                "Calle falso " + rand,                                          //nombreCalle
                "Calle cruce " + rand,                                          //nombreCalleCruce
                "Localidad nose",                                               //nombreLocalidad
                "Partido",                                                      //nombrePartido
                "Tipo de taller"                                                //tipo
            )
        );
    }

    function numeroRandom(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

  function saveTaller(taller){
    misTalleres.push(taller);
    localStoregeTalleresList(misTalleres);
  }

  function getTalleres(){

    var talleresList = localStorage.getItem('localTalleresList');
    if(talleresList == null){
      misTalleres = listTalleres;
      }else{
      misTalleres = JSON.parse(talleresList);
    }
    return misTalleres;
  }
  function localStoregeTalleresList(list){
          localStorage.setItem('localTalleresList', JSON.stringify(list));
  }

  function searchObrasLocalStore(id){
      misTalleres = getTallers();
    for(let i = 0; i < misTalleres.length; i++){
      if(misTalleres[i].id == id){
            return misTalleres[i];
           }
        }
       return null;
    }

    function searchTallerName(name){
      misTalleres = getTalleres();
      if(name.length == 0){
        return null;
      }else{
      var busquedaTalleres = [];
        for(let i = 0; i < misTalleres.length; i++){
          if(misTalleres[i].name == name){
                busquedaTalleres.push(misTalleres[i]);
               }
            }
              return busquedaTalleres;
        }
      }
