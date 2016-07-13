function Mostrar()
{
	//tomo la edad  
	var edad = document.getElementById("edad").value;
	if((parseInt(edad) > 0 && parseInt(edad) < 13) || (parseInt(edad) > 17)){
		alert("Usted es NO un adolescente");
	}

}//FIN DE LA FUNCIÓN