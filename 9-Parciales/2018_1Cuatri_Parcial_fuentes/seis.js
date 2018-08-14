function mostrar()
{
  var hora;
  hora= parseInt(prompt("Ingrese una hora"));
  
  switch (hora)
    
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
   
    if ( hora > 6 && hora < 11 )
  {
      alert("Es de mañana");
      break;
  }  
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
    case 18:
    case 19:
    
  else if ( hora >12 && hora < 19)
  {
    alert("Es de tarde");
    break;  
  } 
  
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
  case 20:
  case 21:
  case 22:
  case 23:
  case 24:
  
  if ( hora >19 && hora <= 24)
  {
    alert("Es de noche")
  }
  if (hora >=1 && hora <=5 || hora >=20 && <=24) 
  {
    alert(" A dormir");
    break;
  }

  
