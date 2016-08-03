function Mostrar(){
	var largo = document.getElementById("largo").value;
	var ancho = document.getElementById("ancho").value;

	var resultado = (2*largo + 2*ancho) * 3;

	alert("Se necesitan " + resultado + " metros de alambre");
}