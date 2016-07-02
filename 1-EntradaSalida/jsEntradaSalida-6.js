/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
	var numeroUno = document.getElementById("numeroUno").value;
	var numeroDos = document.getElementById("numeroDos").value;

	resultado = parseInt(numeroUno) + parseInt(numeroDos);
	alert("la suma es: " + resultado);
}

