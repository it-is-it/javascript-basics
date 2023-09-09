'use strict';

/*

//oop in javascript

const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  //never do this
  //this.calcAge = function(){
  //     console.log(2037-this.birthYear);
  //   }
};

const thomas = new Person('Thomas', 1991);
console.log(thomas);

//1. New () is created
// 2. function is called, this=()
// 3. () linked to prototype
// 4. funciton automatically return {}

const monika = new Person('Monika', 1835);
const john = new Person('John', 1953);
console.log(monika, john);

console.log(thomas instanceof Person);

Person.hey = function () {
  console.log('Hey there ✋');
  console.log(this);
};

Person.hey();

//Prototype
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

thomas.calcAge();
monika.calcAge();

console.log(thomas.__proto__);
console.log(thomas.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(thomas));
console.log(Person.prototype.isPrototypeOf(monika));
console.log(Person.prototype.isPrototypeOf(john));

Person.prototype.species = 'Homo Sapiens';
console.log(thomas.species, monika.species);

console.log(thomas.hasOwnProperty('firstName'));
console.log(thomas.hasOwnProperty('species'));

console.log(thomas.__proto__);
// object.prototype (top of prototype chain)
console.log(thomas.__proto__.__proto__);
console.log(thomas.__proto__.__proto__.__proto__);
console.log(Person.prototype.constructor);

const arr = [3, 6, 6, 5, 6, 9, 3, 9]; //new array === []
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(x => x + 1);

///////////////////////////////////////
// Coding Challenge #1

/*

1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀


const car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} car run at ${this.speed} km/h`);
};
car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} car run at ${this.speed} km/h`);
};

const bmw = new car('BMW', 120);
const mercedes = new car('Mercedes', 95);
console.log(bmw, mercedes);

bmw.accelerate();
bmw.accelerate();
bmw.brake();
bmw.accelerate();





///////////////////////////////////////
// ES6 classes

// class expression
// class PersonCl = class{}

// class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`hey ${this.fullName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  //set a property that already exists
  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name`);
  }

  get fullName() {
    return this._fullName;
  }

  static hey() {
    console.log('Hey there ✋');
    console.log(this);
  }
}

const jess = new PersonCl('jess davis', 1996);
console.log(jess);
jess.calcAge();
console.log(jess.age);

console.log(jess.__proto__ == PersonCl.prototype);

// PersonCl.prototype.greet = function(){
//   console.log(`hey ${this.firstName}`);
// }
jess.greet();

// 1. classes are NOT hoisted
// 2. classes are first-class citizes
// 3. classes are executed in strict mode

const walter = new PersonCl('Walter white', 1965);

PersonCl.hey();

///////////////////////////////////////
//getters and setters

const account = {
  owner: 'thomas',
  movements: [200, 300, 530, 120],
  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);

account.latest = 50;
console.log(account.movements);




const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
  init(firstName, birthYear){
    this.firstName = firstName;
    this.birthYear = birthYear;
  }


}

const steven = Object.create(PersonProto)
console.log(steven);
steven.name = 'steven';
steven.birthYear = 2002;
steven.calcAge()

console.log(steven.__proto__ === PersonProto)

const sarah = Object.create(PersonProto)
sarah.init('Sarah', 1979)
sarah.calcAge()

*/

///////////////////////////////////////
// Coding Challenge #2

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀
*/

/*
class carCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} car run at ${this.speed} km/h`);
  }
  brake() {
    this.speed -= 5;
    console.log(`${this.make} car run at ${this.speed} km/h`);
  }
  get speedUs() {
    return this.speed/1.6
  }
  set speedUs(speed) {
     this.speed= speed * 1.6
  }
}

const ford = new carCl('Ford', 120);
console.log(ford.speedUs);
ford.accelerate();
ford.accelerate();
ford.brake();
ford.speedUs= 50;
console.log(ford);

*/

/*
////////////////////////////////////////
//Inheritence between "classes": constructor functions

const Person = function(firstName,birthYear){
  this.firstName = firstName;
  this.birthYear = birthYear;
}

Person.prototype.calcAge = function(){
  console.log(2037 - this.birthYear);
}

const Student = function(firstName, birthYear, course){
  Person.call(this, firstName, birthYear);
  this.course = course;
}

Student.prototype = Object.create(Person.prototype)

Student.prototype.introduce = function(){
  console.log(`My name is ${this.firstName} and i study ${this.course}`);
}

const mike = new Student('Mike', 2020, 'Computer Science');
mike.introduce();
mike.calcAge()

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof Person);
console.log(mike instanceof Object);

Student.prototype.constructor = Student
console.dir(Student.prototype.constructor);


*/

///////////////////////////////////////
// Coding Challenge #3

/* 
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definiton of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/

/*
const Car = function (make, speed) {
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
const EV = function(make, speed, charge){
  Car.call(this, make, speed);
  this.charge = charge;
}

EV.prototype = Object.create(Car.prototype)
EV.prototype.ChargeBattery = function(chargeTo){
  this.charge = chargeTo;
}

EV.prototype.accelerate = function(){
  this.speed += 20;
  this.charge--;
  console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%';`);
}


const tesla = new EV('Tesla', 120 , 23);
tesla.ChargeBattery(90);
console.log(tesla);
tesla.brake();
tesla.accelerate();

*/

/*
///////////////////////////////////////
// Inheritance Between "Classes": ES6 Classes

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
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static method
  static hey() {
    console.log('Hey there 👋');
  }
}

class StudentCl extends PersonCl{
  constructor(fullName, birthYear, course){
    // Always need to happen first
    super(fullName, birthYear)
    this.course = course
  }
  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }
  calcAge() {
    console.log(` I'm ${2037 - this.birthYear} years old but i feel more like ${2047 - this.birthYear} right now.`);
  }
}


// const martha = new StudentCl('Martha Jones', 2012)
const martha = new StudentCl('Martha Jones', 2012,'Computer Science')
martha.introduce();
martha.calcAge();


*/

/*


///////////////////////////////////////
// Inheritance Between "Classes": Object.create

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto)
StudentProto.init = function(firstName, birthYear, course){
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
}



const jay = Object.create(StudentProto)
jay.init('Jay',2010, 'Computer Science')
jay.introduce();
jay.calcAge();


*/

// public fields
// private fields
// public methods
// private methods
// static methods

class Account {
  // public fields (instances)
  locale = navigator.language;

  // private fields
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    //Protected property

    this.#pin = pin;
    // this._movements = []
    // this.locale = navigator.language

    console.log(`Thanks for opening an account ${owner}`);
  }

  //public methods

  // Public interface
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
  }

  withdraw(val) {
    this.deposit(-val);
  }

  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
    }
  }

  static helper(){
    console.log('Helper');
  }
  // private methods
  // #approveLoan(val) {
  _approveLoan(val) {
  return true;
  }

}

const acc1 = new Account('Jonas', 'EUR', 1111);

// acc1._movements.push(250)
// acc1._movements.push(-140)
acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
acc1._approveLoan(1000);
console.log(acc1.getMovements());

console.log(acc1);

// console.log(acc1.#pin);
// console.log(acc1.#movements);

Account.helper()