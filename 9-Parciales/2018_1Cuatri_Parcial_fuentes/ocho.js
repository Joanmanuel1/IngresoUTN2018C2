function mostrar()
{
  var letra;
  var numero;
  var numeroPares = 0;
  var numeroImpares =0;
  var contadorCeros =0;
  var contadorPositivos =0;
  var sumaPositivos =0;
  var sumaNegativos =0;
  var numeroMaximo = -100; 
  var numeroMinimo = 100;
  var letraMaxima;
  var letraMinima;
  
  
  do 
  {
    letra = prompt("Ingrese una letra");
    numero = parseInt(prompt("Ingrese un numero"));
    while ( numero <-100 || numero >100 )
      {
        numero = prompt("Ingrese un numero valido. Entre -100 y 100)
      }                   
    
  if (numero % 2 == 0)
      {
        numeroPares++; 
      }                   
   
  else
      {
       numeroImpares++;
      }
  
     
  if ( numero == 0)
      {
       contadorCeros++,
      }    
     
  else if ( numero >= 0)
      {
       contadorPositivos++;
      sumaPositivos = sumaPositivos+ numero;
      } 
        
  else 
      {
        sumaNegativos = sumaNegativos + numero;
      }
       
  if ( numero < numeroMinimo)
      {
        numeroMinimo = numero;
      }
        
  if ( numero > numeroMaximo)
      {
        numeroMaximo = numero;
      }  
        
 promedio = sumaPositivos / contadorPositivos;      
}
