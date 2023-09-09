'use strict';

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


