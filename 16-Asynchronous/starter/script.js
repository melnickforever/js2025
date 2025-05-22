'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

//////////////////////////////
// old way of doing things
const renderCountry = function (data, className = '') {
    console.log("test", data[0]?.languages);
    const languageList = Object.values(data?.languages).join(', ');
    const currencyList = Object.values(data?.currencies).map(cur => `${cur.name}(${cur.symbol})`).join(', ');

    const html = `
            <article class="country ${className}">
          <img class="country__img" src="${data.flags.png}" />
          <div class="country__data">
            <h3 class="country__name">${data?.name?.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)}</p>
            <p class="country__row"><span>🗣️</span>${languageList}</p>
            <p class="country__row"><span>💰</span>${currencyList}</p>
          </div>
        </article>
    `;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
}

function getNeighbour(neighbour) {
    const neighbourRequest = new XMLHttpRequest();
    neighbourRequest.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
    neighbourRequest.send();
    neighbourRequest.addEventListener('load', function () {
        const [data] = JSON.parse(this.responseText);
        //console.log(data);
        renderCountry(data, 'neighbour');
    });
}

const getCountryAndNeighbour = function (country) {
    const request = new XMLHttpRequest();
    request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
    request.send();
    request.addEventListener('load', function () {
        const [data] = JSON.parse(this.responseText);
        renderCountry(data);
        //get neighbor country
        const neighbours = data?.borders;
        if (!neighbours) {
            return;
        }
        // Get neighbour country
        neighbours.forEach((neighbour) => {
            getNeighbour(neighbour);
        });
    });
}
//getCountryAndNeighbour('portugal');
//getCountryAndNeighbour('asa');
getCountryAndNeighbour('ukr');

// NEW COUNTRIES API URL (use instead of the URL shown in videos):
// https://restcountries.com/v2/name/portugal

// NEW REVERSE GEOCODING API URL (use instead of the URL shown in videos):
// https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}

// new API URL for weather data
// https://restcountries.eu/rest/v2/
// https://countries-api-836d.onrender.com/countries/
///////////////////////////////////////
