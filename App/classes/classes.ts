class Vehicle {
  // color: string = 'red';
  color: string;

  constructor(color: string) {
    this.color = color;
  }

  protected honk(): void {
    console.log('beep!');
  }
}

const vehicle = new Vehicle('orange');
console.log(vehicle.color);

class Car extends Vehicle {
  private drive(): void {
    console.log('Broom');
  }

  startDriving(): void {
    this.drive();
    this.honk();
  }
}

// const car = new Car();
// car.startDriving();
