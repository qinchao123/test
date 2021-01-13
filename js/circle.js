function decide(x, y, arr) {
    // i 为一行/一列共有多少子
    for (var i = 0; i < 15; i++) {
        // 横向判断
        if (arr.includes(JSON.stringify([x, i])) &&
            arr.includes(JSON.stringify([x, i + 1])) &&
            arr.includes(JSON.stringify([x, i + 2])) &&
            arr.includes(JSON.stringify([x, i + 3])) &&
            arr.includes(JSON.stringify([x, i + 4]))) {
            flag ? alert('黑胜') : alert('白胜')
            c.onmousemove = null;
        }
        // 纵向判断
        if (arr.includes(JSON.stringify([i, y])) &&
            arr.includes(JSON.stringify([i + 1, y])) &&
            arr.includes(JSON.stringify([i + 2, y])) &&
            arr.includes(JSON.stringify([i + 3, y])) &&
            arr.includes(JSON.stringify([i + 4, y]))) {
            flag ? alert('黑胜') : alert('白胜')
            c.onmousemove = null;
        }
        // \向判断1
        if (x > y &&
            arr.includes(JSON.stringify([x - y + i, i])) &&
            arr.includes(JSON.stringify([x - y + i + 1, i + 1])) &&
            arr.includes(JSON.stringify([x - y + i + 2, i + 2])) &&
            arr.includes(JSON.stringify([x - y + i + 3, i + 3])) &&
            arr.includes(JSON.stringify([x - y + i + 4, i + 4]))) {
            flag ? alert('黑胜') : alert('白胜')
            c.onmousemove = null;
        }


        if (x + y <= 15 &&
            arr.includes(JSON.stringify([x + y - i, i])) &&
            arr.includes(JSON.stringify([x + y - i - 1, i + 1])) &&
            arr.includes(JSON.stringify([x + y - i - 2, i + 2])) &&
            arr.includes(JSON.stringify([x + y - i - 3, i + 3])) &&
            arr.includes(JSON.stringify([x + y - i - 4, i + 4]))) {
            flag ? alert('黑胜') : alert('白胜');
            c.onmousemove = null;

        }
        if (x + y > 15 &&
            arr.includes(JSON.stringify([14 - i, x + y - 14 + i])) &&
            arr.includes(JSON.stringify([14 - i - 1, x + y - 15 + i])) &&
            arr.includes(JSON.stringify([14 - i - 2, x + y - 16 + i])) &&
            arr.includes(JSON.stringify([14 - i - 3, x + y - 17 + i])) &&
            arr.includes(JSON.stringify([14 - i - 4, x + y - 18 + i]))) {
            flag ? alert('黑胜') : alert('白胜')
            c.onmousemove = null;
        }


        // \向判断2
        if (y > x &&
            arr.includes(JSON.stringify([i, y - x + i])) &&
            arr.includes(JSON.stringify([i + 1, y - x + i + 1])) &&
            arr.includes(JSON.stringify([i + 2, y - x + i + 2])) &&
            arr.includes(JSON.stringify([i + 3, y - x + i + 3])) &&
            arr.includes(JSON.stringify([i + 4, y - x + i + 4]))) {
            flag ? alert('黑胜') : alert('白胜')
            c.onmousemove = null;
        }


        // \/向判断
        if (x == y &&
            arr.includes(JSON.stringify([i, i])) &&
            arr.includes(JSON.stringify([i + 1, i + 1])) &&
            arr.includes(JSON.stringify([i + 2, i + 2])) &&
            arr.includes(JSON.stringify([i + 3, i + 3])) &&
            arr.includes(JSON.stringify([i + 4, i + 4]))) {
            flag ? alert('黑胜') : alert('白胜');
            c.onmousemove = null;
        }

    }
}