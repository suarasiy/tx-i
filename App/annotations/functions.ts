// No type inference for arguments!
const add = (a: number, b: number): number => {
  return a + b;
};

// Type inference works out output, but we won't use it!
// If you hover it, popup message will say that function return void
const substract = (a: number, b: number) => {
  a - b;
};
