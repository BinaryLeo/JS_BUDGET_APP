//Select chart element
const chart = document.querySelector(".chart");
//create canvas element
const canvas = document.createElement("canvas");
canvas.width= 50;
canvas.height = 50;

//Append canvas to chart element
chart.appendChild(canvas);
//To draw on canvas we need to get context of canvas
const ctx = canvas.getContext("2d");
//change the line width
ctx.lineWidth = 8;
//Circle radius
const R = 20;
function drawCircle(color,ratio , anticlockwise){
    ctx.strokeStyle =color;
    ctx.beginPath();
    ctx.arc(canvas.width/2, canvas.height/2, R, 0, ratio * 2 * Math.PI, anticlockwise);
    ctx.stroke();
}
function updateChart(income, outcome){
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    let ratio = income / (income+outcome);

    drawCircle("#FFFFFF", - ratio, true);
    drawCircle("#FFCA28", 1 - ratio, false);
}