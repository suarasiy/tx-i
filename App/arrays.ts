// Arrays
const carMakers = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

const carsBySuara: string[][] = [];

// help with inference when extracting values
const mobil = carMakers[0];
const myCar = carMakers.pop();

// prevent incompatible values
// carMakers.push(200);

// help with `map`
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// flexible types
const importantDates: (Date | string)[] = [new Date()];
importantDates.push('2021-01-29');
importantDates.push(new Date());
