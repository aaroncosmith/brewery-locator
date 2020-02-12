'use strict'

const ipApiURL = 'https://ipvigilante.com/64.124.76.250'




function getBreweryByCity(city){
    const breweryApiURL = `https://api.openbrewerydb.org/breweries?by_city=${city}`;
    let breweryNames = []
    get(breweryApiURL).then(response => {
        response.map(brewery => {
            if (brewery['brewery_type'] === 'micro' || brewery['brewery_type'] === 'brewpub' || brewery['brewery_type'] === 'regional'){
                breweryNames.push(brewery["name"]);
            }
        })
    })
    return breweryNames;
}

//function getCityByIP()

console.log(getBreweryByCity('atlanta'));
