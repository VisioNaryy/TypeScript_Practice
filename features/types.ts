const today = new Date();
today.getDate();

class Color {}

//NOTE: type annotation
let apples: number = 20;

let speed: string = 'fast';

let hasName: boolean = true;

let nothing: null = null;

//NOTE: objects, arrays, functions
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [5, 2, 1];

//classes
class Car {
  private _firstName: string;
  public get firstName(): string {
    return this._firstName;
  }
  public set firstName(v: string) {
    this._firstName = v;
  }
}

let car: Car = new Car();
let carName = (car.firstName = 'Mitsubishi');
console.log(carName);

//object literals
let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};
console.log(point.x);

//functions

function logNumber(i: number): void {
  console.log(i);
}

// When to use type annotations
// 1) functions when returns 'any' type

let json: string = '{"x": 10, "y": 20}';
let coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates.x);
console.log(coordinates.y);

//2) When we declare a variable on one line
// and initialize it later

let words: string[] = ['red', 'green', 'blue'];
let isTrue: boolean;

for (let i = 0; i < words.length; i++) {
  const element = words[i];
  isTrue = true;
}

//3) Variables whose type cannot be inferred correctly
let numbers: number[] = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
console.log(numberAboveZero);
