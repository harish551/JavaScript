/* this program contains all oops concepts
 * Class
 * constructor
 * inheritance  
 * encapsulation & abstraction
 */

'use strict'

class Vehicle {
  constructor(type,brand,licenceNum) {
    this.licenceNum = licenceNum;
    this.type = type;
    this.brand = brand;
  }
  start() {
    console.log('starting a ' + this.brand + ' ' + this.type);
  }
  getLicenceNum() {
    return this.licenceNum;
  }
}

class Bike extends Vehicle {         // inheritance
  constructor(brand,licenceNum){
    super("Bike",brand,licenceNum);
    console.log("constructing a bike");
  }

  break(){
    console.log("Bike stopped");
  }
  static getMilage(){
    return "45 kmpl";
  }

}
class Car extends Vehicle {
  constructor(brand,licenceNum) {
    super("Car",brand,licenceNum);
    console.log('costructing car');
  }

  break(){                           // overriding 
    console.log("car stopped");     
  }

}

let c = new Car('BMW', 'A1234'); // calling constructor
c.start(); //calling method

let b = new Bike("Harly Davidson",'B123');
b.start();
console.log(c.getLicenceNum());

b.break();

c.break();

console.log("Bile milage is:",Bike.getMilage());
