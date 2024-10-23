let textoModificado = document.getElementById('textoModificado');

function enviarTexto(){
    textoIngresado = document.getElementById('inputTexto').value;
    textoModificado.innerHTML = textoIngresado;

};

