function mostrar()
{
    var numero;
    var contadorDivisor = 0;

    numero = parseInt(prompt(" Ingrese un numero "));
    for( var i = 1; i <= numero; i++) {
            if ( numero % i == 0){
                console.log(i);
                contadorDivisor++;

            }

    }

console.log(" Cantidad de divisores: " + contadorDivisor);


}//FIN DE LA FUNCIÓN