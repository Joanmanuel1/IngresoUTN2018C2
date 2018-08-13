function mostrar()
{
    var numerouno;
    var numerodos;

    numerouno = parseInt(prompt(" Ingrese un numero "));
    numerodos = parseInt(prompt(" Ingrese otro numero "));

    if (numerouno == numerodos)

        {
            alert(numerouno.toString() + numerodos.toString());
        }

    else if ( numerouno > numerodos)
        
        {
            alert(numerouno / numerodos);             
        }   

    else 
        {
            alert(numerouno + numerodos);
        }    

    
}


