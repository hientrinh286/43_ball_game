let canvas = document.getElementById('my-canvas');
var ctx = canvas.getContext('2d');
let width_canvas = document.getElementById('my-canvas').width;
let height_canvas = document.getElementById('my-canvas').height
const width_rect = 100;
const height_rect = 10;
const radius_circle = 10;
let X_firstPoint_Circle = Math.floor(Math.random()*(width_canvas-2*radius_circle) + radius_circle);
let Y_firstPoint_Circle = Math.floor(Math.random()*height_canvas/2 + radius_circle);

let rect = new Rectangle((width_canvas/2-width_rect/2), (height_canvas-height_rect), width_rect, height_rect);
let bar = rect.DrawRect();

let circle = new Circle(X_firstPoint_Circle, Y_firstPoint_Circle, radius_circle, 'red', 2, 2);
let ball = circle.DrawCircle();

function Play(){
    let y = circle.y;
    let x = circle.x;
    if (circle.bottom >=canvas.height) {
        playInboxRingTone();
        return;
    }
    
    setTimeout(function (){
        console.log(1);
        clearScreen();
        circle.MoveBall();
        circle.CheckBorder();
        circle.DrawCircle();
        rect.DrawRect();
        Play();
        },20);
}

function clearScreen(){
    ctx.clearRect(0, 0, width_canvas, height_canvas);
}

window.addEventListener('keyup', function(event){
    switch(event.keyCode){
        case 37:
            rect.MoveLeft();
            break;
        case 39:
            rect.MoveRight();
            break;
        case 38:
            circle.SpeedX +=2;
            circle.SpeedY *=2;
            break;
        case 38:
            circle.SpeedX /=2;
            circle.SpeedY /=2;
            break;
    }

})

function playInboxRingTone(){
    var audio = new Audio('Warning2.mp3');
    audio.play();
}

function accleratePlus() {
    circle.SpeedX *=2;
    circle.SpeedY *=2;
}

function acclerateMinus() {
    circle.SpeedX /=2;
    circle.SpeedY /=2;
}
