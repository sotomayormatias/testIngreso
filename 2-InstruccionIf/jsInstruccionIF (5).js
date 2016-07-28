function Mostrar()
{
	//tomo la edad  
	var edad = document.getElementById("edad").value;
	if((edad > 0 && edad < 13) || (edad > 17)){
		alert("Usted es NO un adolescente");
	}

}//FIN DE LA FUNCIÓN