'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');


const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `  
    <div class="movements__row">
    <div class="movements__type 
    movements__type--${type}">${i + 1} ${type}</div>
    <div class="movements__value">${mov}€</div>
  </div>`;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};

const createUsername = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};

createUsername(accounts);
// console.log(accounts);

const updateUI = function (acc) {
  //display movements
  displayMovements(acc.movements);

  //display balance
  calcDisplayBalance(acc);

  //display summary
  calcDisplaySummary(acc);
};

let currentAccount;
//Event handler
btnLogin.addEventListener('click', function (e) {
  //prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // display ui and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    //clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    //update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const recieverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    recieverAcc &&
    currentAccount.balance >= amount &&
    recieverAcc.username !== currentAccount.username
  ) {
    currentAccount.movements.push(-amount);
    recieverAcc.movements.push(amount);

    //update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // add movement
    currentAccount.movements.push(amount);

    //update ui
    updateUI(currentAccount);
  }
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);

    //indexOf(23)

    //Delete account
    accounts.splice(index, 1);

    //hide ui
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
/*
let arr = ['a', 'b', 'c', 'd', 'e'];

//slice
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice());
console.log([...arr]);

//splice
// console.log(arr.splice(2));
arr.splice(-1);
arr.splice(1,2);
console.log(arr);

//reverse
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 =['j','i','h','g','f'];
console.log(arr2.reverse());
console.log(arr2);


//concat
 const letters = arr.concat(arr2);
 console.log(letters);
 console.log([...arr, ...arr2]);
 
 //join
 console.log(letters.join('  - '));


const arr=[23,11,64];
console.log(arr[0]);
console.log(arr.at(0));

//getting the last element
console.log(arr[arr.length -1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));

console.log('jonas'.at(0));
console.log('jonas'.at(-1));


const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements){
for (const [i, movement] of movements.entries()){
  if(movement>0){
    console.log(`movement ${i+1}: You deposited ${movement}`);
  } else{
    console.log(`movement ${i+1}: You withdrew ${Math.abs(movement)}`);
  }
}


console.log('---------ForEach-------');
movements.forEach(function(mov, i , arr){
  if(mov>0){
    console.log(`movement ${i+1}: You deposited ${mov}`);
  } else{
    console.log(`movement ${i+1}: You withdrew ${Math.abs(mov)}`);
  }
});

// 0:function(200)
// 0:function(450)
// 0:function(400)


const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

//set
const currenciesUnique = new set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});



//coding challenge 1
test data 1: julia[3,5,2,12,7] , kate[4,1,15,8,3]
test data 2: julia[9,16,6,8,3] , kate[10,5,6,1,4]


const checkDogs = function(dogsJulia, dogsKate){
  const dogsJuliaCorrected = dogsJulia.slice();
  dogsJuliaCorrected.splice(0,1);
  dogsJuliaCorrected.splice(-2);
  // console.log(dogsJuliaCorrected);
  const dogs = dogsJuliaCorrected.concat(dogsKate);
  console.log(dogs);

  dogs.forEach(function(age,i){
    if(age>=3){
      console.log(`dog number ${i+1} is an adult ,and is ${age} years old`);
    } else{
      console.log(`dog number ${i+1} is still a puppy`);
    }
  });
};
checkDogs([3,5,2,12,7], [4,1,15,8,3]);
checkDogs([9,16,6,8,3] , [10,5,6,1,4]);


const euroToUsd = 1.1;

const movementsUSD = movements.map (mov => mov* euroToUsd);

// const movementsUSD = movements.map(function(mov){
//   return mov* euroToUsd;
// })

console.log(movements);
console.log(movementsUSD);

const movementUSDfor = [];
for (const mov of movements) movementUSDfor.push(mov * euroToUsd);
console.log(movementUSDfor);


const movementsDescriptions = movements.map((mov, i) =>
 `movement ${i+1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)}`);
  
console.log(movementsDescriptions);



const deposits = movements.filter(function(mov, i, arr){
  return mov => 0;
})
console.log(movements);
console.log(deposits);

const depositsFor =[];
for (const mov of movements) if (mov > 0) depositsFor.push(mov);
console.log(depositsFor);

const withdrawals = movements.filter(mov => mov<0)
console.log(withdrawals);


console.log(movements);

//accumulator -> SNOWBALL
// const balance = movements.reduce(function (acc, cur, i, arr) {
//   console.log(`Iteration ${i}: ${acc}`);
//   return acc + cur;
// }, 0);
// console.log(balance);

const balance = movements.reduce((acc, cur) => acc + cur, 0);
console.log(balance);

let balance2 = 0;
for (const mov of movements) balance2 += mov;
console.log(balance2);

//Maximum value
const max = movements.reduce((acc, mov) => {
  if (acc > mov) {
    return acc;
  } else return mov;
}, movements[0]);
console.log(max);


//coding challenge 2

// let humanAge = 0;
// const checkDogs = function (dogs) {
//   dogs.forEach(function (age, i) {
//     if (age <= 2) {
//       console.log(
//         `dog number ${i + 1} is less than 2 years old ,so human is ${(humanAge =
//           2 * age)} years old`
//       );
//     } else {
//       console.log(
//         `dog number ${
//           i + 1
//         } is greater than 2 years old ,so human is ${(humanAge =
//           16 + 4 * age)} years old`
//       );
//     }
//   });
// };

// checkDogs([5, 2, 4, 1, 15, 8, 3]);
// checkDogs([16, 6, 10, 5, 6, 1, 4]);

const calcAverageHumanAge = function (ages) {
  const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
  const adults = humanAges.filter(age => age >= 18);
  console.log(humanAges);
  console.log(adults);

  // const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;
  const average = adults.reduce(
    (acc, age, i, arr) => acc + age / arr.length,
    0
  );

  // 2 3.(2+3)/2 = 2.5 === 2/2 + 3/2 = 2.5

  return average;
};

const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(avg1, avg2);


const eurToUsd = 1.1;
console.log(movements);

//PIPELINE
const totalDepositsUSD = movements
.filter(mov => mov > 0)
.map((mov,i, arr) => {
  console.log(arr);

  return mov * eurToUsd})
// .map(mov => mov * eurToUsd)
.reduce((acc, mov) => acc+ mov ,0)
console.log(totalDepositsUSD);


//coding challenges 3
const calcAverageHumanAge = ages =>
  ages
    .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter(age => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(avg1, avg2);


//the find method
const firstWithdrawal = movements.find(mov => mov < 0);

console.log(movements);
console.log(firstWithdrawal);

console.log(accounts);

const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);


console.log(movements);

// EQUALITY
console.log(movements.includes(-130));

//some: condition
console.log(movements.some(mov => mov === -130));

const anyDeposits = movements.some(mov => mov > 0);
console.log(anyDeposits);

// Every
console.log(movements.every(mov => mov > 0));
console.log(account4.movements.every(mov => mov > 0));

// separate callback
const deposit = mov => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));


const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());

const airDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(airDeep.flat(2));

// flat
const overalBalance = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance);

//flatMap
const overalBalance2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance);


const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log(owners.sort());
console.log(owners);

//Numbers
console.log(movements);

// return < 0, A, B (keep order)
// return < 0, B, A (switch order)

//ascending
movements.sort((a, b) => a - b);
console.log(movements);

//descending
movements.sort((a, b) => b - a);
console.log(movements);


const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(new Array(1, 2, 3, 4, 5, 6, 7));

const x = new Array(7);
console.log(x);
console.log(x.map(() => 5));

x.fill(1, 3, 5);
x.fill(1);
console.log(x);

arr.fill(23, 2, 6);
console.log(arr);

//Array.form
const y = Array.from({ length: 7 }, () => 1);
console.log(y);

const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);


labelBalance.addEventListener('click', function () {
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'),
    el => Number(el.textContent.replace('€', ''))
  );

  console.log(movementsUI);

  const movementsUI2 = [...document.querySelectorAll('.movements__value')];
});



//Array method practice


// 1.
const bankDepositSum = accounts
.flatMap(acc => acc.movements)
.filter(mov => mov > 0)
.reduce((sum, cur) => sum + cur , 0);

console.log(bankDepositSum);


// 2.
const numDeposits1000 = accounts
.flatMap( acc => acc.movements)
.reduce((count , cur) => cur>= 1000 ? ++ count : count , 0)

console.log(numDeposits1000);

// 3.
const sums =accounts
.flatMap(acc => acc.movements)
.reduce((sums ,cur) => {
  // cur > 0 ? (sums.deposits += cur) : (sums.withdrawls += cur); 
  sums[cur > 0 ? 'deposits' : 'withdrawls'] += cur;
  return sums;},{deposits:0 , withdrawls: 0})

console.log(sums);

// 4.
// this is a nice title -> This Is a Nice Title

const convertTitleCase = function (title) {

  const capitalize = str => str[0].toUpperCase() + str.slice(1);

  const exceptions = ['a' , 'an', 'the', 'and','but','or','on','in','with'];

  const titleCase = title
  .toLowerCase()
  .split(' ')
  .map(word => 
    exceptions.includes (word) ? word : word[0].
    toUpperCase() + word.slice(1))
    .join(' ');
  return capitalize(titleCase);

};

console.log(convertTitleCase('this is a nice title'));
console.log(convertTitleCase('this is a LONG title but not too long'));
console.log(convertTitleCase('and here is another title with an EXAMPLE'));

*/


//final coding challenge

const dogs = [
  {weight: 23, curFood: 250, owners: ['Alice','Bob']},
  {weight: 8, curFood: 200, owners: ['Matilda']},
  {weight: 13, curFood: 275, owners: ['Sarah','john']},
  {weight: 32, curFood: 340, owners: ['Michael']},
]

  // 1
