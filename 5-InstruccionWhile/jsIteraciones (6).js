function Mostrar()
{

	var contador=0;
	var acumulador=0;

	while(contador < 5){
		var valorIngresado = prompt("Ingrese un numero");
		while(isNaN(valorIngresado)){
			valorIngresado = prompt("Ingrese un NUMERO");
		}
		acumulador += parseInt(valorIngresado);
		contador++;
	}

	document.getElementById('suma').value=acumulador;
	document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN