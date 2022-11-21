"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Option = void 0;
var NumbersCollection_1 = require("./NumbersCollection");
var CharactersCollection_1 = require("./CharactersCollection");
// let numbersCollection = new NumbersCollection([10, 3, -5, 0]);
// let sorter = new Sorter(numbersCollection);
// sorter.sort();
// console.log(numbersCollection.data);
//NOTE: after implementation of Sort class in each child-class, we can invoke sort() methods in them
var numbersCollection = new NumbersCollection_1.NumbersCollection([10, 3, -5, 0]);
numbersCollection.sort();
console.log(numbersCollection.data);
// let charactersCollection = new CharactersCollection('some string');
// let charactersSorter = new Sorter(charactersCollection);
// charactersSorter.sort();
// console.log(charactersCollection.data);
var charactersCollection = new CharactersCollection_1.CharactersCollection('some string');
charactersCollection.sort();
console.log(charactersCollection.data);
//BUG:
var Option = /** @class */ (function () {
    function Option(name, value) {
        this.name = name;
        this.value = value;
    }
    return Option;
}());
exports.Option = Option;
var segmentOptionCity = null;
console.log(123);
console.log(null == (segmentOptionCity === null || segmentOptionCity === void 0 ? void 0 : segmentOptionCity.value));
console.log(new Date(2037, 10, 19, 15, 23, 5));
