
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