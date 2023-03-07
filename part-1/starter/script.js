/*
let js = 'amazing';
console.log(40 + 8 + 23 - 10);

console.log('Jonas');
console.log(23);

let firstName = "Dipannita";
console.log(firstName);
console.log(firstName);
console.log(firstName);

let arif_chutti = "A + C"
console.log(arif_chutti);

let gulzar$nowshin = 'G + N'
console.log(gulzar$nowshin);

let pet = 'Pintu'
let footballer = ('Messi')
let myage = '16'

console.log(myage);
console.log(pet);
console.log(footballer);
*/

/* 
function myFunc() {
    let x = 10
    if (x == 10) {
        var myVar = 30;
    }
    console.log(myVar + 10);
}
myFunc();



kisu na dile global(sob jaygay pabe)

const dile declare er somoy initialize korte hobe. pore ar value set kora jabe na

let hocche bracket scope

var hocche function scope.
*/







/*
let javascriptisfun = true;
console.log(javascriptisfun);

// console.log(typeof true);
console.log(typeof javascriptisfun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

javascriptisfun = 'yes!';
console.log(typeof javascriptisfun);

let year;
console.log(year);
console.log(typeof year);

year = 1995;
console.log(typeof year);

console.log(typeof null);



let age = 30;
age = 31;

const Birthyear = 1991;

// const Birthyear;

var job = 'programmer';
job = 'teacher';

Firstman = 'shuvo';
console.log(Firstman);
*/





/*


// Math operators


const now = 2022;
const ageShuvo = now - 2007;
const agePrity = now - 2002;
console.log(ageShuvo, agePrity);

console.log(ageShuvo * 2, ageShuvo / 10, 2 ** 3 );
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Shuvo';
const lastName = 'prity';
console.log(firstName + ' ' + lastName);





// Assingment operators


let x = 10 + 5; //15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 =100
x ++; // x= x + 1
x --; // x= x - 1
x --; // x= x - 1
console.log(x);




// Comparison operators


console.log(agePrity > ageShuvo); // >, < , >=, <=
console.log(ageShuvo >= 18);

const isFullAge = ageShuvo >= 18;

console.log(now - 2002 > now - 2007);
*/

/*
const now = 2022;
const ageShuvo = now - 2007;
const agePrity = now - 2002;

console.log(now - 2002 > now - 2007);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = (agePrity + ageShuvo) / 2
console.log(agePrity, ageShuvo , averageAge);
*/




/*
// const massMark = 78;
// const heighMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

const massMark = 95;
const heighMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMImark = massMark / heighMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMImark > BMIJohn;
console.log(BMImark, BMIJohn, markHigherBMI);
*/



/*
const firstName = 'Jonas';
const job = 'teacher';
const Birthyear = 1991;
const year = 2037;

const jonas = "I'm" + firstName + ", a" + (year - Birthyear) + 'years old' + job + '!';
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - Birthyear} years old ${job}!`;
console.log(jonasNew);

console.log(`Just a regular string....`);


console.log(`String
multiple
lines`);
*/



/*
const age = 15;

if(age >= 18) {
    console.log('Sarah can start driving license');
} else {
    const yearleft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearleft} years :)`)
}

const Birthyear = 2002;

let century;
if(Birthyear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);
*/

/*
const massMark = 78;
const heighMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

// const massMark = 95;
// const heighMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

const BMImark = massMark / heighMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMImark, BMIJohn);

if(BMImark > BMIJohn) {
    console.log(`Mark's BMI (${BMImark}) is higher than John's (${BMIJohn})!`)
} else {
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMImark}) !`)
}
*/



const inputYear = '1991';
console.log(Number(inputYear)); 
console.log(Number(inputYear) + 18);

// console.log(Number('Shuvo'));
// console.log(typeof NaN);


console.log(String(23));