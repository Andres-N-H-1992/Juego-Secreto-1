//prompt("Me indicas un numero por favor: ");
// prompt => medoto que pregunta un numero en el navegador

/*
formas corectas de nombrar una variable.

camelCase: La primera letra de la primera palabra es minúscula, y la primera letra de cada palabra subsiguiente es mayúscula.

ejemplo: nombreUsuario, numeroDeEstudiantes
PascalCase: Similar a camelCase, pero la primera letra de todas las palabras, incluyendo la primera, es mayúscula.

Ejemplo: NombreUsuario, NumeroDeEstudiantes
snake_case: Todas las letras son minúsculas y las palabras están separadas por guiones bajos.

Ejemplo: nombre_usuario, numero_de_estudiantes

*/

let numeroMaximoPosible =30;



// Math.random()*100+1 ==> genera un numero ramdon entre 1 y 10
let numeroSecreto = Math.floor(Math.random()*numeroMaximoPosible+1);



let numeroDeUsuario = 0;
let intentos = 1;
let palabraVeces = 'Vez';
let maximosintentos = 3;

console.log(numeroSecreto);
// !=  ==> operador de diferencia "Diferente a "
// while ==> condicion mientras
while (numeroDeUsuario != numeroSecreto) {
	//paseInt ==> convierte string a numero
	let numeroDeUsuario = parseInt(prompt(`Me indicas un numero entre 1 y ${numeroMaximoPosible} por favor: `));
	// =  significa asignacion
	console.log(numeroDeUsuario);
	/*
    este codigo realiza la comparacion ==> if (numeroDeUsuario == numeroSecreto)
    */
	if (numeroDeUsuario == numeroSecreto) {
		//Acertamos , fue verdadera la condicion
		//alert(`Acertaste, el numero es: ${numeroDeUsuario}. lo hiciste en ${intentos}  ${palabraVeces}`); //Aquí uso comillas invertidas para poder pasar la variable numeroUsuario
		alert(`Acertaste, el numero es: ${numeroDeUsuario}. lo hiciste en ${intentos}  ${intentos == 1 ? 'Vez' : 'Veces'}`);  // ? 'Vez' => significa SI  Y  : => else
		
		break;
	} else {
		if (numeroDeUsuario > numeroSecreto) {
			alert('El numero secreto es menor');
		
		} else {
			alert('el numero secreto es mayor');
			
		}
		//else==> indica de lo conmtrario

		// manera de declarar un contador
		//intentos = intentos + 1; //incrementar contador mientras el usuario no acierte
		//intentos += 1;
		intentos++;

		palabraVeces = 'Veces';
		if (intentos > maximosintentos) {
			alert(`llegasta al numero maximo de ${maximosintentos} intentos`);
			break;
		}

		//alert('Lo siento, No acertaste el numero : '); //Aquí uso comillas simples porque no necesito concatenar una variable a mi cadena de caracteres
		//NO Acertamos , fue verdadera la condicion
	}
	// las {} indica que es un bloque de codigo
}

/*

OTRA MANERA DE PROGRAMARLO CON CONSOLE.LOG 



//Variables
let numeroSecreto = 6;
let numeroUsuario = prompt("Me indicas un numero entre 1 y 10 por favor");

//Se agrega un console.log para verificar el numero ingresado por el usuario
console.log('El numero ingresado por el usuario es: ' + numeroUsuario);

//Se agrega un console.log para comparar el numero ingresado por el usuario y el numero secreto
console.log('¿El numero secreto es igual al numero ingresado por el usuario? : ', numeroSecreto == numeroUsuario)

if (numeroUsuario == numeroSecreto) {
    //Acertamos, fue verdadera la condicion
    alert(`Acertaste, el numero es: ${numeroUsuario}`);
} else {
    //La condicion no se cumplio
    alert('Lo siento, no acertaste el numero');
    //Se agrega un console.log para verificar cual era el numero secreto
    console.log('El numero secreto era: ' + numeroSecreto);
}


*/
