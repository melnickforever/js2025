'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

//////////////////////////////
/*
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
*/
// Fetch API
// const neighbourRequest = new XMLHttpRequest();
// neighbourRequest.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
// neighbourRequest.send();

const renderCountry = function (data, className = '') {
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
const getCountryData = function (country) {
    fetch(`https://restcountries.com/v3.1/name/${country}`)
        .then(response => response.json())
        .then(data => {
            renderCountry(data[0]);
            const neighbours = data[0]?.borders;
            if (!neighbours) {
                return;
            }
            return Promise.all(
                neighbours.map(code =>
                                   fetch(`https://restcountries.com/v3.1/alpha/${code}`)
                                       .then(response => response.json())
                                       .then(data => data[0])
                ));
            return fetch(`https://restcountries.com/v3.1/alpha/${neighbours}`);
        }).then(neighbourCountries => {
        if (!neighbourCountries) {
            return;
        }
        neighbourCountries.forEach(code => renderCountry(code, 'neighbour'));
    });
};
getCountryData('finland');
