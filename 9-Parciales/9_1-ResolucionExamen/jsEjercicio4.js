function Mostrar(){
	var numero1 = parseInt(prompt("Ingrese un numero"));
	var numero2 = parseInt(prompt("Ingrese otro numero"));
	var resultado;
	if(numero1 > numero2){
		resultado = numero1-numero2;
	} else if(numero1 < numero2){
		resultado = numero1+numero2;
	} else {
		resultado = numero1*numero2;
	}

	document.write("El resultado es: " + resultado);
}