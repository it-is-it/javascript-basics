'use strict';

let hasDriverLisense = false;
const passTest = true;

if (passTest) hasDriverLisense = true;
if (hasDriverLisense) console.log('I can drive :D');

// const interface ='Audio';
// const private =534;

function logger() {
    console.log('My name is ishwor');
}

// calling ,running , invoking the function using function declaration
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appOrnJuice = fruitProcessor(2, 4);
console.log(appOrnJuice);

const num = Number('23');

// functions declarations vs expressions
function calcAge(birthyear) {
    return 2037 - birthyear;
}

const age = calcAge(1991);
console.log(age);


// function  expression
const calcAge2 = function (birthyear) {
    return 2037 - birthyear;
}

const age2 = calcAge2(1991);

console.log(age, age2);


// arrow functions
const calcAge3 = birthyear => 2037 - birthyear;
const age3 = calcAge3(1991);
console.log(age3);

const yearsToRetire = (birthyear, firstname) => {
    const age4 = 2037 - birthyear;
    const retirement = 65 - age4;
    return `${firstname} retires in ${retirement} years`;
}

console.log(yearsToRetire(1991, 'Thomas'));
console.log(yearsToRetire(1980, 'Heisenberg'));



//  function calling other functions
const cutpeices = function (fruit) {
    return fruit * 3;
};

const fruitProcessors = function (apples, oranges) {
    const applepeices = cutpeices(apples);
    const orangepeices = cutpeices(oranges);

    const juice = `juice with ${applepeices} peices of apple and ${orangepeices} peices of orange.`;
    return juice;
};

console.log(fruitProcessors(2, 3));


const calcAge4 = function (birthyeah) {
    return 2037 - birthyeah;
}

const yearuntilretirement = function (birthyeah , firstname) {
    const age5 = calcAge4(birthyeah);
    const retirement = 65 - age5;

    if (retirement > 0) {
        console.log(`${firstname} retires in ${retirement} years`);
        return retirement;
    } else {
        console.log(`${firstname} has already retired`);
        return -1;
    }
}
console.log(yearuntilretirement(1991 , 'Thomas'));
console.log(yearuntilretirement(1970, 'Heisenberg'));

// coding challenge 1
const calcaverage = (a,b,c) => (a+b+c)/3;

let scoreDolphins=calcaverage(44,23,71);
let scoreKoalas=calcaverage(65,54,49);
console.log(scoreDolphins,scoreKoalas);

const checkwinner = function (avgDolphins, avgKoalas){
    if (avgDolphins >= 2* avgKoalas){
        console.log(`Dolphins wins (${avgDolphins} vs ${avgKoalas})`)
    }
   else if (avgKoalas >= 2* avgDolphins){
        console.log(`Koalas wins (${avgDolphins} vs ${avgKoalas})`)
    }
    else{
        console.log('No team wins...')
    }
}
checkwinner(scoreDolphins,scoreKoalas);
checkwinner(576,111);

// test 2
scoreDolphins=calcaverage(85,54,41);
scoreKoalas=calcaverage(23,34,27);
console.log(scoreDolphins,scoreKoalas);
checkwinner(scoreDolphins,scoreKoalas);




// Array
const freind1 = 'Micheal';
const freind2 = 'Steven';
const freind3 = 'Peter';

const friends =['Micheal','Steven','Peter'];
console.log(friends);

const years = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[1]);

console.log(friends.length);
console.log(friends[friends.length-1]);

friends[2] = 'jay';
console.log(friends);
// friends =['Bob', 'alita'];      this doesn't work

const firstname ='jonas';
const jonas =[firstname, 'schmedtman', 2037-1991, 'teacher', friends];
console.log(jonas);
console.log(jonas.length);

//exercise
const calAge = function (birthY){
    return 2037-birthY;
}
const y =[1990, 1967, 2002, 2010, 2018];

const age10 =calAge(y[0]);
const age11 =calAge(y[1]);
const age12 =calAge(y[2]);
console.log (age10, age11, age12 );

const ages = [calAge(y[0]),calAge(y[1]),calAge(y[2])];
console.log(ages);


// add elements in the array
const frinds =['Micheal','steven','Peter'];
const newlen= frinds.push ('jay');
console.log(frinds);
console.log(newlen);

frinds.unshift('john');
console.log(frinds);


// remove elements in the array
frinds.pop();
const popped = frinds.pop();
console.log(popped);
console.log(frinds);

frinds.shift();
console.log(frinds);

console.log(frinds.indexOf('steven'));
console.log(frinds.indexOf('bob'));


frinds.push(23);
console.log(frinds.includes('bob'));
console.log(frinds.includes('steven'));
console.log(frinds.includes(23));

if(frinds.includes('steven')){
    console.log('You have a friend named steven');
}
