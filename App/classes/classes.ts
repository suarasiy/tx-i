class Vehicle {
  // color: string = 'red';

  constructor(public color: string) {
    this.color = color;
  }

  protected honk(): void {
    console.log('beep!');
  }

  getColor(): void {
    console.log(this.color);
  }
}

// const vehicle = new Vehicle('orange');
// console.log(vehicle.color);

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }

  private drive(): void {
    console.log('Broom');
  }

  startDriving(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car(4, 'Red');
car.startDriving();
car.getColor();
