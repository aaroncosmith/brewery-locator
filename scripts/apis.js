'use strict'

let userLocation = [];

function sortBreweries(distanceBetween, sortedDistance, breweriesArray){
    let sortedBreweries = [];
    sortedDistance.forEach(distance => {
        sortedBreweries.push(breweriesArray[distanceBetween.indexOf(distance)]);
    })
    injectHTML(sortedBreweries.splice(0,6));
}

function calculateDistance(breweriesArray, userLatLong){
    const userLatPlusLong = userLatLong[0] + userLatLong[1];
    const breweriesLatPlusLong = breweriesArray.map((brewery) => {
        return Number(brewery.latitude) + Number(brewery.longitude);
    })
    const distanceBetween = breweriesLatPlusLong.map(brewery => {
        return brewery - userLatPlusLong;
    })
    const sortedDistance = distanceBetween.slice().sort((a, b) => b - a);
    sortBreweries(distanceBetween, sortedDistance, breweriesArray);
}

function breweriesToArray(breweries) {
    let breweriesArray = [];
    breweries.map(brewery => {
        if (brewery['brewery_type'] === 'micro' || brewery['brewery_type'] === 'brewpub' || brewery['brewery_type'] === 'regional'){
            if (brewery['latitude'] !== null && brewery['longitude'] !== null){
                breweriesArray.push(brewery);
            }
        }
    })
    calculateDistance(breweriesArray, userLocation);
}

function getBreweryByCity(city, state){
    const breweryApiURL = `https://api.openbrewerydb.org/breweries?by_city=${city}&${state}`;
    get(breweryApiURL).then(response => {
        breweriesToArray(response);
    });
}

function getCityByLocation(lat, long){
    const geoParseApi = `https://geocode.xyz/${lat},${long}?json=1`
    get(geoParseApi).then(response => {
        console.log(response['city'], response['osmtags']['is-in-state']);
        getBreweryByCity(response['city'], response['osmtags']['is-in-state']);
    })
}

function getUserLocation () {
    let userPosition = function () {
        return new Promise(function (resolve, reject){
            navigator.geolocation.getCurrentPosition(resolve, reject);       
        });
    }
    userPosition()
    .then((pos) => {
        console.log('It worked!', pos.coords)
        userLocation = [pos.coords.latitude, pos.coords.longitude]
        getCityByLocation(pos.coords.latitude, pos.coords.longitude);
    })
    .catch((err) => {
        console.error(err.message);
    })
}

// getUserLocation()
