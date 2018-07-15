
/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
 var num1
 var num2
 var total
 var chart1
 var chart2


    chart1=document.getElementById("numeroUno").value;
    num1=parseInt(chart1);

    chart2=document.getElementById("numeroDos").value;
    num2=parseInt(chart2);

    total= num1 + num2;

    alert("la suma es " + total)
}

