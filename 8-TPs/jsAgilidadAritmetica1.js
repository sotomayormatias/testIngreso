/*Debemos mostrar dos números Random  del 1 al 10 
y una de las cuatro operaciones básicas (suma, resta,
 división o multiplicación) para realizar entre estos
 dos números, estas operaciones también serán Random.
 En el cuadro de texto resultado el jugador debe ingresar
 el resultado de la operación y presionar el botón Aceptar.
se debe informar si el resultado es el correcto o no.
*/
var numero1;
var numero2;
var numOperacion;

function comenzar()
{
	numero1 = document.getElementById("PrimerNumero").value = Math.floor((Math.random() * 10) + 1);
	numero2 = document.getElementById("SegundoNumero").value = Math.floor((Math.random() * 10) + 1);
	numOperacion = Math.floor((Math.random() * 4) + 1);

	switch(numOperacion){
		case 1:
			document.getElementById("Operador").value = "+";
			break;
		case 2:
			document.getElementById("Operador").value = "-";
			break;
		case 3:
			document.getElementById("Operador").value = "*";
			break;
		case 4:
			document.getElementById("Operador").value = "/";
			break;
	}
}//FIN DE LA FUNCIÓN

function Responder()
{
	var resultado;
	var respuesta = document.getElementById("Respuesta").value;
	switch(numOperacion){
		case 1:
			resultado = numero1 + numero2;
			break;
		case 2:
			resultado = numero1 - numero2;
			break;
		case 3:
			resultado = numero1 * numero2;
			break;
		case 4:
			resultado = numero1 / numero2;
			break;
	}

	if(respuesta == Math.round(resultado)){
		alert("Acertaste!");
	} else {
		alert("Perdiste! El resultado es: " + resultado);
	}
	comenzar();
}//FIN DE LA FUNCIÓN
