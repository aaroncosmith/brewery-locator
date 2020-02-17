
// try and take items from an array and inject them on a 
// clickable link that sits on the actual address

async function getResultsByCity(city) {
    console.log(city)
    const response = await fetch(`https://api.openbrewerydb.org/breweries?by_city=${city}`)
    const data = await response.json()
    return data;
}



const brewArray = [
    {
        title: "The Brewery",
        brew: "SUPER MEGA DEATH",
        address: "4440 August Lane, Kansas City, KS, 66106",
        website: "https://www.google.com",
    },
    {
        title: "1The Brewery",
        brew: "1SUPER MEGA DEATH",
        address: "14440 August Lane, Kansas City, KS, 66106",
        website: "www.1yourmom.com",
    },
];

emptySearchArray = [];

function injectHTML(results) {
    const orderedList = document.getElementById('firstorder');
    console.log(results);
    innerHTML = "";

    results.forEach(function(eaResult) {
        orderedList.innerHTML = orderedList.innerHTML + `
        <li class="brew-list">
            <div class="brew-title">
                ${eaResult.name}
            </div>
            <div class="brew-type">
                ${eaResult.brewery_type}
            </div>
            <div class="address-link">
                <a href="https://www.google.com/maps/dir/Current+Location/${eaResult.address}">${eaResult.address}</a>
            </div>
            <div class="website">
                <a href="${eaResult.website}">${eaResult.website}</a>
            </div>
        </li>
        `

    }) 
};
// async function getCityByIP(){
//     const response = await fetch("https://cors-anywhere.herokuapp.com/http://ip-api.io/api/json");
//     console.log(response)
//     const data = await response.json();
//     console.log(data)
//     return data.city;
// };

// getCityByIP().then((data) => {
//     getResultsByCity(data).then((data) => {injectHTML(data)});
// })

injectHTML(brewArray);