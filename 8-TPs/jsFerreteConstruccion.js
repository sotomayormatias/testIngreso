/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var largo = document.getElementById("Largo").value;
	var ancho = document.getElementById("Ancho").value;

	var resultado = (parseInt(largo) + parseInt(ancho)) * 3;

	alert("Se deben comprar " + resultado + " metros de alambre");
}
function Circulo () 
{
	var radio = document.getElementById("Radio").value;

	var resultado = Math.round(2 * Math.PI * parseInt(radio) * 3);

	alert("Se deben comprar " + resultado + " metros de alambre");
}
function Materiales () 
{
	var largo = document.getElementById("Largo").value;
	var ancho = document.getElementById("Ancho").value;

	var superficie = parseInt(largo) * parseInt(ancho);

	alert("Se necesitan " + 2*superficie + " bolsas de cemento y " + 3*superficie + " bolsas de cal")
}