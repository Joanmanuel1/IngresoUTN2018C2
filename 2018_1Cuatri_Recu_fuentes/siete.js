function mostrar()
{
    var nota;
    var edad;
    var sexo;
    var promedio;
    var notaBaja = 11;
    var sexoBajo;
    var contadorVarones =0;
    var acumuladorNotas = 0;
    var masJoven =100;
    var sexoJoven;
    var notaJoven;
    var notaMujer;
    var edadMujer;
    var flag = true;
   
    for ( var i =0; i <5; i++)
    {
        edad = parseInt(prompt("Ingrese su edad "));
        nota = parseInt(prompt("Ingrese su nota "));
        while (nota<0 || nota>10 )
        {
            nota = parseInt(prompt("Su nota debe ser entre 0 y 10, reingrese nota "));
        }        
        sexo = prompt("Ingrese su sexo ");
        while (sexo != "m" && sexo != "f" )
        {
            sexo = prompt("Su sexo debe ser f o m, reingrese el sexo");
        }
        acumuladorNotas = parseInt(acumuladorNotas) + nota;
        if ( nota < notaBaja ) 
        {
            notaBaja = nota;
            sexoBajo = sexo;
        }
        
        if ( edad > 17 && nota >= 6)
        {
             contadorVarones++;
        }
        
        if ( edad < masJoven)
        {
            masJoven = edad;
            sexoJoven = sexo;
            notaJoven = nota;     
        }

        if ( sexo == "f" && flag == true)
        {
            edadMujer = edad;
            notaMujer = nota;
            flag = false; 
        }
    }
    promedio = acumuladorNotas / 5;    
    
    if ( flag == true)
    {
        alert ( "El promedio es " + promedio + " y la nota mas baja es " + notaBaja + " y su sexo es : " + sexoBajo + " y la cantidad de varones mayores a 18 y que su nota ha sido igual o mayor a 6 es : " + contadorVarones + " y el sexo del mas joven es : " + sexoJoven + " y la nota del mas joven es : " + notaJoven + " y no se ingreso ninguna mujer");
    }
    else
    {
        alert("El promedio es " + promedio + " y la nota mas baja es " + notaBaja + " y su sexo es : " + sexoBajo + " y la cantidad de varones mayores a 18 y que su nota ha sido igual o mayor a 6 es : " + contadorVarones + " y el sexo del mas joven es : " + sexoJoven + " y la nota del mas joven es : " + notaJoven + " la edad de la primera mujer es " + edadMujer + " y la nota es " + notaMujer );
    }
    
    
}
