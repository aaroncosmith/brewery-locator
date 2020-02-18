'use strict'

const brewbutton = document.getElementById("brewbutton");

brewbutton.addEventListener("click", function(e) {
    const brewLocation = document.getElementById("brewField").value;
    const brewState = document.getElementById("state-select").value;
    console.log(brewLocation, brewState);
    getBreweryByCity(brewLocation, brewState); 
});
