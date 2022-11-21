class ArrayOfNumbers {
  constructor(public collection: number[]) {}

  get(index: number): number {
    return this.collection[index];
  }
}

class ArrayOfStrings {
  constructor(public collection: string[]) {}

  get(index: number): string {
    return this.collection[index];
  }
}

class ArrayOfGenerics<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index];
  }
}

let array = new ArrayOfGenerics<number>([1, 2, 3]);

// NOTE: type-inference with generics

// NOTE: generics around functions

function printStrings(arr: string[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function printNumbers(arr: number[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function printAnything<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

printAnything<string>(['one', 'two', 'three']);

// NOTE: generic constraints

class Test implements Printable {
  print(): void {
    console.log('I am Test class');
  }
}
class AnotherTest implements Printable {
  print(): void {
    console.log('I am AnotherTest class');
  }
}

interface Printable {
  print(): void;
}

function printClasses<T extends Printable>(arr: T[]) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

printClasses<Test>([new Test(), new Test()]);
