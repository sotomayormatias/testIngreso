function Mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 9.");

	while((parseInt(numero) < 0 || parseInt(numero) > 9) && (numero != null)){
		numero = prompt("ingrese un número entre 0 y 9.");
	}

	document.getElementById("Numero").value = numero;

}//FIN DE LA FUNCIÓN