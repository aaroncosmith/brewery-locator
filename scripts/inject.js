
function injectHTML(results) {
    const orderedList = document.getElementById('firstorder');
    orderedList.innerHTML = "";

    results.forEach(function(eaResult) {
        orderedList.innerHTML = orderedList.innerHTML + `
        <li class="brew-list">
            <div class="brew-title">
                ${eaResult.name}
            </div>
            <div class="brew-type">
                Brewery Type: ${eaResult.brewery_type}
            </div>
            <div class="address-link">
                <a href="https://www.google.com/maps/dir/Current+Location/${eaResult.street},${eaResult.city},${eaResult.state},${eaResult.postal_code} $">${eaResult.street}, ${eaResult.city}, ${eaResult.state}, ${eaResult.postal_code}</a>
            </div>
            <div class="website">
                <a href="${eaResult.website_url}">${eaResult.website_url}</a>
            </div>
        </li>
        `
    }) 
};
