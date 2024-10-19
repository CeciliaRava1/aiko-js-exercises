// Libreria de Node necesaria para solicitar datos al usuario
const leerLinea = require('readline');
const ll = leerLinea.createInterface({
    input: process.stdin,
    output: process.stdout
});

ll.question("Ingresa tu edad: ", (edadPersona) => {
    ll.question("Ingresa tus ingresos: ", (ingresosPersona) => {

    calculoImpuestos(edadPersona, ingresosPersona);
    ll.close();
})});

function calculoImpuestos(edadPersona, ingresosPersona){
    if(ingresosPersona >= 1000){
        console.log(`Usted debe abonar $ ${(ingresosPersona*40)/100} en concepto de impuestos`);
    } else {
        console.log('Usted no debe abonar impuestos');
    }
}