/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
    num1=document.getElementById("numeroUno").value;
    num1=parseInt(num1);

    num2=document.getElementById("numeroDos").value;
    num2=parseInt(num2);

    total= num1 + num2;

    alert("la suma es " + total)
}

