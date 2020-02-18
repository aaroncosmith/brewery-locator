
function injectHTML(results) {
    const orderedList = document.getElementById('firstorder');
    orderedList.innerHTML = "";

    results.forEach(function(eaResult) {
        orderedList.innerHTML = orderedList.innerHTML + `
        
        
        <li class="list-group-item">
            <div class="brew-title">
                ${eaResult.name}
            </div>
            <div class="brew-type">
                Brewery Type: ${eaResult.brewery_type.slice(0,1).toUpperCase() + eaResult.brewery_type.slice(1)}
            </div>
            <div class="address-link">
                <a href="https://www.google.com/maps/dir/Current+Location/${eaResult.street},${eaResult.city},${eaResult.state},${eaResult.postal_code} $">${eaResult.street}, ${eaResult.city}, ${eaResult.state}, ${eaResult.postal_code}</a>
            </div>
            <div class="website">
                <a href="${eaResult.website_url}">Go to Brewery Website</a>
            </div>
        </li>
        `
    }) 
};

function injectStatesToSelect(){
    const states = ["Alaska",
                  "Alabama",
                  "Arkansas",
                  "American Samoa",
                  "Arizona",
                  "California",
                  "Colorado",
                  "Connecticut",
                  "District of Columbia",
                  "Delaware",
                  "Florida",
                  "Georgia",
                  "Guam",
                  "Hawaii",
                  "Iowa",
                  "Idaho",
                  "Illinois",
                  "Indiana",
                  "Kansas",
                  "Kentucky",
                  "Louisiana",
                  "Massachusetts",
                  "Maryland",
                  "Maine",
                  "Michigan",
                  "Minnesota",
                  "Missouri",
                  "Mississippi",
                  "Montana",
                  "North Carolina",
                  " North Dakota",
                  "Nebraska",
                  "New Hampshire",
                  "New Jersey",
                  "New Mexico",
                  "Nevada",
                  "New York",
                  "Ohio",
                  "Oklahoma",
                  "Oregon",
                  "Pennsylvania",
                  "Puerto Rico",
                  "Rhode Island",
                  "South Carolina",
                  "South Dakota",
                  "Tennessee",
                  "Texas",
                  "Utah",
                  "Virginia",
                  "Virgin Islands",
                  "Vermont",
                  "Washington",
                  "Wisconsin",
                  "West Virginia",
                  "Wyoming"];
    const statesSelect = document.getElementById('state-select');
    states.forEach(state => {
        statesSelect.innerHTML = statesSelect.innerHTML + `
        <option value="${state}">${state}</option>`
    });
}

injectStatesToSelect();