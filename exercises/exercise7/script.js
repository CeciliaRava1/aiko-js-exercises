// Canvas
let canvas = document.querySelector('#rectangle');
let ctx = canvas.getContext('2d');

// Create rectangle
ctx.fillStyle = '#878f87'; // Fill color
ctx.fillRect(404,50,170,360) // x, y, width, height

// Create circle 1
ctx.beginPath();
ctx.arc(489, 120,45,0, Math.PI * 2); //x,y,radius, start angle, bring pi
ctx.fillStyle = '#c8d3c8';
ctx.fill();

// Create circle 2
ctx.beginPath();
ctx.arc(489, 230,45,0, Math.PI * 2); //x,y,radius, start angle, bring pi
ctx.fillStyle = '#c8d3c8';
ctx.fill();

// Create circle 3
ctx.beginPath();
ctx.arc(489, 340,45,0, Math.PI * 2); //x,y,radius, start angle, bring pi
ctx.fillStyle = '#c8d3c8';
ctx.fill();

// ----
// DOM Handling
buttonRed = document.getElementById('buttonRed');
buttonYellow = document.getElementById('buttonYellow');
buttonGreen = document.getElementById('buttonGreen');
buttonReset = document.getElementById('buttonReset');

function changeColorRed(){
    ctx.beginPath();
    ctx.arc(489, 120,45,0, Math.PI * 2); //x,y,radius, start angle, bring pi
    ctx.fillStyle = '#ff3c3c';
    ctx.fill();
}

function changeColorYellow(){
    ctx.beginPath();
    ctx.arc(489, 230,45,0, Math.PI * 2); //x,y,radius, start angle, bring pi
    ctx.fillStyle = '#ffff3c';
    ctx.fill();
}

function changeColorGreen(){
    ctx.beginPath();
    ctx.arc(489, 340,45,0, Math.PI * 2); //x,y,radius, start angle, bring pi
    ctx.fillStyle = '#5aff3c';
    ctx.fill();
}

function resetTrafficLight(){
    ctx.beginPath();
    ctx.arc(489, 120,45,0, Math.PI * 2); //x,y,radius, start angle, bring pi
    ctx.fillStyle = '#c8d3c8';
    ctx.fill();

    ctx.beginPath();
    ctx.arc(489, 230,45,0, Math.PI * 2); //x,y,radius, start angle, bring pi
    ctx.fillStyle = '#c8d3c8';
    ctx.fill();

    ctx.beginPath();
    ctx.arc(489, 340,45,0, Math.PI * 2); //x,y,radius, start angle, bring pi
    ctx.fillStyle = '#c8d3c8';
    ctx.fill();
}
