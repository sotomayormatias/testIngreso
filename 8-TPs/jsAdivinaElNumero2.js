/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var numeroSecreto; 
var contadorIntentos;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	numeroSecreto = Math.floor((Math.random()*100)+1);
	contadorIntentos = 0;
	document.getElementById("intentos").value = contadorIntentos;
	alert(numeroSecreto);
}

function verificar()
{
	var numeroIngresado = document.getElementById("numero").value;
	contadorIntentos++;

	if(numeroIngresado < numeroSecreto){
		alert("Te falta!");
		document.getElementById("intentos").value = contadorIntentos;
	} else if(numeroIngresado > numeroSecreto){
		alert("Te pasaste!");
		document.getElementById("intentos").value = contadorIntentos;
	} else {
		switch (contadorIntentos){
			case 1:
				alert("Acertaste en " + contadorIntentos + " intentos! Usted es un psíquico!");
				break;
			case 2:
				alert("Acertaste en " + contadorIntentos + " intentos! Excelente percepción!");
				break;
			case 3:
				alert("Acertaste en " + contadorIntentos + " intentos! Esto es suerte");
				break;
			case 4:
				alert("Acertaste en " + contadorIntentos + " intentos! Excelente técnica");
				break;
			case 5:
				alert("Acertaste en " + contadorIntentos + " intentos! Usted está en la media");
				break;
			case 6:
			case 7:
			case 8:
			case 9:
			case 10:
				alert("Acertaste en " + contadorIntentos + " intentos! Falta técnica");
				break;
			default:
				alert("Acertaste en " + contadorIntentos + " intentos! afortunado en el amor");
				break;
		}
		
	}
}