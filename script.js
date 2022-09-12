const CTX = document.getElementById("canvas").getContext("2d");
const SPEED = 3;

let snake = {
    x: 100,
    y: 100,
    // 1 UP // 2 RIGHT // 3 DOWN // 4 LEFT
    d: 2,
    move: () => {
        if(snake.d == 1) {snake.y -= SPEED};
        if(snake.d == 2) {snake.x += SPEED};
        if(snake.d == 3) {snake.y += SPEED};
        if(snake.d == 4) {snake.x -= SPEED};
    }
}
let snake2 = {
    x: 100,
    y: 100,
    // 1 UP // 2 RIGHT // 3 DOWN // 4 LEFT
    d: 2,
    move: () => {
        if(snake2.d == 1) {snake2.y -= SPEED};
        if(snake2.d == 2) {snake2.x += SPEED};
        if(snake2.d == 3) {snake2.y += SPEED};
        if(snake2.d == 4) {snake2.x -= SPEED};
    }
}
window.addEventListener("keydown", (event) => {
    if(event.defaultPrevented) {return};

    switch (event.key) {
        case "ArrowDown":
            snake.d != 1? snake.d = 3 : snake.d = 1;
            break;
        case "ArrowUp":
            snake.d != 3? snake.d = 1 : snake.d = 3;
            break;
        case "ArrowLeft":
            snake.d != 2? snake.d = 4 : snake.d = 2;
            break;
        case "ArrowRight":
            snake.d != 4? snake.d = 2 : snake.d = 4;
            break;
        default:
            return;
    }
    event.preventDefault();
}, true);

let drawSnakeFragment = (x,y,c) => {
    CTX.fillStyle = c;
    CTX.fillRect(x,y,10,10);
}






let update = () => {

CTX.fillStyle = "#515151";
CTX.fillRect(0, 0, 1920, 1080);
snake.move();
drawSnakeFragment(snake.x, snake.y, "red")
requestAnimationFrame(update)
};

update();