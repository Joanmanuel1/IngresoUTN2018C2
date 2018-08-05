function mostrar()
{

    var numero;
    var contadorDivisor = 0;

    numero = parseInt(prompt(" Ingrese un numero "));
    for( var i = 1; i <= numero; i++) {
            if ( numero % i == 0){
            
                contadorDivisor++;

            }

    }
        if ( contadorDivisor == 2 )
            {
                console.log(" es primo");

            }

            else {
                    
                    console.log( "No es primo")
                }

}//FIN DE LA FUNCIÓN
