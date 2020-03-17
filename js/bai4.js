function Cirle(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;

    this.render = function () {
        let canvas = document.getElementById("myCanvas");
        let ctx = canvas.getContext("2d");
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fill();

    }
}

let circle = new Cirle(10, 10, 100, "#000000");
circle.render();