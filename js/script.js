"use strict";
const Person = function (firstName, birthYear) {
  console.log(this);
  this.firstName = firstName;
  this.birthYear = birthYear;
};
const moses = new Person("Moses", 2002);
const mwangi = new Person("Moses", 2004);
console.log(moses);

//////////////////prototype
console.log(Person.prototype);
Person.prototype.calcage = function () {
  console.log(this.birthYear - 2024, this.firstName);
};
moses.calcage();
mwangi.calcage();
