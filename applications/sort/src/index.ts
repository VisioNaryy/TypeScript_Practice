import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';

// let numbersCollection = new NumbersCollection([10, 3, -5, 0]);
// let sorter = new Sorter(numbersCollection);
// sorter.sort();
// console.log(numbersCollection.data);

//NOTE: after implementation of Sort class in each child-class, we can invoke sort() methods in them
let numbersCollection = new NumbersCollection([10, 3, -5, 0]);
numbersCollection.sort();
console.log(numbersCollection.data);

// let charactersCollection = new CharactersCollection('some string');
// let charactersSorter = new Sorter(charactersCollection);
// charactersSorter.sort();
// console.log(charactersCollection.data);

let charactersCollection = new CharactersCollection('some string');
charactersCollection.sort();
console.log(charactersCollection.data);

//BUG:
export class Option {
  name: string;
  value: string | number;

  constructor(name: string, value: string | number) {
    this.name = name;
    this.value = value;
  }
}

let segmentOptionCity: Option = null;
console.log(123);
console.log(null == segmentOptionCity?.value);

console.log(new Date(2037, 10, 19, 15, 23, 5));
