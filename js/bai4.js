const COORDINATE_X = 10;
const COORDINATE_Y = 10;
const RADIUS = 100;
const FILL_COLOR = "#000000";
const CONTEXT_NAME = "2d";
const NAME_OF_CANVAS = "myCanvas";
const START_ANGLE = 0;
const END_ANGLE = 2;

function Cirle(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;

    this.render = function () {
        let canvas = document.getElementById(NAME_OF_CANVAS);
        let ctx = canvas.getContext(CONTEXT_NAME);
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.radius, START_ANGLE, END_ANGLE * Math.PI);
        ctx.fill();

    }
}
let circle = new Cirle(COORDINATE_X, COORDINATE_Y, RADIUS, FILL_COLOR);
circle.render();