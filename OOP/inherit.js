'use strict'

class Vehicle {
	constructor(licenceNum) {
		this.licenceNum = licenceNum;
	}
}

class Drone extends Vehicle {

}
class Car extends Vehicle {
	constructor(licenceNum) {
		super(licenceNum);
		console.log('costructing car');
	}

}

let c = new Car("A123");
console.log(c.licenceNum);