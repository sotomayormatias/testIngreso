function Mostrar(){
	var contador=0;
	var menorImporte;
	var mayorImporte;

	while(contador<24){
		var numeroIngresado = prompt("Ingrese un importe");

		while(isNaN(numeroIngresado) || numeroIngresado <= 0){
			numeroIngresado = prompt("El importe debe ser positivo");
		}

		if(contador==0){
			menorImporte = numeroIngresado;
			mayorImporte = numeroIngresado;
		} else {
			if(numeroIngresado<menorImporte){
				menorImporte = numeroIngresado;
			}
			if(numeroIngresado>mayorImporte){
				mayorImporte = numeroIngresado;
			}
		}

		contador++
	}
	alert("El menor importe es: " + menorImporte + ", y el mayor importe es: " + mayorImporte);
}