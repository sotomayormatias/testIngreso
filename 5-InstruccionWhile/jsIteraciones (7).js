function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';

	while(respuesta == 'si'){
		var valorIngresado = prompt("Ingrese un numero");
		acumulador += parseInt(valorIngresado);
		contador++;
		respuesta = prompt("Quiere seguir ingresando numeros? ('si/no')");
	}

	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN