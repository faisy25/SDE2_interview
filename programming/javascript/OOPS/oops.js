// OOPS in JS

// Classes: Templates for creating objects. They encapsulate data and methods that operate on that data.

class Vehicle {
  constructor(brand, model, year) {
    this.brand = brand; // Property
    this.model = model; // Property
    this.year = year; // Property
  }

  getDetails() {
    // Method
    return `${this.brand} ${this.model}, ${this.year}`;
  }

  start() {
    // Method
    console.log(`${this.brand} ${this.model} is starting...`);
  }
}

// Objects: Instances of classes, representing specific entities.

const myCar = new Vehicle("Toyota", "Camry", 2021);
console.log(myCar.getDetails()); // Toyota Camry, 2021
myCar.start(); // Toyota Camry is starting...

// Inheritance: Mechanism where one class (child) inherits properties and methods from another class (parent).

class Car extends Vehicle {
  constructor(brand, model, year, fuelType) {
    super(brand, model, year); // Call the parent class constructor
    this.fuelType = fuelType; // Additional property
  }

  getDetails() {
    // Override the parent method
    return `${super.getDetails()}, Fuel Type: ${this.fuelType}`;
  }
}

class ElectricCar extends Car {
  constructor(brand, model, year, batteryCapacity) {
    super(brand, model, year, "Electric"); // Call the Car constructor
    this.batteryCapacity = batteryCapacity; // Additional property
  }

  getDetails() {
    // Override the Car method
    return `${super.getDetails()}, Battery Capacity: ${
      this.batteryCapacity
    } kWh`;
  }

  start() {
    // Override the Vehicle method
    console.log(`${this.brand} ${this.model} is starting silently...`);
  }
}

const myElectricCar = new ElectricCar("Tesla", "Model S", 2022, 100);
console.log(myElectricCar.getDetails()); // Tesla Model S, 2022, Fuel Type:Electric, Battery Capacity: 100 kWh
myElectricCar.start(); // Tesla Model S is starting silently...

// Encapsulation: Bundling of data and methods that operate on the data within one unit (class), restricting direct access to some components.

class CarWithVIN extends Vehicle {
  #vin; // Private field
  constructor(brand, model, year, vin) {
    super(brand, model, year);
    this.#vin = vin;
  }

  getVin() {
    // Public method to access private field
    return this.#vin;
  }
}

const myCarWithVIN = new CarWithVIN(
  "Ford",
  "Mustang",
  2021,
  "1FATP8FF7J5140929"
);
console.log(myCarWithVIN.getVin()); // 1FATP8FF7J5140929

// Polymorphism: Ability to call the same method on different objects and have each of them respond in their own way.

const vehicles = [
  new Vehicle("Honda", "Civic", 2020),
  new Car("BMW", "X5", 2019, "Diesel"),
  new ElectricCar("Nissan", "Leaf", 2021, 40)
];

vehicles.forEach((vehicle) => {
  vehicle.start(); // Different start behavior based on the actual object type
});
// Honda Civic is starting...
// BMW X5 is starting...
// Nissan Leaf is starting silently...

// Abstraction: Hiding complex implementation details and showing only the necessary features of an object.

class CarWithIgnition extends Vehicle {
  start() {
    this.#igniteFuel(); // Private method call
  }

  #igniteFuel() {
    // Private method
    console.log("Engine ignited");
  }
}

const myCarWithIgnition = new CarWithIgnition("Chevrolet", "Impala", 2021);
myCarWithIgnition.start(); // Engine ignited
