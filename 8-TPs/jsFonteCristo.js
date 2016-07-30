/*El departamento de NUMEROS ESPECIALES  del instituto matemático  FonteCristo  nos está pidiendo una aplicación que verifique las distintas cualidades de los números.

13.	Para cada una de estas acciones  debemos realizar la lógica para verificar las cualidades pedidas:
a.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
b.	Se pedirán un número positivo y se mostrará la cantidad de números pares desde el número ingresado hasta el cero.
c.	Se pedirán un número positivo y se mostrará la cantidad de números divisibles de este número que se encuentran desde el 1 al 100.
d.	Se pedirán un número positivo y se mostrará si el número es un número primo o no.
e.	Se pedirán un número positivo y se mostrará la cantidad de números Primos desde el número ingresado hasta el cero.
*/
function NumerosPares() 
{
 	var numeroIngresado = document.getElementById("numero").value;
 	if(numeroIngresado%2 != 0){
 		numeroIngresado--;
 	}

 	alert("Existen " + (numeroIngresado/2+1) + " numeros pares");
}

function NumerosImpares() 
{
 	var numeroIngresado = document.getElementById("numero").value;

 	if(numeroIngresado%2 != 0){
 		numeroIngresado++;
 	}

 	alert("Existen " + (numeroIngresado/2) + " numeros impares");
}


function NumerosDivisibles(){
 	var numeroIngresado = document.getElementById("numero").value;
 	var contador = 0;

 	for(var i=1; i<=numeroIngresado; i++){
 		if(numeroIngresado%i == 0){
 			contador++;
 		}
 	}
 	alert("Existen " + contador + " numeros divisibles");
}

function VerificarPrimo(){
	var numeroIngresado = document.getElementById("numero").value;
 	var contador = 0;

 	for(var i=1; i<=numeroIngresado; i++){
 		if(numeroIngresado%i == 0){
 			contador++;
 		}
 	}
 	if(contador == 2){
 		alert("Es un numero primo");
 	} else {
 		alert("No es un numero primo");
 	}
}

function NumerosPrimos(){
	var numeroIngresado = document.getElementById("numero").value;
	var contador=0;
 	for(var i=1; i<=numeroIngresado; i++){
 		if(VerificarPrimo(i)){
 			contador++;
 		}
 	}

 	alert("Existen " + contador + " numeros primos");
}

function VerificarPrimo(numero){
 	var contador = 0;

 	for(var i=1; i<=numero; i++){
 		if(numero%i == 0){
 			contador++;
 		}
 	}
 	return contador == 2;
}