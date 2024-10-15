// Validar Contraseña: Escribir una función que valide si una contraseña es correcta basándose en dos opciones predefinidas.
// Instrucciones:
//      a. Escribe una función llamada contraseñaValida que reciba un string como argumento.
//      b. Si el string es igual a una de las dos contraseñas definidas , la función debe devolver un mensaje en la consola.
//      c. Si el string es diferente de estos valores, debe devolver otro mensaje en la consola


// Libreria de Node necesaria para solicitar datos al usuario
const leerLinea = require('readline');
const ll = leerLinea.createInterface({
    input: process.stdin,
    output: process.stdout
});


const contraseniaDefinida1 = 'holamundo';
const contraseniaDefinida2 = 'chaumundo';

function contraseniaValida (contraseniaIngresada, contraseniaDefinida1, contraseniaDefinida2){
    if (contraseniaIngresada == contraseniaDefinida1 || contraseniaIngresada == contraseniaDefinida2){
        console.log('Acceso exitoso al sistema');
        ll.close(); // Cierra el ingreso de datos mediante consola.
    } else {
        console.log('La contrasenia ingresada es incorrecta. Intente otra vez');
        solicitarContrasenia();
    }
}

function solicitarContrasenia() {
    ll.question("Ingresa la contraseña para acceder al sistema: ", (contraseniaIngresada) => {
        contraseniaValida(contraseniaIngresada, contraseniaDefinida1, contraseniaDefinida2);
    }); // Permite el ingreso de datos mediante consola.
}

solicitarContrasenia();




