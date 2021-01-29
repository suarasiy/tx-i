// No type inference for arguments!
const add = (a: number, b: number): number => {
  return a + b;
};

// Type inference works out output, but we won't use it!
// If you hover it, popup message will say that function return void
const substract = (a: number, b: number) => {
  a - b;
};

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number) {
  return a * b;
};

const logger = (message: string): void => {
  console.log(message);
};

// Only annotate a function with the type `never`
// when we really never expect a function return anything ever
// const throwError = (message: string): never => {
//   throw new Error(message);
// }

// but possibly return something, instead using void
const throwError = (message: string): void => {
  if (!message) {
    throw new Error(message);
  }
};

const todaysWeather = {
  date: new Date(),
  weather: 'Sunny',
};

// Destructuring with annotations always separate with two separated statements
// ({ date, weather }) -> destructuring
// { date: Date, weather: string } -> actual annotations
const logWeather = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};

logWeather(todaysWeather);
