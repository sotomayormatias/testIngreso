function Mostrar()
{
	console.clear();
	var contador1=0;
	var contador2=0;
	var contador3=0;
	var contador4=0;
	var contador5=0;
	var contador6=0;
	var contador7=0;
	var contador8=0;
	var contador9=0;
	var contadorFalso1=0;
	var contadorFalso2=0;
	var limite = 100000;

	for(var i=0; i<limite; i++){
		var numAleatorio = Math.floor((Math.random()*9)+1);
		switch(numAleatorio){
			case 1:
				contador1++
				break;
			case 2:
				contador2++
				break;
			case 3:
				contador3++
				break;
			case 4:
				contador4++
				break;
			case 5:
				var truco1 = Math.floor(Math.random()*2);
				if(truco1){
					contadorFalso1++
				}
				contador5++
				break;
			case 6:
				contador6++
				break;
			case 7:
				contador7++
				break;
			case 8:
				var truco2 = Math.floor(Math.random()*2);
				if(truco2){
					contadorFalso2++
				}
				contador8++;
				break;
			case 9:
				contador9++
				break;
		}
	}

	console.log(contador1/limite*100);
	console.log(contador2/limite*100);
	console.log(contador3/limite*100);
	console.log(contador4/limite*100);
	console.log((contador5+contadorFalso1)/limite*100);
	console.log(contador6/limite*100);
	console.log(contador7/limite*100);
	console.log((contador8-contadorFalso2)/limite*100);
	console.log(contador9/limite*100);
}