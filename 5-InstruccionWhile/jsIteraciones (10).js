function Mostrar()
{
	var sumaNegativos = 0;
	var sumaPositivos = 0;
	var contNegativos = 0;
	var contPositivos = 0;
	var contCeros = 0;
	var contPares = 0;

	var respuesta='si';
	
	while(respuesta!='no')
	{
		var valorIngresado = prompt("Ingrese un numero");

		if(parseInt(valorIngresado) < 0){
			sumaNegativos += parseInt(valorIngresado);
			contNegativos++;
		} else if(parseInt(valorIngresado) > 0){
			sumaPositivos += parseInt(valorIngresado);
			contPositivos++;
		} else {
			contCeros++;
		}

		if(parseInt(valorIngresado) % 2 == 0){
			contPares++;
		}

		respuesta = prompt("Quiere ingresar otro numero? ('si/no')");
	}

	var promNegativos = parseInt(sumaNegativos)/parseInt(contNegativos);
	var promPositivos = parseInt(sumaPositivos)/parseInt(contPositivos);
	var total = parseInt(sumaPositivos) + parseInt(sumaNegativos);

	document.write("Suma de negativos: " + sumaNegativos +
					"<br>Suma de positivos: " + sumaPositivos +
					"<br>Cantidad de negativos: " + contNegativos +
					"<br>Cantidad de positivos: " + contPositivos +
					"<br>Cantidad de ceros: " + contCeros +
					"<br>Cantidad de numeros pares: " + contPares +
					"<br>Promedio de negativos: " + promNegativos +
					"<br>Promedio de positivos: " + promPositivos +
					"<br>Diferencia entre positivos y negativos: " + total
					);

}//FIN DE LA FUNCIÓN