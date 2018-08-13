function mostrar()
{
    var animal;
    var peso;
    var temperatura;
    var temperaturaPares =0;
    var animalPesado;
    var temperaturaAnimalPesado =0;
    var pesoPesado =1;
    var contadorBajoCero =0;
    var promedio =0;
    var contadorAnimal =0;
    var acumuladorPeso=0;
    var pesoMinimo =1001;
    var pesoMaximo =0;
    
    var flag = true;
    var respuesta;
    
    do 
    {
        animal = prompt("Ingrese el nombre de un animal");
        peso = parseInt(prompt("Ingrese el peso del animal"));
        while ( peso <1 || peso >1000)
        {
                peso = parseInt(prompt("Reingrese el peso. Peso valido de 1 a 1000"));
        }

        temperatura = parseInt(prompt("Ingrese una temperatura"));
        while ( temperatura <-30 || temperatura > 30)
        {
                temperatura = parseInt(prompt("Reingrese la temperatura. Temperatura valida de -30 a 30"));
        }

        if ( temperatura % 2 == 0)
        {
                temperaturaPares++;
        }

        if  (pesoPesado < peso )  
        {
                pesoPesado = peso;
                animalPesado= animal;
                temperaturaAnimalPesado = temperatura;                 
        }

        if ( temperatura <0 )
        
        {
                contadorBajoCero++;
        }
        if (temperatura <0 && flag == true )
        {
            pesoMinimo = peso;
            pesoMaximo = peso;
            flag = false;
        }
        if (peso < pesoMinimo && temperatura <0 )
        
        {
                pesoMinimo = peso;
        }
        if ( peso > pesoMaximo && temperatura <0)
        {
                pesoMaximo=peso;
        }


        contadorAnimal++;
        acumuladorPeso = acumuladorPeso + peso;  
    
        respuesta = prompt("Desea continuar: Si o No?");
        while ( respuesta.toLowerCase() != "si" && respuesta.toLowerCase() != "no" )
        {
            respuesta = prompt("La opcion no es valida. La opcion es : si o no");
        }
    }

    while (respuesta == "si");
    
    promedio = acumuladorPeso / contadorAnimal;    

    document.write(" La cantidad de temperaturas pares es: " + temperaturaPares + " El animal mas pesado es: " + animalPesado + " y la temperatura del animal mas pesado es " + temperaturaAnimalPesado + " y la cantidad de animales que viven bajo cero es: " + contadorBajoCero + " EL promedio de peso de todos los animales es: " + promedio + " y el peso minimo de los animales bajo cero es : " + pesoMinimo + " y el peso maximo de los animales bajo cero es : " + pesoMaximo);

}
