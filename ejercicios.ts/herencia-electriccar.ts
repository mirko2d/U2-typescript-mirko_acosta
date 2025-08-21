class CarPrivate {
  private make: string;

  constructor(make: string) {
    this.make = make;
  }

  getMake(): string {
    return this.make;
  }

  drive(): void {
    console.log(`Driving a ${this.make}`);
  }
}

class ElectricCar extends CarPrivate {
  batteryLife: number;

  constructor(make: string, batteryLife: number) {
    super(make);
    this.batteryLife = batteryLife;
  }

  charge(): void {
    console.log(`Charging the ${this.getMake()}... Battery life: ${this.batteryLife}%`);
  }
}

const tesla = new ElectricCar("Tesla", 90);
tesla.drive();
tesla.charge();
