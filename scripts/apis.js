'use strict'

let breweryNames = [];
let sortedBreweries = [];
let breweriesLat = [];
let breweriesLong = [];




function breweryNamesToArray(breweries) {
    breweries.map(brewery => {
        if (brewery['brewery_type'] === 'micro' || brewery['brewery_type'] === 'brewpub' || brewery['brewery_type'] === 'regional'){
            if (brewery['latitude'] !== null && brewery['longitude'] !== null){
                breweryNames.push(brewery);
            }
        }
    });
}

function breweryLatToArray(breweries) {
    breweries.map(brewery => {
        if (brewery['brewery_type'] === 'micro' || brewery['brewery_type'] === 'brewpub' || brewery['brewery_type'] === 'regional'){
            if (brewery['latitude'] !== null && brewery['longitude'] !== null){
                breweriesLat.push(Number(brewery['latitude']));
            }
        }
    });
}

function breweryLongToArray(breweries) {
    breweries.map(brewery => {
        if (brewery['brewery_type'] === 'micro' || brewery['brewery_type'] === 'brewpub' || brewery['brewery_type'] === 'regional'){
            if (brewery['latitude'] !== null && brewery['longitude'] !== null){
                breweriesLong.push(Number(brewery['longitude']));
            }
        }
    });
}

function getBreweryByCity(city){
    const breweryApiURL = `https://api.openbrewerydb.org/breweries?by_city=${city}`;
    breweryNames = [];
    sortedBreweries = [];
    get(breweryApiURL).then(response => {
        breweryNamesToArray(response);
        breweryLatToArray(response);
        breweryLongToArray(response);
    });
}

function getCityByIP(){
    const ipApiURL = `http://ip-api.com/json/`;
    get(ipApiURL).then(response => {
        getBreweryByCity(response['city']);
    });
    
}

function sortBreweries(distanceBetween, sortedDistance){
    sortedDistance.forEach(distance => {
        sortedBreweries.push(breweryNames[distanceBetween.indexOf(distance)]);
    })
    injectHTML(sortedBreweries.splice(0,6));
}

function calculateDistance(breweriesLat, breweriesLong, userLat, userLong){
    const userLatPlusLong = userLat + userLong;
    const breweriesLatPlusLong = breweriesLat.map((latitude, index) => {
        return latitude + breweriesLong[index]
    })
    const distanceBetween = breweriesLatPlusLong.map(brewery => {
        return brewery - userLatPlusLong;
    })
    const sortedDistance = distanceBetween.slice().sort((a, b) => b - a);
    sortBreweries(distanceBetween, sortedDistance);
}

function getUserLocation () {
    let userPosition = function () {
        return new Promise(function (resolve, reject){
            navigator.geolocation.getCurrentPosition(resolve, reject);       
        });
    }
    userPosition()
    .then((pos) => {
        console.log('It worked!')
        calculateDistance(breweriesLat, breweriesLong, pos.coords.latitude, pos.coords.longitude);
    })
    .catch((err) => {
        console.error(err.message);
    })
}

getCityByIP();
getUserLocation()







