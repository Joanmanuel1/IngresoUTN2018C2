function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numero
	var min
	var max
	min=1
	max=10
	numero=Math.random()*(max - min ) + min ;
	numero=parseInt(numero);
	
	alert(numero);

}//FIN DE LA FUNCIÓN