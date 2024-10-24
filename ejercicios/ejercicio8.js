// Libreria de Node necesaria para solicitar datos al usuario
const leerLinea = require('readline');
const ll = leerLinea.createInterface({
    input: process.stdin,
    output: process.stdout
});

solicitarDatos();

function calcularPropina(totalCuenta, porcentajePropina){
    console.log(`La propina total de la cuenta es ${(totalCuenta*porcentajePropina)/100}`)
}

function solicitarDatos() {
    ll.question("Ingresa el monto total de la cuenta: ", (totalCuenta) => {
        ll.question("Ingresa su porcentaje de propina: ", (porcentajePropina) => {
            calcularPropina(totalCuenta, porcentajePropina);
        }) 
    })
}
