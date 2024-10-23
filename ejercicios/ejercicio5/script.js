let spanCantidadVocales = document.getElementById('cantidadVocales');

vocales = ['a', 'e', 'i', 'o', 'u'];
let cantidadVocales = 0;

function enviarPalabra(){
    palabraIngresada = document.getElementById('inputPalabra').value;
    contarVocales(palabraIngresada);
};

function contarVocales(palabraIngresada){
    cantidadVocales = 0;
    for(i=0; i <= palabraIngresada.length; i++){
        if(vocales.includes(palabraIngresada[i])){
            cantidadVocales ++;
        }
    }
    spanCantidadVocales.innerHTML = `La palabra tiene ${cantidadVocales} vocales`;
}

