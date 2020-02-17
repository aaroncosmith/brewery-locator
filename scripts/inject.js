
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
                <a href="https://www.google.com/maps/dir/Current+Location/${eaResult.street}">${eaResult.street}</a>
            </div>
            <div class="website">
                <a href="${eaResult.website}">${eaResult.website}</a>
            </div>
        </li>
        `
    }) 
};



