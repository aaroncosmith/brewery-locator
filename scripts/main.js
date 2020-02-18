'use strict'
// const getUserInputButton = document.querySelector("#brewbutton")
// getUserInputButton.addEventListener('click', function(event) {
//     event.preventDefault();
//     console.log('clicked');});

// document.getElementById("brewbutton").onclick = function() {
//     function("getBreweryByCity");

// document.getElementById("brewbutton").onclick = function() {
//     document.getElementById("firstcomp").innerHTML = "YUP";
// }

// let a = document.getElementById('wholelist'); 
// let arr = ["brew1", "brew2", "brew3"];

// document.getElementById('brewbutton').onclick = display; 
// console.log(a.value);



// function display()

//     injectHTML();
//     };
    // console.log(arr); 

// brewArray.forEach(indivbrew => {
    
//     console.log(indivbrew); }
// )}

const brewLocation = document.getElementById("brewField").value;
const brewbutton = document.getElementById("brewbutton");

brewbutton.addEventListener("click", function(e) {
    const brewLocation = document.getElementById("brewField").value;
    console.log(brewLocation);
    getBreweryByCity(brewLocation); 
});