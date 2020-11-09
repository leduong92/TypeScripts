let isDone: Boolean = false;

let decimal: number = 6;
let hex: number = 0xf00d;

let color: string = "blue";
color = "red";

function revert(s: String): String {
    return s.split("").reverse().join("");
}

console.log(revert("hello world"));

console.log(color);
console.log(hex);
console.log(decimal);
console.log(isDone);