const drink = {
  color: 'green',
  carbonated: true,
  sugar: 40,
};

type Drink = [string, boolean, number];

const pepsi: Drink = ['green', true, 40];
const sprite: Drink = ['green', true, 20];
const tea: Drink = ['crimson', false, 5];

// in general regullary not used often in TypeScript except some
// special condition in action (like csv)

// what does this mean?
const carSpecs: [number, number] = [400, 3354];

// instead need more information and labeling keys
// it more understandable model
const carStats = {
  horsepower: 400,
  weight: 3354,
};
