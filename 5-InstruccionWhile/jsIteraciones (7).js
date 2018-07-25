function mostrar()
{
	var numero;
	var contador=0;
	var acumulador=0;
	var respuesta='si';

do {
	numero = parseInt(prompt("ingrese un numero"))
	acumulador = acumulador + numero;
	contador ++;
	respuesta = prompt(" Desea continuar?")
} while
(respuesta == "si");



document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN