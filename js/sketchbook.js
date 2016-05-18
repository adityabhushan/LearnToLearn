var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var PI = 3.14;

function rectangle(x, y, w, h) {

    ctx.beginPath();
    ctx.rect(x, y, w, h);
    ctx.closePath();
    ctx.stroke();

}

function circle(x, y, r, sAngle, eAngle) {

    ctx.beginPath();
    ctx.arc(x, y, r, sAngle * PI, eAngle * PI);
    ctx.closePath();
    ctx.stroke();

}

function triangle(x, y) {

    ctx.beginPath();
    ctx.moveTo(x, x);
    ctx.lineTo(x, y);
    ctx.lineTo(y, y);
    ctx.closePath();
    ctx.stroke();

}

function line(x, y, z) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(z, y);
    ctx.closePath();
    ctx.stroke();

}

function ellipse(x, y, radiusX, radiusY, rotation, sAngle, eAngle) {
    //ctx.beginPath();
    // ellipse(100, 100, 50, 75, 45 , 0, 2 )
    ctx.ellipse(x, y, radiusX, radiusY, rotation * (PI / 180), sAngle * PI, eAngle * PI);
    ctx.closePath();
    ctx.stroke();

}

function pie(x, y, a, b, c) {

    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.arc(x, y, a, b, c * PI);
    ctx.lineTo(x, y);
    ctx.closePath();
    ctx.stroke();
}
//
function pixel(x, y) {
    ctx.fillRect(x, y, 1, 1);
}

function text(str, x, y) {
    ctx.font = "30px Arial";
    ctx.fillText(str, x, y);
}


function fill(str) {
    // var str = "rgb" + "(" + r + "," + g + "," + b + ")";
    // console.log(str);

    //ctx.beginPath();
    ctx.fillStyle = str;
    ctx.fill();




}

function no_fill() {


}

console.log("inside sketchbook js file");

/*circle(100, 100, 20, 0, 5);

fill("#5cd2e4");



triangle(600, 200, 500);*/


//circle(400, 400, 20, 0, 5);

