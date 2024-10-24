valorConvertido = document.getElementById('valorConvertido');

function enviarValor(){
    valorIngresado = document.getElementById('inputValor').value;
    convertirValor(valorIngresado);
};

function convertirValor(valorIngresado){
    valorConvertido.innerHTML = `El valor ingresado equivale a ${valorIngresado*0.621371} millas`;
}

