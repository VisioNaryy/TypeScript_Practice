var today = new Date();
today.getDate();
var Color = /** @class */ (function () {
    function Color() {
    }
    return Color;
}());
//NOTE: type annotation
var apples = 20;
var speed = 'fast';
var hasName = true;
var nothing = null;
//NOTE: objects, arrays, functions
var colors = ['red', 'green', 'blue'];
var myNumbers = [5, 2, 1];
//classes
var Car = /** @class */ (function () {
    function Car() {
    }
    Object.defineProperty(Car.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (v) {
            this._firstName = v;
        },
        enumerable: false,
        configurable: true
    });
    return Car;
}());
var car = new Car();
var carName = (car.firstName = 'Mitsubishi');
console.log(carName);
//object literals
var point = {
    x: 10,
    y: 20,
};
console.log(point.x);
//functions
function logNumber(i) {
    console.log(i);
}
// When to use type annotations
// 1) functions when returns 'any' type
var json = '{"x": 10, "y": 20}';
var coordinates = JSON.parse(json);
console.log(coordinates.x);
console.log(coordinates.y);
//2) When we declare a variable on one line
// and initialize it later
var words = ['red', 'green', 'blue'];
var isTrue;
for (var i = 0; i < words.length; i++) {
    var element = words[i];
    isTrue = true;
}
//3) Variables whose type cannot be inferred correctly
var numbers = [-10, -1, -12];
var numberAboveZero = false;
for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        numberAboveZero = numbers[i];
    }
}
console.log(numberAboveZero);
