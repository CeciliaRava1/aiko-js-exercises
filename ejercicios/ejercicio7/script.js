// Canvas
let canvas = document.querySelector('#rectangulo');
let ctx = canvas.getContext('2d');

// Crear rectangulo
ctx.fillStyle = '#878f87'; // Color de relleno
ctx.fillRect(404,50,170,360) // x, y, w, h

// Crear circulo 1
ctx.beginPath();
ctx.arc(489, 120,45,0, Math.PI * 2); //x,y,radio, angulo inicial, traer pi
ctx.fillStyle = '#c8d3c8';
ctx.fill();

// Crear circulo 2
ctx.beginPath();
ctx.arc(489, 230,45,0, Math.PI * 2); //x,y,radio, angulo inicial, traer pi
ctx.fillStyle = '#c8d3c8';
ctx.fill();

// Crear circulo 3
ctx.beginPath();
ctx.arc(489, 340,45,0, Math.PI * 2); //x,y,radio, angulo inicial, traer pi
ctx.fillStyle = '#c8d3c8';
ctx.fill();

// ----
// Manejo del DOM
botonRojo = document.getElementById('botonRojo');
botonAmarillo = document.getElementById('botonAmarillo');
botonVerde = document.getElementById('botonVerde');
botonReiniciar = document.getElementById('botonReiniciar');

function cambiarColorRojo(){
    ctx.beginPath();
    ctx.arc(489, 120,45,0, Math.PI * 2); //x,y,radio, angulo inicial, traer pi
    ctx.fillStyle = '#ff3c3c';
    ctx.fill();
}

function cambiarColorAmarillo(){
    ctx.beginPath();
    ctx.arc(489, 230,45,0, Math.PI * 2); //x,y,radio, angulo inicial, traer pi
    ctx.fillStyle = '#ffff3c';
    ctx.fill();
}

function cambiarColorVerde(){
    ctx.beginPath();
    ctx.arc(489, 340,45,0, Math.PI * 2); //x,y,radio, angulo inicial, traer pi
    ctx.fillStyle = '#5aff3c';
    ctx.fill();
}

function reiniciarSemaforo(){
    ctx.beginPath();
    ctx.arc(489, 120,45,0, Math.PI * 2); //x,y,radio, angulo inicial, traer pi
    ctx.fillStyle = '#c8d3c8';
    ctx.fill();

    ctx.beginPath();
    ctx.arc(489, 230,45,0, Math.PI * 2); //x,y,radio, angulo inicial, traer pi
    ctx.fillStyle = '#c8d3c8';
    ctx.fill();

    ctx.beginPath();
    ctx.arc(489, 340,45,0, Math.PI * 2); //x,y,radio, angulo inicial, traer pi
    ctx.fillStyle = '#c8d3c8';
    ctx.fill();
}

