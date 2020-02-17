'use strict'

let breweryNames = [];
let sortedBreweries = [];
let breweriesLat = [];
let breweriesLong = [];




function breweryNamesToArray(breweries) {
    breweries.map(brewery => {
        if (brewery['brewery_type'] === 'micro' || brewery['brewery_type'] === 'brewpub' || brewery['brewery_type'] === 'regional'){
            if (brewery['latitude'] !== null && brewery['longitude'] !== null){
                breweryNames.push(brewery['name']);
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

function getUserLoation(){

    function success(pos){
        calculateDistance(breweriesLat, breweriesLong, pos.coords.latitude, pos.coords.longitude);
    }

    function fail(){
        console.log('fail');
    }
    navigator.geolocation.getCurrentPosition(success, fail);
}

getCityByIP();
getUserLoation();
console.log(breweryNames);
console.log(sortedBreweries);
// console.log(breweriesLat);
// console.log(breweriesLong);

// const testLat = [33.76333225,33.8080223,33.7290642941176,33.72670205,33.79480405,33.79314935,33.781867,33.81830375,33.8055922,33.7615549,33.762309,33.77232605];

// const testLong = [-84.3870607355802,-84.3810721937623,-84.4161772352941,-84.3770629097993,-84.4098921239911,-84.3685805104894,-84.377744,-84.4345413838986,-84.4300619376943,-84.3964736,-84.3496422,-84.3792977599729]

// const brewNamesTest = ['brew 1','brew 2','brew 3','brew 4','brew 5','brew 6','brew 7','brew 8','brew 9','brew 10','brew 11','brew 12'];

// let orderedBrewTest = []





