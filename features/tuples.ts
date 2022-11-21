// assign an object with some props
let drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};

// do the same with tuples and annotation
let pepsi: [string, boolean, number] = ['brown', true, 40];

//after that we can't shuffle an order of elements types inside tuple, which makes them different from arrays
pepsi[0] = 40;
// and we can assign a new type to shorten the tuple assignment annotation
type Drink = [string, boolean, number];

let sprite: Drink = ['clear', true, 40];
let tea: Drink = ['brown', false, 0];

//NOTE: tuples can be useful in working with .csv files

let carSpecs: [number, number] = [400, 3354];

let catStats = {
  horsepower: 400,
  weight: 3354,
};
