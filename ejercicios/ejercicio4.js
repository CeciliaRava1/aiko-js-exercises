// Libreria de Node necesaria para solicitar datos al usuario
const leerLinea = require('readline');
const ll = leerLinea.createInterface({
    input: process.stdin,
    output: process.stdout
});

function solicitarNumero() {
    ll.question("Ingresa un numero: ", (numeroIngresado) => {
        fizzBuzz(numeroIngresado);
    }); // Permite el ingreso de datos mediante consola.
}

solicitarNumero();

function fizzBuzz(numeroIngresado){
    ll.close();
    if (numeroIngresado % 3 == 0 && numeroIngresado % 5 == 0){
        console.log('fizzbuzz');
    } else if (numeroIngresado % 5 == 0){
        console.log('buzz');
    } else if(numeroIngresado % 3 == 0){
        console.log('fizz');
    } else
        console.log(numeroIngresado)
}