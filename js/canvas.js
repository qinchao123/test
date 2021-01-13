/* 
    绘制网格
*/

var c = document.getElementById("chess");
var cxt = c.getContext('2d');
cxt.lineWidth = 1;

//循环绘制线条
for (var i = 50; i < 700; i += 50) {
    cols(i, 0, 700);
    rows(i, 0, 700)
}

//绘制横线封装
function cols(x, start, end) {
    cxt.beginPath();
    cxt.moveTo(x, start);
    cxt.lineTo(x, end);
    cxt.stroke();
    cxt.closePath();
}

// 绘制竖线封装
function rows(y, start, end) {
    cxt.beginPath();
    cxt.moveTo(start, y);
    cxt.lineTo(end, y);
    cxt.stroke();
    cxt.closePath();
}

function circle(x, y) {
    cxt.beginPath();
    cxt.arc(x * 50, y * 50, 20, 0, Math.PI * 2, false);
    cxt.stroke();
    cxt.closePath();
    cxt.fill();
    cxt.stroke();
}