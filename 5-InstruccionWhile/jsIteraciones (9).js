function Mostrar()
{

	var minimo;
	var maximo;
	var contador = 0;
	var respuesta='si';
	
	while(respuesta!='no')
	{
		var valorIngresado = prompt("Ingrese un numero");
		if(contador == 0){
			minimo = maximo = parseInt(valorIngresado);
			contador++;
		}

		if(parseInt(valorIngresado) < minimo)
			minimo = parseInt(valorIngresado);
		
		if(parseInt(valorIngresado) > maximo)
			maximo = parseInt(valorIngresado);

		respuesta = prompt("Quiere ingresar otro numero? ('si/no')");
	}

	document.getElementById("maximo").value = maximo;
	document.getElementById("minimo").value = minimo;

}//FIN DE LA FUNCIÓN