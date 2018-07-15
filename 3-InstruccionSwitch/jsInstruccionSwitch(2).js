function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;
var mensaje1
var mensaje2
var mensaje3
mensaje1="Falta para el invierno";
mensaje2="Estamos en invierno";
mensaje3="Ya paso el invierno"

switch (mesDelAño)
 {
    case "Enero":
         alert(mensaje1);
         break;

         case "Febrero":
         alert(mensaje1);
         break;
         case "Marzo":
         alert(mensaje1);
         break;
         case "Abril":
         alert(mensaje1);
         break;
         case "Mayo":
         alert(mensaje1);
         break;
         case "Junio":
         alert(mensaje1);
         break;
         case "Julio":
         alert(mensaje2);
         break;
         case "Agosto":
         alert(mensaje2);
         break;
         case "Septiembre":
         alert(mensaje3);
         break;
         case "Octubre":
         alert(mensaje3);
         break;
         case "Noviembre":
         alert(mensaje3);
         break;
         case "Diciembre":
         alert(mensaje3);
         break;

    
      default:
    
  }
  


}//FIN DE LA FUNCIÓN                