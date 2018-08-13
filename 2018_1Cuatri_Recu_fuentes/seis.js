function mostrar()
{
    var nota;
    var mensaje;
    nota = parseInt(prompt(" Ingrese una nota "));

    switch (nota)

    {
        case 0: 
        case 1:
        case 2:
        case 3:
        
        {
            mensaje="La proxima se puede";
            break;
        }
        

        case 4:
        case 5:
        case 6:
        {
            mensaje="raspando";
            if ( nota < 5)
            {
                mensaje = mensaje + ", debes preocuparte mas ";
            }
            break;
        
        }
        
        case 7:
        case 8:
        case 9:
        case 10:
        {
            mensaje = " Aprobado";
            if ( nota > 8 )
            {
                mensaje = mensaje + ", muy bien";
            }
            break;
        }
        
        
        default:   
        {
            mensaje="No es una nota valida";
            break;
        }
        


    }
            alert(mensaje);


}
