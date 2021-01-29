class Vehicle {
  drive(): void {
    console.log('Chuga chuga');
  }

  honk(): void {
    console.log('beep!');
  }
}

const vehicle = new Vehicle();
vehicle.drive();
vehicle.honk();
