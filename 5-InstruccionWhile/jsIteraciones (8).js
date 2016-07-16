function Mostrar()
{
	var positivo=0;
	var negativo=1;
	var respuesta='si';

	while(respuesta == "si"){
		var valorIngresado = prompt("Ingrese un numero");
		if(parseInt(valorIngresado) < 0)
			negativo *= parseInt(valorIngresado);
		else
			positivo += parseInt(valorIngresado);

		respuesta = prompt("Quiere ingresar otro numero? ('si/no')");
	}

	document.getElementById('suma').value=positivo;
	document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN