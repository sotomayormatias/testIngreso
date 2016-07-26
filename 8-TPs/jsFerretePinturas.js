/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var tempFarenheit = document.getElementById("Temperatura").value;

	var tempCelcius = (parseInt(tempFarenheit) - 32) / 1.8;

	alert("La temperatura es: " + tempCelcius + " °C");
}

function CentigradosFahrenheit () 
{
	var tempCelcius = document.getElementById("Temperatura").value;

	var tempFarenheit = parseInt(tempCelcius) * 1.8 + 32;

	alert("La temperatura es: " + tempFarenheit + " °F");
}
