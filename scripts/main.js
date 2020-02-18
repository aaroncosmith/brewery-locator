'use strict'

const brewbutton = document.getElementById("brewbutton");

brewbutton.addEventListener("click", function(e) {
    const brewLocation = document.getElementById("brewField").value;
    console.log(brewLocation);
    getBreweryByCity(brewLocation); 
});
