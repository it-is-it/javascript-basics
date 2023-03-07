/*
const day = 'monday';

// using switch case
switch (day) {
    case 'monday':
        console.log('plan course structure');
        console.log('go to coding meetup');
        break;
    case 'tuesday':
        console.log('prepare theory vedios');
        break;
    case 'wednesday':
    case 'thrusday':
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend :D');
        break;
    default:
        console.log('not a valid day!');
}

// using if-else
if (day === 'monday') {
    console.log('plan course structure');
    console.log('go to coding meetup');
}
else if (day === 'tuesday') {
    console.log('prepare theory vedios');
}
else if (day === 'wednesday' || day === 'thrusday') {
    console.log('Write code examples');
}
else if (day === 'friday') {
    console.log('Record videos');
}
else if (day === 'saturday' || day === 'sunday') {
    console.log('Enjoy the weekend :D');
}
else {
    console.log('not a valid day!');
}
*/

const age =23;
age>=18 ? console.log (`I like to drink wine!`) : (`I like to drink water!`);

const drink = age>=18 ? 'wine !' : 'water !' ;
console.log(drink);

let drink2;
if (age >= 18){
    drink2 = 'wine';
}else{
    drink2 = 'water';
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? 'wine' : 'water' } `);


// solving questions
const bill =430;
const tip = bill <= 300 && bill >= 50 ? bill*.15 : bill*0.2;
console.log(`the bill was ${bill},the tip was ${tip}, and the total value ${bill + tip}`);

