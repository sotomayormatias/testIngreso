function Mostrar(){
	var dia = prompt("Ingrese un día de la semana");

	switch(dia){
		case "Lunes":
		case "Martes":
		case "Miercoles":
		case "Jueves":
		case "Viernes":
			alert("A trabajar!!!");
			break;
		case "Sabado":
		case "Domingo":
			alert("Es fin de semana");
			break;
	}
}