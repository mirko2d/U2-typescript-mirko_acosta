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

const carPrivate = new CarPrivate("Ford"); 
carPrivate.drive(); 
console.log("Marca:", carPrivate.getMake());
