'use strict'

class Drone {
  constructor(id) {
    this.id = id;
    console.log('id' + ' ' + id);
  }
  fly() {
    console.log("drone: " + this.id + " is flying");
  }
  static getName() {
    console.log("get name " + this.id);
  }
}

let drone = new Drone("A123");
drone.fly();
Drone.getName();