// const brewArray = makeBrewObject();
// console.log(brewArray);

// const brewArray = returnBrew();
// console.log(brewArray);
// const brewArray = [
//     {
//         name: "The Brewery",
//         brewery_type: "SUPER MEGA DEATH",
//         address: "4440 August Lane, Kansas City, KS, 66106",
//         website: "https://www.google.com",
//     },
//     {
//         name: "1The Brewery",
//         brewery_type: "1SUPER MEGA DEATH",
//         address: "14440 August Lane, Kansas City, KS, 66106",
//         website: "www.1yourmom.com",
//     },


// ];

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

// injectHTML().then((brewObject) => {injectHTML(brewObject)});

