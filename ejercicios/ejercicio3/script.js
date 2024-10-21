botonIncrementar = document.getElementById('botonIncrementar');
botonDecrementar = document.getElementById('botonDecrementar');
contadorSpan = document.getElementById('contador');

let contador = 0;

botonIncrementar.addEventListener('click', registrarClickBotonIncrementar);
botonDecrementar.addEventListener('click', registrarClickBotonDecrementar);



function registrarClickBotonIncrementar() {
    contador ++;
    contadorSpan.innerHTML = contador;
}

function registrarClickBotonDecrementar() {
    contador --;
    contadorSpan.innerHTML = contador;
}



