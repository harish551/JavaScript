'use strict'
class AgeRestrictionError extends Error {
  constructor(msg) {
    super(msg);
    this.name = "AgeRestrictionError";
    this.message = msg;
  }
}

try {
  let age = 16;
  if (age < 18) {
    throw new AgeRestrictionError("You are too young");
  } else {
    console.log("Welcome");
  }
} catch (err) {

  console.log(err.name + ":" + err.message);

} finally {
  console.log("finally");
}