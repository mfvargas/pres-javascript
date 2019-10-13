function holaMundo () {
// Imprime la hilera "¡Hola mundo!"
	alert("¡Hola mundo!");
}

function holaCostaRica () {
// Imprime la hilera "¡Hola Costa Rica!"	
	alert("¡Hola Costa Rica!");
}

function cuadrado (numero) {
// Retorna el cuadrado de un número	
    return numero * numero;
}  

function promedio (x, y, z) {
// Retorna el promedio de tres números	
    return (x + y + z)/3;
}  

function esMayor (edad) {
// Retorna la hilera "Mayor de edad" si edad es mayor o igual a 18 y "Menor de edad" en caso contrario
	if (edad < 18) {
		return "Menor de edad" + " (" + edad + ")"
	} else if ((edad >= 18) && (edad < 65)) {
		return "Mayor de edad" + " (" + edad + ")"
	} else {
		return "Adulto mayor" + " (" + edad + ")"
	}
}

function esMayor2 (edad) {
// Retorna la hilera "Mayor de edad" si edad es mayor o igual a 18, "Menor de edad", si es menor que 18 y "Adulto mayor" si es mayor o igual a 65
	if (edad >= 65) {
		return "Adulto mayor" + " (" + edad + ")"
	} else if (edad >= 18) {
		return "Mayor de edad" + " (" + edad + ")"
	} else {
		return "Menor de edad" + " (" + edad + ")"
	}
}


function esMayor3 (edad) {
// Retorna la hilera "Mayor de edad" si edad es mayor o igual a 18, "Menor de edad", si es menor que 18 y "Adulto mayor" si es mayor o igual a 65
	switch (true) {
		case (edad >= 65):
			return "Adulto mayor" + " (" + edad + ")"
			break;
		case (edad >= 18):
			return "Mayor de edad" + " (" + edad + ")"
			break;
		default:
			return "Menor de edad" + " (" + edad + ")"
			break;
	}	
}

function imprimeCuadrados () {
// Imprime los cuadrados de los números de un ciclo	
	for (i = 1; i <= 3; i++) {          
	  alert(i * i);
	}	
}

function sumaCuadrados (x, y) {
// Retorna la suma de los cuadrados de los números que están entre "x" y "y" (incluyendo a "x" y a "y")
// Ej: sumaCuadrados(1, 2) = 5
// Ej: sumaCuadrados(2, 4) = 29

   var suma = 0;
   for (i=x; i <= y; i++) {
	   suma = suma + i*i;
   }
   
   return suma;
	
}

function sumaCuadrados2 (x, y) {
// Retorna la suma de los cuadrados de los números que están entre "x" y "y" (incluyendo a "x" y a "y")
// Ej: sumaCuadrados(1, 2) = 5
// Ej: sumaCuadrados(2, 4) = 29

   var suma = 0;
   var i = x
   
   while (i <= y) {
	   suma = suma + i*i;
	   i++;
   }
   
   return suma;
}








