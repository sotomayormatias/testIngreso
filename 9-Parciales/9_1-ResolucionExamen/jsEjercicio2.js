function Mostrar(){
	var importe = parseInt(prompt("Ingrese un importe"));

	var importeMasIva = importe * 1.21;

	alert("El importe final es: " + importeMasIva);
}