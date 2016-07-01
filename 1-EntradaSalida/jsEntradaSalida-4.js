/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'MOSTRAR'
*/
function Mostar()
{
	var dato = prompt("Por favor ingrese su nombre", "UTN FRA Ingrese nombre");
	document.getElementById("elNombre").value = dato;
}

