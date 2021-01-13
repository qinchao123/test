/* 
    绘制网格
*/

var c = document.getElementById("chess");
var cxt = c.getContext('2d');
cxt.lineWidth = 1;
for (var i = 50; i < 700; i += 50) {
    cols(i, 0, 700);
    rows(i, 0, 700)
}


function cols(x, start, end) {
    cxt.beginPath();
    cxt.moveTo(x, start);
    cxt.lineTo(x, end);
    cxt.stroke();
    cxt.closePath();
}

function rows(y, start, end) {
    cxt.beginPath();
    cxt.moveTo(start, y);
    cxt.lineTo(end, y);
    cxt.stroke();
    cxt.closePath();
}