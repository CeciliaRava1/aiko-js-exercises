let x = 830;
let y = 0;

button = document.getElementById('button');

// events
document.body.addEventListener("keydown", (e) => {
    console.log("event", e.key);
    if (
        e.key === "ArrowUp" ||
        e.key === "ArrowDown" ||
        e.key === "ArrowLeft" ||
        e.key === "ArrowRight"
    ) {
        direction = e.key;
    }
});

function updatePosition() {
    switch (direction) {
        case "ArrowRight":
            x += 2;
            break;
        case "ArrowLeft":
            x -= 2;
            break;
        case "ArrowDown":
            y += 2;
            break;
        case "ArrowUp":
            y -= 2;
            break;
        default:
            console.warn("direction no coincide con ninguno de los casos");
            break;
    }

    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
}

function drawFrame() {
    updatePosition();
}

setInterval(() => {
    if (direction) drawFrame();
}, 1000 / 60);