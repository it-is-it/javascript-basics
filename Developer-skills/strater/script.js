'use strict';
/*

const x = '23';
if (x===23) console.log(23);

const calcAge = (birthyear) => 1980 - birthyear;
console.log(calcAge(1920));

//problem solving using search engine

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;
    if (curTemp > max) {
      max = curTemp;
    }
    if (curTemp < min) {
      min = curTemp;
    }
  }
  console.log(max, min);
  return max - min;
};
const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

// new problem
const calcTempAmp = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;
    if (curTemp > max) {
      max = curTemp;
    }
    if (curTemp < min) {
      min = curTemp;
    }
  }
  console.log(max, min);
  return max - min;
};
const amp = calcTempAmp([3, 5, 1], [9, 0, 5]);
console.log(amp);


const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    // C) fixing the block
    value: Number(prompt('Degree celsius:')),
  };

  // B) find the bug
  console.log(measurement);

  console.log(typeof measurement.value);

  console.table(measurement);

  // console.log(measurement.value);s
  // console.warn(measurement.value);
  // console.error(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin;
};

// A) identify
console.log(measureKelvin());


// using a debugger for bugged code
const calcTempAmp = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = 0;
  let min = 0;
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;
    if (curTemp > max) {
      max = curTemp;
    }
    if (curTemp < min) {
      min = curTemp;
    }
  }
  console.log(max, min);
  return max - min;
};
const amp = calcTempAmp([3, 5, 1], [9, 4, 5]);
// Identify the bug
console.log(amp);

*/

// coding challenges
const printForecast = function(arr){
  let str = '';
  for (let i=0; i<arr.length;i++){ 
    str = str + `${arr[i]}°C in ${i+1} days ... `;
  }
  console.log('... ' + str);
}
const data1 = [17,21,23];
printForecast(data1);
const data2 = [12,5,-5, 0,4];
printForecast(data2);