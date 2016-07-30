/*En la pantalla se mostrarán 6 botones de 
distintos colores,  al comenzar el juego se 
mostrara el texto de un color entre los 6 posibles
 para que el jugador sepa que botón tocar .Al tocar 
 el botón correcto se informara cuanto tiempo tardo.
*/
var ColorSecreto;
var tiempoInicio;
function comenzar()
{
	var numAleatorio = Math.floor((Math.random()*6)+1);
	switch(numAleatorio){
		case 1:
			ColorSecreto = "azul";
			break;
		case 2:
			ColorSecreto = "amarillo";
			break;
		case 3:
			ColorSecreto = "marron";
			break;
		case 4:
			ColorSecreto = "verde";
			break;
		case 5:
			ColorSecreto = "celeste";
			break;
		case 6:
			ColorSecreto = "rojo";
			break;
	}

	document.getElementById("ColorElegido").value = ColorSecreto;
	tiempoInicio = new Date();
	tiempoInicio = tiempoInicio.getTime();
}//FIN DE LA FUNCIÓN

function Responder(colorParametro)
{
	if(colorParametro == ColorSecreto){
		var tiempoFinal = new Date();
		tiempoFinal = tiempoFinal.getTime();
		var resultado = tiempoFinal - tiempoInicio;
		alert("Usted tardó " + resultado/1000 + "segundos");
		comenzar();
	}
}//FIN DE LA FUNCIÓN
