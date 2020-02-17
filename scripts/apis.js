'use strict'
let brewObject = []
let breweryNames = []
let breweriesLat = []
let breweryLong = []

function makeBrewObject(breweries) {
    breweries.map(brewery => {
        if (brewery['brewery_type'] === 'micro' || brewery['brewery_type'] === 'brewpub' || brewery['brewery_type'] === 'regional'){
            brewObject.push(brewery);
            console.log(brewery);
        }
        // injectHTML(brewObject);
    });
}

function breweryNamesToArray(breweries) {
    breweries.map(brewery => {
        
        if (brewery['brewery_type'] === 'micro' || brewery['brewery_type'] === 'brewpub' || brewery['brewery_type'] === 'regional'){
            breweryNames.push(brewery["name"]);
        }
    });
}
function breweryLatToArray(breweries) {
    breweries.map(brewery => {
        if (brewery['brewery_type'] === 'micro' || brewery['brewery_type'] === 'brewpub' || brewery['brewery_type'] === 'regional'){
            breweriesLat.push(brewery["latitude"]);
        }
    });
}
function breweryLongToArray(breweries) {
    breweries.map(brewery => {
        if (brewery['brewery_type'] === 'micro' || brewery['brewery_type'] === 'brewpub' || brewery['brewery_type'] === 'regional'){
            breweryLong.push(brewery["longitude"]);
        }
    });
}
function getBreweryByCity(city){
    const breweryApiURL = `https://api.openbrewerydb.org/breweries?by_city=${city}`;
    get(breweryApiURL).then(response => {
        makeBrewObject(response);
        breweryNamesToArray(response);
        breweryLatToArray(response);
        breweryLongToArray(response);
    });
}
function getCityByIP(){
    const ipApiURL = `http://ip-api.com/json/`;
    get(ipApiURL).then(response => {
        getBreweryByCity(response['city']);
        console.log(response['city']);
    });
}
function userBreweryLatDiff(breweriesLat, userLat){
    let latitudeDiff = breweriesLat.map(breweryLat => {
        return userLat - breweryLat
    })
    console.log('unsorted', latitudeDiff);
}

function getUserLoation(){
    // let userLocation = [33.8488414, -84.3744461];
    let userLocation = []; // [lat, long];
    let lat = 0
    let long = 0
    function success(pos){
        userBreweryLatDiff(testLat, pos.coords.latitude);
    }
    //
    function fail(){
        console.log('fail');
    }
    navigator.geolocation.getCurrentPosition(success, fail);
    console.log(userLocation)
}
// getCityByIP();
// getBreweryByCity('atlanta')
// getUserLoation();
// console.log(brewObject)
// getBreweryByCity()
// console.log(breweryNames);
// console.log(breweriesLat);
// console.log(breweryLong);
getCityByIP().then((brewObject) => {return getBreweryByCity(brewObject.city)}).then((brewObject) => {injectHTML(brewObject)});
const testLat = [33.76333225,33.8080223,33.7290642941176,33.72670205,33.79480405,33.79314935,33.781867,33.81830375,33.8055922,33.7615549,33.762309,33.77232605];