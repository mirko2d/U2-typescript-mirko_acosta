class Car { 
  make: string = "";

  drive(): void { 
    console.log(`Driving a ${this.make}`);
  }
}

const car = new Car(); 
car.make = "Chevrolet";
car.drive(); 
