function createSquare(config) {
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
let mySearch;
mySearch = function (src, sub) {
    let result = src.search(sub);
    return result > -1;
};
console.log(mySearch("hello", "o"));
class Clock {
    constructor(h, m) {
        this.currentTime = new Date();
    }
}
//# sourceMappingURL=app.js.map