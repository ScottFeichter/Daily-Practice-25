// "use strict"
//
// // Put your OO Vehicle code in here!
// class Vehicle {
//
//   constructor(make, model, year) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
//   }
//
//   /** honks horn */
//   honk() {
//     return "Beep";
//   }
//
//   /** returns string of vehicle constructor info */
//   toString() {
//     return `The vehicle is a ${this.make} ${this.model} from ${this.year}.`;
//   }
//
// }
//
// let myFirstVehicle = new Vehicle("Honda", "Monster Truck", 1999);
// console.log("myFirstVehicle: ", myFirstVehicle);
// console.log(myFirstVehicle.honk());
// console.log((myFirstVehicle.toString()));
//
//
// class Car extends Vehicle {
//   constructor(make, model, year) {
//     super(make, model, year);
//   }
//   numWheels = 4;
//
// }
//
// let myFirstCar = new Car("Toyota", "Corolla", 2005);
// console.log("myFirstCar: ", myFirstCar);
// console.log(myFirstCar.toString());
// console.log(myFirstCar.honk());
// console.log(myFirstCar.numWheels);
//
//
// class Motorcycle extends Vehicle {
//
//   constructor(make, model, year) {
//     super(make, model, year);
//   }
//
//   numWheels = 2;
//   revEngine() {
//     return "VROOM!!!";
//   }
// }
//
// let myFirstMotorcycle = new Motorcycle("Honda", "Nighthawk", 2000);
// console.log("myFirstMotorcycle: ", myFirstMotorcycle);
// console.log(myFirstMotorcycle.toString());
// console.log(myFirstMotorcycle.revEngine());
// console.log(myFirstMotorcycle.numWheels);
//
// class Garage {
//
//   constructor(capacity) {
//     this.capacity = capacity;
//   }
//
//   vehicles = [];
//
//   /** checks if it is Vehicle and if space in garage if so then pushes to garage */
//   add(vehicle) {
//     if (!vehicle instanceof Vehicle) {
//       throw new Error("Only vehicles are allowed in here!");
//     }
//     if (this.vehicles.length === this.capacity) {
//       throw new Error("Sorry, we're full.");
//     }
//     this.vehicles.push(vehicle);
//     console.log("Vehicle added!");
//   }
// }
//
// let garage = new Garage(2);
// console.log("garage: ", garage);
// console.log("garage.vehicles: ", garage.vehicles);
// garage.add(new Car("Hyundai", "Elantra", 2015));
// console.log("garage.vehicles: ", garage.vehicles);
// garage.add(new Motorcycle("Honda", "Nighthawk", 2000));
// console.log("garage.vehicles: ", garage.vehicles);
// garage.add(new Motorcycle("Honda", "Nighthawk", 2001));


let myArr = [1, 2, 3,4,5,6];
let x = -1;

// for (let i = 0; i < myArr.length; i++) {
//   if (x < myArr[i]) {
//     myArr.splice(i, 0, x);
//   }
// }

myArr.splice(0, 0, x);

console.log(myArr);
