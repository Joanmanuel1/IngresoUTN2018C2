function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var nota
	var min
	var max
	min=0
	max=10
	nota=Math.random()*(max - min ) + min ;
	nota=parseInt(nota);
	
	if(nota >= 9)
	{
		alert("nota:"+ nota + " EXCELENTE");
		
	}

	else
	{
		if(nota >= 4)	
		{
			alert("nota:"+ nota + " aprobado");
		}

		else
		{
			alert("nota:"+ nota + " vamos la proxima puede");
		}
	}
}//FIN DE LA FUNCIÓN