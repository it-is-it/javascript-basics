/*

let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log('jonas');
console.log(23);

let firstName = 'jonas';
console.log(firstName);
console.log(firstName);
console.log(firstName);

// variable name conventions
let years = 3;
let jonas_matilda = 'jm';
let $function = 27;
let name = 'jonas';

let Person = 'jonas';
let PI = 3.1415;

let myFirstJob = 'coder';
let myCurrentjob = 'teacher';

let job1 = 'programmer';
let job2 = 'teacher';

console.log(myFirstJob);


// datatypes
true; //boolean value
let JavascriptIsfun = true;
console.log(JavascriptIsfun);

console.log(typeof true);
console.log(typeof JavascriptIsfun);
console.log(typeof 23);
console.log(typeof 'jonas');

JavascriptIsfun = 'YES!';
console.log(typeof JavascriptIsfun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);


let age = 30;
age = 31;

const birthyear = 2002;
// birthyear = 2001;

// const job;

var job = 'Programmer';
job = 'teacher';

lastname = 'shelby';
console.log(lastname);

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 1991;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2**3 means 2 to the power of 3 =2*2*2

const firstName = 'thomas';
const lastname = 'shelby';
console.log(firstName + ' ' + lastname);

// Assignment operators
let x = 10 + 5; //15
x += 10; //x=x+10 =25
x *= 4; //x= x * 4 = 100
x++;
x--;
x--;
console.log(x);

// Comparision operators
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isfullage = ageSarah >= 18;

console.log(now - 1991 > now - 2018);


const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 1991;

console.log(25 - 10 - 1);

let x, y;
x = y = 25 - 10 - 5; //x=y=10, x=10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah);


// coding challenges #1
const markHeight = 1.69;
const johnHeight = 1.95;
const markWeight = 78;
const johnWeight = 92;
const markBMI = markWeight / markHeight ** 2;
const johnBMI = johnWeight / (johnHeight * johnHeight);
const markHeigherBMI = markBMI > johnBMI;
console.log(markBMI, johnBMI, markHeigherBMI);


const markHeight = 1.88;
const johnHeight = 1.76;
const markWeight = 95;
const johnWeight = 85;
const markBMI = markWeight / markHeight ** 2;
const johnBMI = johnWeight / (johnHeight * johnHeight);
const markHeigherBMI = markBMI > johnBMI;
console.log(markBMI, johnBMI, markHeigherBMI);


const firstName = 'Thomas';
const job = 'Businessman';
const birthyear = 1920;
const year = 1980;

const thomas =
  "I'm " + firstName + ',a ' + (year - birthyear) + ' years old ' + job + '!';
console.log(thomas);

const thomasNew = `I'm ${firstName}, a ${year - birthyear} years old ${job}!`;
console.log(thomasNew);

console.log(`just a regular string ......`);

console.log(
  //old methods of creating multiple new lines
  'string with \n\
multiple \n\
lines'
);

// new methods of writing multiple lines
console.log(`string 
with multiple
lines`);

const age = 15;

if (age >= 18) {
  console.log('Maria can start driving lisense 🚗');
} else {
  const yearsleft = 18 - age;
  console.log(`Maria can't drive the car until ${yearsleft} years old :D `);
}

const birthyear = 2012;

let century;
if (birthyear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);


// 2nd coding challenges

const markHeight = 1.88;
const johnHeight = 1.76;
const markWeight = 95;
const johnWeight = 85;
const markBMI = markWeight / markHeight ** 2;
const johnBMI = johnWeight / (johnHeight * johnHeight);
console.log(markBMI, johnBMI);
if (markBMI > johnBMI) {
  console.log(`mark's bmi (${markBMI}) is higher than john's. (${johnBMI})`);
} else {
  console.log(`john's bmi (${johnBMI}) is higher than mark's.(${markBMI})`);
}



// type conversion
const inputyear = '1991';
console.log(Number(inputyear), inputyear);
console.log(Number(inputyear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

// console.log(string(23), 23);   not working in the new browser

// type coercion
console.log('I am ' + 23 + ' years old.');
console.log('I am ' + '23' + ' years old.');
console.log('23' - '10' - 3);
console.log('23' + '10' + 3);
console.log('23' * '2');
console.log('23' / '2');

// mindblowing convesion
let n = '1' + 1; //n=11 because of adding a string
n = n - 1; //here the value n=11 so 11-1 becomes 10
console.log(n);



// 5 falsy values : 0,'',undefined, null ,NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));

const money = 100;
if (money) {
  console.log("don't spend it all :D");
} else {
  console.log('You should get a job!');
}

let height = 0;
if (height) {
  console.log('Yay Height is defined');
} else {
  console.log('Height is Undefined');
}


// equality operators

console.log(18 === 18);
console.log(19 === 18);
console.log(18 == 18);
console.log('18' === 18);

const age = '18';
if (age === 18) console.log('You just become an adult!(strict)');
if (age == 18) console.log('You just become an adult!(loose)');
const favriote = Number(prompt("What's your favroite number?"));
console.log(favriote);
console.log(typeof favriote);

if (favriote === 23) {
  //22 ===23 -> false
  console.log('Cool! 23 is an amazing number!');
} else if (favriote === 7) {
  console.log('7 is also a cool number');
} else if (favriote === 9) {
  console.log('9 is also a cool number');
} else {
  console.log('Number is not 23 or 7 or 9');
}

if (favriote != 23) console.log('Why not 23?');
*/

// boolean logic
const hasDriverLisense = true; //A
const hasGoodVision = true; //B

console.log(hasDriverLisense && hasGoodVision);
console.log(hasDriverLisense || hasGoodVision);
console.log(!hasDriverLisense);

if (hasDriverLisense && hasGoodVision) {
  console.log('Sarah is able to drive');
} else {
  console.log('Someelse should drive the car');
}

const isTried = false; //C
console.log(hasDriverLisense && hasGoodVision && isTried);

if (hasDriverLisense && hasGoodVision && !isTried) {
  console.log('Sarah is able to drive');
} else {
  console.log('Someelse should drive the car');
}

//coding challenges
// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;
const scoreDolphins = (97 + 112 + 101) / 3;
const scoreKoalas = (109 + 95 + 123) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
  console.log('Dolphins wins the trophy🫠');
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
  console.log('koalas wins the trophy😉');
} else if (
  scoreDolphins === scoreKoalas &&
  scoreDolphins >= 100 &&
  scoreKoalas >= 100
) {
  console.log('Both team wins the trophy😎');
} else {
  console.log('No team wins the trophy😒');
}
