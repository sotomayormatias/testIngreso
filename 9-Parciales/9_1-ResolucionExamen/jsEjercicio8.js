function Mostrar(){
	var contNumPares=0;
	var suma=0;
	var contador=0;
	var minimo;
	var maximo;
	var respuesta="si";

	while(respuesta != "no"){
		var numero = parseInt(prompt("Ingrese un numero"));

		while(isNaN(numero) || numero < 0){
			numero = parseInt(prompt("Ingrese un numero"));
		}

		suma = suma + numero;
		contador++;
		if(numero%2 == 0){
			contNumPares++;
		}
		if(contador == 1){
			minimo=maximo=numero;
		} else {
			if(numero<minimo){
				minimo = numero;
			}
			if(numero > maximo){
				maximo=numero;
			}
		}
		respuesta = prompt("Desea ingresar otro numero?");
	}

	document.write("cantidad numeros pares: " + contNumPares + ", promedio: " + suma/contador + ", suma: " + suma + ", minimo: " + minimo + ", maximo: " + maximo);
}