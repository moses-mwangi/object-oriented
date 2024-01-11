"use strict";
const Person = function (firstName, birthYear) {
  console.log(this);
  this.firstName = firstName;
  this.birthYear = birthYear;
};
const moses = new Person("Moses", 2002);
const mwangi = new Person("john", 2004);
console.log(moses, mwangi);

//////////////////prototype
console.log(Person.prototype);
Person.prototype.calcage = function () {
  console.log(this.birthYear - 2024, this.firstName);
};
Person.prototype.species = "Homo sapien";
moses.calcage();
mwangi.calcage();

console.log(moses.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(moses));
console.log(moses.hasOwnProperty("name"));

console.log(moses.hasOwnProperty("firstName"));
console.log(moses.hasOwnProperty("name"));

console.log(moses.__proto__);

//////object prototype(top of prototype)
console.log(moses.__proto__.__proto__);
console.log(moses.__proto__.__proto__.__proto__);
console.dir(Person.prototype.constructor);

const arr = [3, 5, 6, 3, 2, 8, 7, 9, 7];
console.log(arr.__proto__);
console.log(arr.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};
console.log(arr.unique());

const h1 = document.querySelector("h1");
console.dir(h1);
