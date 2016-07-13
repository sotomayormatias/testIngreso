function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var nota = Math.floor(Math.random() * 10 + 1);

	if(nota < 4){
		alert("Su nota es: " + nota + ". VAMOS, LA PROXIMA SE PUEDE!");
	} else if(nota >= 4 && nota < 9){
		alert("Su nota es: " + nota + ". APROBÓ");
	} else {
		alert("Su nota es: " + nota + ". EXCELENTE!");
	}


}//FIN DE LA FUNCIÓN