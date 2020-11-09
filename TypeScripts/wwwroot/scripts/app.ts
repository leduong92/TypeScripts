interface SquareConfig {
    color?: string;
    width?: number;
}
function createSquare(config: SquareConfig): { color: string; area: number } {
    let newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width;
    }
    return newSquare;
}
let mySquare = createSquare({ color: "black" });
console.log(mySquare);


//function types
interface SearchFunc {
    (source: string, subString: string): boolean;
}

let mySearch : SearchFunc;

mySearch = function (src: string, sub: string) {
    let result = src.search(sub);
    return result > -1;
}

console.log(mySearch("hello", "o"));

//class types
interface ClockInterface {
    currentTime: Date
}

class Clock implements ClockInterface {
    currentTime: Date = new Date();
    constructor(h: number, m: number) {}
}


//anynomous function

let myAdd: (x: number, y: number) => number = function (x: number, y: number): number { return x + y;}


