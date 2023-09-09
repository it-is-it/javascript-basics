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


//Prototype
console.log(Person.prototype)

Person.prototype.calcAge = function(){
        console.log(2037-this.birthYear);
      }

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




*/


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

///////////////////////////////////////
//getters and setters
const walter = new PersonCl('Walter white', 1965)


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

