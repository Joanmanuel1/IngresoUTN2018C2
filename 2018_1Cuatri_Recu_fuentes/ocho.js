function mostrar()
{   
    var libro;
    var cantidadPaginas;
    var cantidadVentas;
    var tematica;
    var contadorLibrosPares =0;
    var contadorLibrosImpares =0;
    var respuesta;
    var ventascero =0;
    var promedio;
    var acumuladorVentas =0;
    var contadorVentas =0;
    var sumPaginas =0;

    do
    {
        libro = prompt("Ingrese el nombre del libro");
        cantidadPaginas = parseInt(prompt("Ingrese la cantidad de paginas"));
        cantidadVentas = parseInt(prompt("Ingresar la cantidad de ventas"));
        while ( cantidadVentas <0)
        {
            cantidadVentas = parseInt(prompt("Ingrese una cantidad de venta superior a 0"));
        }    
        tematica = prompt("Ingresar una tematica");
        while (tematica != "robotica" && tematica != "programacion" && tematica != "patrones" && tematica != "base de datos")
        {
            tematica = prompt("Reingrese una tematica. Tematicas posibles: robotica, programacion, base de datos, patrones ");
        }
    
    if ( cantidadPaginas % 2 == 0)
        {
            contadorLibrosPares++;
        }
    
    else 
        {
            contadorLibrosImpares++;
        }
    
    if ( cantidadVentas == 0)
        {
            ventascero++;
        }
    
    if (cantidadVentas >0)
        
        {
            acumuladorVentas = acumuladorVentas + cantidadVentas;
            contadorVentas++;
        }
    
    if ( tematica == "programacion")
        {
            sumPaginas = sumPaginas + cantidadPaginas;
        }
        
    
    respuesta = prompt("Desea continuar ?")
    
    }


    while ( respuesta == "si")
    
    promedio = acumuladorVentas / contadorVentas; 

    document.write("La cantidad de libros con páginas pares es : " + contadorLibrosPares + "La cantidad de libros con páginas impares es : " + contadorLibrosImpares + "La cantidad de ceros ventas es :" + ventascero + " El promedio de todas las ventas ingresadas es : " + promedio + " La suma de todas las páginas de los de programación es : " + sumPaginas);

}
