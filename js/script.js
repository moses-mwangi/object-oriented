"use strict";
/*const Person = function (firstName, birthYear) {
  console.log(this);
  this.firstName = firstName;
  this.birthYear = birthYear;
};
const moses = new Person("Moses", 2002);
const mwangi = new Person("john", 2004);
console.log(moses, mwangi);

Person.hey = function () {
  console.log("hey");
  console.log(this);
};
Person.hey();
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
console.dir(h1);*/

//////////// ES6 //////////////////////
/*
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  calcage() {
    console.log(2024 - this.birthYear);
  }
  get age() {
    return 2023 - this.birthYear;
  }
  set fullName(name) {
    if (name.includes(" ")) this._fullName = name;
    else alert("not a full name");
  }
  get fullName() {
    return this._fullName;
  }

  static hey = function () {
    console.log("hey");
    console.dir(this);
  };
}

const moses = new PersonCl("moses mwangi", 2002);

console.log(moses);
moses.calcage();

console.log(moses.age);
PersonCl.hey();*/
////////////////////////////set & get /////////////////
/*
const accounts = {
  owner: "moses",
  movements: [200, 154, 254, 300, 750, 867],
  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    return this.movements.push(mov);
  },
};
console.log(accounts.latest);
console.log(accounts);
accounts.latest = 50;
console.log(accounts.movements);
*/

//////////////////////////// object creat /////////////////////////////
/*
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const moses = Object.create(personProto);
moses.name = "moses";
moses.birthYear = 2002;
moses.age();
console.log(moses);
*/
/*
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
  this.firstDay = "monday";
};
Person.prototype.calcage = function () {
  console.log(2026 - this.birthYear);
};

const Student = function (firstName, birthYear) {
  Person.call(this, firstName, birthYear);
};

Student.prototype = Object.create(Person.prototype);

Student.prototype.job = function () {
  console.log(this.firstName, this.birthYear);
};
const mwangi = new Student("kamau", 2002);
mwangi.job();
mwangi.calcage();
console.log(mwangi);

Student.prototype.constructor = Student;*/

//////////////////////class inheritance with a constructor function////////////////////
/*const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

const Ev = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

Ev.prototype = Object.create(Car.prototype);

Ev.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

Ev.prototype.accelerate = function () {
  this.speed += 20;
  this.charge -= 1;
  console.log(
    `${this.make} going at a speed of ${this.speed} with a charge of ${this.charge}`
  );
};

const moses = new Ev("Tesla", 120, 23);
console.log(moses);
moses.chargeBattery(90);
Ev.prototype.constructor = Ev;
*/

//////////////////////class inheritance with a ES6 ////////////////////
/*
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Instance methods
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  set fullName(name) {
    if (name.includes(" ")) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static method
  static hey() {
    console.log("Hey there 👋");
  }
}

class studentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    super(fullName, birthYear);
    this.course = course;
  }

  job() {
    console.log(`my name is ${this.fullName} and im a ${this.course}`);
  }
}
const martha = new studentCl("Martha mwangi", 2006, "computer science");
console.log(martha);*/

////////////////////// class inheritance with a object.create //////////////
/*
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steve = Object.create(PersonProto);
const studentProto = Object.create(PersonProto);

studentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};
studentProto.introduce = function () {
  console.log(2004 - this.birthYear);
};
const jay = Object.create(studentProto);
jay.init("moses", 2002, "computer");

jay.introduce();
jay.calcAge();*/

class Accounts {
  //public
  locale = navigator.language;
  //private
  #movement = [];
  #pin;
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.currency = currency;
    this.#pin = pin;
    // this.locale = navigator.language;
    //protected
    // this._movement = [];
  }

  //////// public interface ///////
  getMovement() {
    return this.#movement;
  }

  deposit(val) {
    this.#movement.push(val);
    return this;
  }
  withdrawal(val) {
    this.deposit(-val);
    return this;
  }
  _loanAproval(val) {
    return true;
    return this;
  }
  requestLoan(val) {
    if (this._loanAproval(val)) {
      this.deposit(val);
      console.log("LOAN APPROVAL");
      return this;
    }
  }
}

const moses = new Accounts("moses", "EUR", 1111);

// moses.movement.push(123, 900);
moses.deposit(540);
moses.withdrawal(600);
moses.requestLoan(1000);
console.log(moses);
// console.log(moses.#movement);
// console.log(moses.#pin);
moses.deposit(1000).withdrawal(300).deposit(567).deposit(650).requestLoan(150);
console.log(moses);
