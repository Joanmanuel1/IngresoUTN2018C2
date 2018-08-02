function mostrar()
{
    var nota
    var sexo
    var acumnotas = 0;   
    var notabaja
    var sexonotabaja
    var contvarones6omas = 0;
    var flag = 0;
    var promedionotas

    for( var i = 0; i < 5; i++){
        nota = parseInt(prompt(" Ingrese su nota: "));
        while( nota < 0 || nota > 10 ){
            nota = parseInt(prompt( "Error. Reingrese su nota: "))
        }
    
        sexo = prompt(" Ingrese su sexo: ");
        while( sexo != "f" && sexo != "m"){
            sexo = prompt(" Error. Ingrese f o m ");
        }

acumnotas = acumnotas + nota;

    if( nota < notabaja || flag == 0){
    notabaja = nota;
    sexonotabaja = sexo;
    flag = 1;
}

    if ( sexo == "m" && nota >= 6){
        contvarones6omas++;
    }
 }
promedionotas = acumnotas / 5;

    alert(" el promedio es " + promedionotas + "la nota mas baja es " + notabaja + " y el sexo es " + sexonotabaja + " Los varones " + contvarones6omas);

}
   
    



