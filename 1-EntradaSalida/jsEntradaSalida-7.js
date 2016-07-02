/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var numeroUno = document.getElementById("numeroUno").value;
	var numeroDos = document.getElementById("numeroDos").value;

	resultado = parseInt(numeroUno) + parseInt(numeroDos);
	alert("la suma es: " + resultado);
}

function restar()
{
	var numeroUno = document.getElementById("numeroUno").value;
	var numeroDos = document.getElementById("numeroDos").value;

	resultado = parseInt(numeroUno) - parseInt(numeroDos);
	alert("la resta es: " + resultado);
}

function multiplicar()
{ 
	var numeroUno = document.getElementById("numeroUno").value;
	var numeroDos = document.getElementById("numeroDos").value;

	resultado = parseInt(numeroUno) * parseInt(numeroDos);
	alert("la multiplicación es: " + resultado);
}

function dividir()
{
	var numeroUno = document.getElementById("numeroUno").value;
	var numeroDos = document.getElementById("numeroDos").value;

	resultado = parseInt(numeroUno) / parseInt(numeroDos);
	alert("la división es: " + resultado);
}

