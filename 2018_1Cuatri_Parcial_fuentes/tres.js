function mostrar()
{
var precio
var descuento
var final
var resultado
precio = prompt("Ingrese el precio");
precio = parseInt(precio);

descuento = prompt ("Ingrese el porcentaje de descuento");
descuento = parseInt(descuento);

final = precio * descuento / 100;

final = parseInt(final);

resultado = precio - final;
resultado= parseInt(resultado)

document.getElementById("elPrecioFinal").value=resultado;



}
