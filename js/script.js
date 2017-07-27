let holes = document.querySelectorAll('.hole');

let face = "images/josephine.jpg";

let alea = Math.floor(Math.random()*12);
console.log(alea);

$(document).ready(function(){
	holes[alea].src = face;
});