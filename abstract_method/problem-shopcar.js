// Concrete Classes
class Car {
  constructor() {
    this.type = 'Car';
    this.size = 'small';
  }
  
  getInfo() {
    return `This is a ${this.type} (${this.size} vehicle)`;
  }
}

class Truck {
  constructor() {
    this.type = 'Truck';
    this.size = 'large';
  }
  
  getInfo() {
    return `This is a ${this.type} (${this.size} vehicle)`;
  }
}

class Motocycle {
  constructor() {
    this.type = 'Motorcycle';
    this.size = 'small';
  }
  
  getInfo() {
    return `This is a ${this.type} (${this.size} vehicle)`;
  }
}

class Bus {
  constructor() {
    this.type = 'Bus';
    this.size = 'large';
  }
  
  getInfo() {
    return `This is a ${this.type} (${this.size} vehicle)`;
  }
}

// Abstract Factory
class VehicleFactory {
  createSmallVehicle() {
    throw new Error('createSmallVehicle method must be implemented');
  }
  
  createLargeVehicle() {
    throw new Error('createLargeVehicle method must be implemented');
  }
}

// Concrete Factories
class CarFactory extends VehicleFactory {
  createSmallVehicle() {
    return new Car();
  }
  
  createLargeVehicle() {
    return new Bus(); // Cars factory creates buses as large vehicles
  }
}

class TruckFactory extends VehicleFactory {
  createSmallVehicle() {
    return new Motocycle(); // Truck factory creates motorcycles as small vehicles
  }
  
  createLargeVehicle() {
    return new Truck();
  }
}

// Client Code
const factories = {
  car: new CarFactory(),
  truck: new TruckFactory(),
}

class TransportApp {
  constructor(factory) {
    this.smallVehicle = factory.createSmallVehicle();
    this.largeVehicle = factory.createLargeVehicle();
  }
  
  showVehicles() {
    console.log('Small vehicle:', this.smallVehicle.getInfo());
    console.log('Large vehicle:', this.largeVehicle.getInfo());
  }
}

// Usage
function main() {
  console.log('=== Abstract Factory Pattern Demo ===\n');
  
  // Using Car Factory
  console.log('Using Car Factory:');
  const carApp = new TransportApp(factories.car);
  carApp.showVehicles();
  
  console.log('\nUsing Truck Factory:');
  const truckApp = new TransportApp(factories.truck);
  truckApp.showVehicles();
  
  console.log('\n=== End Demo ===');
}

// Run the demo
main();