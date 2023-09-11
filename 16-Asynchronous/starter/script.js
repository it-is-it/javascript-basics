'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

const renderCountry = function (data, className = '') {
  // console.log(data);
  const html = `
      <article class="country ${className}">
        <img class="country__img" src="${data.flags.png}" />
        <div class="country__data">
          <h3 class="country__name">${data.name.common}</h3>
          <h4 class="country__region">${data.region}</h4>
          <p class="country__row"><span>👫</span>${(
            +data.population / 1000000
          ).toFixed(1)} people</p>
          <p class="country__row"><span>🗣️</span>${data.languages.deu}</p>
            <p class="country__row"><span>💰</span>${
              data.currencies.EUR.name
            }</p>
        </div>
      </article>
      `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  // countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  // countriesContainer.style.opacity = 1;
};

/*

const getCountryData = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    const getFirstAvailableLanguageCode = function (languages) {
      for (const languageCode in languages) {
        if (languages.hasOwnProperty(languageCode)) {
          return languageCode;
        }
      }
    };
    const getFirstAvailableCurrency = function (currencies) {
      for (const currency in currencies) {
        if (currencies.hasOwnProperty(currency)) {
          return currency;
        }
      }
    };

    const html = `
  <article class="country">
    <img class="country__img" src="${data.flags.svg}" />
    <div class="country__data">
      <h3 class="country__name">${data.name.common}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)} people</p>
      <p class="country__row"><span>🗣️</span>${getFirstAvailableLanguageCode(
        data.languages
      )}</p>
        <p class="country__row"><span>💰</span>${getFirstAvailableCurrency(
          data.currencies
        )}</p>
    </div>
  </article>
  `;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  });
};

getCountryData('france');
getCountryData('germany');
getCountryData('nepal');

*/

/*

const getCountryAndNeighbour = function (country) {
  // ajax call country 1
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();
  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    // render country
    renderCountry(data);

    //get neighbour country (2)
    const [neighbour] = data.borders;

    if (!neighbour) return;

    // ajax call country 1
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
    request2.send();

    request2.addEventListener('load', function () {
      const [data2] = JSON.parse(this.responseText);
      console.log(data2);

      renderCountry(data2);
    });
  });
};

// getCountryAndNeighbour('france');
getCountryAndNeighbour('germany');
// getCountryAndNeighbour('spain');


*/

/*
setTimeout(() => {
  console.log('1 second passed');
  setTimeout(() => {
    console.log('2 second passed');
    setTimeout(() => {
        console.log('3 second passed');
        setTimeout(() => {
            console.log('4 second passed');
          }, 1000);
      }, 1000);
  }, 1000);
}, 1000);
*/

const getJSON = function (url) {
  fetch(url).then(response => {
    if (!response.ok) throw new Error(`Country not found (${response.status})`);
    return response.json();
  });
};
const getCountryData = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => {
      // console.log(response);

      if (!response.ok) {
        throw new Error(`Country not found (${response.status})`);
      }
      return response.json();
    })
    .then(data => {
      // console.log(data[0]);
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];
      // console.log(neighbour);

      if (!neighbour) return;

      // country 2
      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    })
    .then(response => response.json())
    .then(data => renderCountry(data, 'neighbour'))
    .catch(err => {
      console.error(`${err} 💥💥💥`);
      renderError(`Something went wrong 💥💥 ${err.message}. Try again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', function () {
  getCountryData('germany');
});

getCountryData(hkfdsl);
