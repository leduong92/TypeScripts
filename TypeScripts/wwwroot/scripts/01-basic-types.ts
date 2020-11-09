let isDone: Boolean = false;

let decimal: number = 6;
let hex: number = 0xf00d;

let color: string = "blue";
color = "red";

function revert(s: String): String {
    return s.split("").reverse().join("");
}

var a = 10;
var b = 20;

if (a < b) {
    let tmp = a;
    a = b;
    b = tmp;
    //console.log(tmp);
}


//console.log(a);
//console.log(b);


//console.log(revert("hello world"));

//console.log(color);
//console.log(hex);
//console.log(decimal);
//console.log(isDone);