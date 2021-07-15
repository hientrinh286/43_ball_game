class Rectangle {
    constructor(x, y, width, height){
        this.x = x;
        this.y = y;
        this.Speed =50;
        this.width = width;
        this.height = height;
        this.canvas = document.getElementById('my-canvas');
        this.ctx = this.canvas.getContext('2d');
    }

    DrawRect(){
        this.ctx.beginPath();
        this.ctx.fillStyle = 'blue';
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
        this.ctx.fill();
        this.ctx.stroke();
    }

    MoveRight(){
        if (this.x <= this.canvas.width - this.width){
            this.x += this.Speed;
        }
    }

    MoveLeft(){
        if (this.x >= 0){
            this.x -= this.Speed;
        }
    }
}