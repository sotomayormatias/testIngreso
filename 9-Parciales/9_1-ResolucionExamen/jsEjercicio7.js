function Mostrar(){
	var suma=0;
	var notaMinima=10;
	var contador=0;
	var contVaronesMayorASeis=0;

	while(contador<100){
		var sexoIngresado= prompt("Ingrese el sexo");
		while(sexoIngresado != "m" && sexoIngresado != "f"){
			sexoIngresado= prompt("Ingrese el sexo (m/f)");
		}

		var nota = prompt("Ingrese nota");
		while(isNaN(nota) || nota<0 || nota>10){
			nota = prompt("Ingrese nota (entre 0 y 10)");
		}

		suma = suma + parseInt(nota);

		if(nota < notaMinima){
			notaMinima = nota;
		}

		if(sexoIngresado=="m" && nota>=6){
			contVaronesMayorASeis++;
		}
		contador++;
	}

	alert("Promedio: " + suma/100 + ", nota mas baja: " + notaMinima + ", varones con nota >= 6: " + contVaronesMayorASeis);
}