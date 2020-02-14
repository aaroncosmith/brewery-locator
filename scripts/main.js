'use strict'
// const getUserInputButton = document.querySelector("#brewbutton")
// getUserInputButton.addEventListener('click', function(event) {
//     event.preventDefault();
//     console.log('clicked');});

// document.getElementById("brewbutton").onclick = function() {
//     document.getElementById("wholelist").innerHTML = "HeyHey";
// }

// document.getElementById("brewbutton").onclick = function() {
//     document.getElementById("firstcomp").innerHTML = "YUP";
// }

let a = document.getElementById('wholelist'); 
let arr = ["brew1", "brew2", "brew3"];

document.getElementById('brewbutton').onclick = display; 
console.log(a.value);



function display(){ 
    // console.log(arr); 

arr.forEach(indivbrew => {
    console.log(indivbrew); }
)}
