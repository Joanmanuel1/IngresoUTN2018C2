function mostrar()
{
    var precio
    var descuento
    var descuentodinero
    var preciocondescuento
    var iva
    var preciofinal



    precio = parseInt(prompt(" Ingrese el precio "));
    descuento = parseInt(prompt(" Ingrese el % de descuento "));

    descuentodinero = (precio * descuento) / 100;
    preciocondescuento = precio - descuentodinero;
    iva = precio * 0.21;
    preciofinal = preciocondescuento + iva;
    
    alert(" El descuento en dinero es : " + descuentodinero + " y el precio con el descuento es : " + preciocondescuento + " y el iva es: " + iva);

    document.getElementById("elPrecioFinal").value = preciofinal;



}
