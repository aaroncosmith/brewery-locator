// try and take items from an array and inject them on a 
// clickable link that sits on the actual address
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

function mapsAdressSearch(results) {
    const orderedList = document.getElementById('firstorder');
    console.log("FUCK YEAH");
    innerHTML = "";
    results.forEach(function(eaResult) {
        orderedList.innerHTML = orderedList.innerHTML + `
        <li class="brew-list">
            <div class="brew-title">
                ${eaResult.title}
            </div>
            <div class="brew-type">
                ${eaResult.brew}
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

mapsAdressSearch(brewArray);