let carMakers: string[] = ['Honda', 'Toyota', 'Chevrolet'];

let emptyArray: string[] = [];

let dates = [new Date(), new Date()];

// 2-dimensional array
let carsByMake: string[][] = [['f150'], ['corolla'], ['camaro']];

// Help with inference when extracting values
let someCar = carMakers[0];

//prevent incomparable values
carMakers.push(100);

// Help with 'map'
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// Flexible types
let importantDates: (Date | string)[] = [];
importantDates.push('2020-10-10');
importantDates.push(new Date());
