function mostrar()
{
  var marca;
  var peso;
  var temperatura;
  var respuesta;
  var temperaturasPares = 0;
  var pesoMaximo = 0; 
  var marcaPesada;
  var cantidadProductosBajoCero = 0;
  var promedio;
  var acumuladorProductos = 0;
  var cantidadProductos = 0;
  var pesoMaximo = 0;
  var pesoMinimo = 100;
  
  
  
  do 
    {
      marca = prompt("Ingrese la marca del producto");
      peso = prompt("Ingrese el peso");
      while (peso < 1 || peso > 100)
        {
          peso = prompt("Ingrese un peso valido. Entre 1 y 100");
        }
      temperatura = prompt("Ingrese una temperatura");
      while ( temperatura < -30 || temperatura > 30 ) 
        { 
          temperatura = prompt("Ingrese una temperatura valida. Entre -30 y 30"
        }
             
        if (temperatura % 2 == 0)
          {
            temperaturaPares++;
          }  
         
         if (peso > pesoMaximo)
          {
            pesoMaximo = peso;
            marcaPesada = marca;
          }
          
         if ( temperatura <0)
          {
            cantidadProductos++;
          }
          
          if (peso < pesoMinimo)
           { 
             pesoMinimo = peso;
           }
          
          if (peso > pesoMaximo)
           {
             pesoMaximo = peso;
           }  
          
          
          
          acumuladorProductos = acumuladorProductos + peso;
          cantidadProductos++;
          
          promedio = acumuladorProductos / cantidadProductos;
          
          
          
                               
        respuesta = prompt(" Desea continuar? ")
        while (  respuesta != "si" || respuesta != "no" )
        {
          respuesta = prompt("Ingrese una respuesta valida, si o no.");
        }
  
  while ( respuesta == "si")
  
}
