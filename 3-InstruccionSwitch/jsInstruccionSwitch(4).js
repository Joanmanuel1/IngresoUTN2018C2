function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;
var mensaje1
var mensaje2
var mensaje3
mensaje1="este mes tiene 28 dias";
mensaje2="este mes tiene 30 dias";
mensaje3="este mes tiene 31 dias";

switch (mesDelAño)
 {
    case "Enero":
         alert(mensaje3);
         break;

         case "Febrero":
         alert(mensaje1);
         break;
         case "Marzo":
         alert(mensaje3);
         break;
         case "Abril":
         alert(mensaje2);
         break;
         case "Mayo":
         alert(mensaje3);
         break;
         case "Junio":
         alert(mensaje2);
         break;
         case "Julio":
         alert(mensaje3);
         break;
         case "Agosto":
         alert(mensaje3);
         break;
         case "Septiembre":
         alert(mensaje2);
         break;
         case "Octubre":
         alert(mensaje3);
         break;
         case "Noviembre":
         alert(mensaje2);
         break;
         case "Diciembre":
         alert(mensaje3);
         break;

    default:
      
    
  }
//alert (mesDelAño);
	
	



}//FIN DE LA FUNCIÓN