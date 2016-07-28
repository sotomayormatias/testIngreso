/*Además de lo anterior, ahora 
se agregara un temporizador que
 a los cinco segundos dará por terminado 
 el juego  de no ser ingresado el resultado 
 correcto en ese lapso de tiempo. */
var numero1;
var numero2;
var numOperacion;
var resultado;

function comenzar()
{
	numero1 = document.getElementById("PrimerNumero").value = Math.floor((Math.random() * 10) + 1);
	numero2 = document.getElementById("SegundoNumero").value = Math.floor((Math.random() * 10) + 1);
	numOperacion = Math.floor((Math.random() * 4) + 1);

	switch(numOperacion){
		case 1:
			document.getElementById("Operador").value = "+";
			resultado = numero1 + numero2;
			break;
		case 2:
			document.getElementById("Operador").value = "-";
			resultado = numero1 - numero2;
			break;
		case 3:
			document.getElementById("Operador").value = "*";
			resultado = numero1 * numero2;
			break;
		case 4:
			document.getElementById("Operador").value = "/";
			resultado = numero1 / numero2;
			break;
	}

	setTimeout(tiempoFuera, 4000);
}//FIN DE LA FUNCIÓN

function Responder()
{
	var respuesta = document.getElementById("Respuesta").value;
	
	if(respuesta == Math.round(resultado)){
		alert("Acertaste!");
	} else {
		alert("Perdiste! El resultado es: " + resultado);
	}
	comenzar();
}//FIN DE LA FUNCIÓN

function tiempoFuera(){
	alert("Se acabó el tiempo, el resultado era: " + resultado);
	comenzar();
}
