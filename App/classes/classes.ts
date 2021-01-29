class Vehicle {
  drive(): void {
    console.log('Chuga chuga');
  }

  honk(): void {
    console.log('beep!');
  }
}

class Car extends Vehicle {
  drive(): void {
    console.log('Broom');
  }
}

const car = new Car();
car.drive();
car.honk();
