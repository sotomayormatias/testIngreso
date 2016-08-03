function Mostrar()
{

var numero = parseInt(prompt("ingrese unmero"));
var cantNumPares=0;
var numerosPares="";
for(var contador=1; contador<=numero;contador++){
	if(contador % 2 == 0){
		cantNumPares++;

		if(numerosPares == ""){
			numerosPares = contador;
		} else {
			numerosPares = numerosPares + ", " + contador;
		}
	}
}

	alert("cantidad de numeros pares: " + cantNumPares + " y los numeros pares son: " + numerosPares);

}//FIN DE LA FUNCIÓN