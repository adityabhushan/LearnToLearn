var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var PI = 3.14;
var flag= false;


function rectangle(x, y, w, h) {

    ctx.beginPath();
    ctx.rect(x, y, w, h);
    ctx.closePath();
    ctx.stroke();
    if(flag)
        ctx.fill();
    else
        no_fill();

}

function circle(x, y, r, sAngle, eAngle) {

    ctx.beginPath();
    ctx.arc(x, y, r, sAngle * PI, eAngle * PI);
    ctx.closePath();
    ctx.stroke();
    if(flag)
        ctx.fill();
    else
        no_fill();
}

function triangle(x, y) {

    ctx.beginPath();
    ctx.moveTo(x, x);
    ctx.lineTo(x, y);
    ctx.lineTo(y, y);
    ctx.closePath();
    ctx.stroke();
    if(flag)
        ctx.fill();
    else
        no_fill();
}

function line(x, y, z) {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(z, y);
    ctx.closePath();
    ctx.stroke();
}

function ellipse(x, y, radiusX, radiusY, rotation, sAngle, eAngle) {
    ctx.beginPath();
    ctx.ellipse(x, y, radiusX, radiusY, rotation * (PI / 180), sAngle * PI, eAngle * PI);
    ctx.closePath();
    ctx.stroke();
    if(flag)
        ctx.fill();
    else
        no_fill();
}

function pie(x, y, a, b, c) {

    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.arc(x, y, a, b, c * PI);
    ctx.lineTo(x, y);
    ctx.closePath();
    ctx.stroke();
    if(flag)
        ctx.fill();
    else
        no_fill();
}

function pixel(x, y, color) {

    ctx.fillRect(x, y, 1, 1);
    ctx.strokeStyle = color;
    ctx.stroke();
    ctx.strokeStyle = 'black';
}

function text(str, x, y) {
    ctx.font = "30px Arial";
    ctx.fillText(str, x, y);
}


function fill(str) {
    flag = true;
    ctx.fillStyle = str;
}

function no_fill() {
    ctx.fillStyle = 'white';
}