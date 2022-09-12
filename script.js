const CTX = document.getElementById("canvas").getContext("2d");
const SPEED = 1;

class Snake  {
    
    constructor () {
        this.d = 2;
        this.fragments = [];
    }
    init() {
        for(let i=0;i<1000;i++) {
        this.fragments.push({x: 100, y: 100});
        };
    };

    move() {
        for(let i=this.fragments.length-1;i>=0;i--) {
            if(i>0) {
                this.fragments[i].x = this.fragments[i-1].x
                this.fragments[i].y = this.fragments[i-1].y
                if(this.fragments[0].x === this.fragments[i].x && this.fragments[0].y === this.fragments[i].y) {
                    this.fragments.slice(0, this.fragments.length)
                }

            }
            else {
                switch(this.d) {
                    case 1:
                        this.fragments[0].y -= 11;
                        break;
                    case 2:
                        this.fragments[0].x += 11;
                        break;
                    case 3:
                        this.fragments[0].y += 11;
                        break;
                    case 4:
                        this.fragments[0].x -= 11;
                        break;
                
                }
            }
        }
    };
    
    draw() {
        for(let i=0;i<this.fragments.length;i++) {
            drawSnakeFragment(this.fragments[i].x, this.fragments[i].y, i==0?"#0f0":"red")
        }
    }
};


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




let snake = new Snake();
snake.init();
setInterval(() => {
    snake.move();
}, 15);
let update = () => {

CTX.fillStyle = "#515151";
CTX.fillRect(0, 0, 1920, 1080);
console.log(snake.d)
snake.draw();

requestAnimationFrame(update)
};

update();