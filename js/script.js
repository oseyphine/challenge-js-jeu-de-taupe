let holes = document.querySelectorAll('.hole');
let face = "images/josephine.jpg";
let face2 = "file:///Users/josephinelegleut/Desktop/Simplon/Exercices/challenge-js-jeu-de-taupe/images/josephine.jpg"
let pile = "images/logorond.png";
let score = 0;
let scoreShow = document.querySelectorAll('span');

let timeOut;
let setInterval;


function move(){
	setInterval = window.setInterval(reveal, 1000);
	setInterval = window.setInterval(hide, 1500);
}

function reveal(){
	let alea = Math.floor(Math.random()*12);
	let taupe = holes[alea];
	// console.log(taupe);
	taupe.src = face;
	// console.log(taupe.src)	
}

function hide(){
	for(let i=0; i<holes.length; i++){
		holes[i].src = pile;
		// console.log(holes[i].src)
	}
}

// function score(){
	// holes[0].src = face;

	for(let i=0; i<holes.length; i++){
		holes[i].addEventListener('click', function() {
			// console.log(holes[i].src)
			// console.log(face)			
			if(holes[i].src == face2){
				score++;
				scoreShow[0].innerHTML = score;
				console.log(scoreShow);
				console.log(scoreShow.innerHTML);
				console.log("Score : " + score);
			}
		})
	}
// }

function stop(){
	alert('Patience, la fonction arrive ! ;)')
}
function reset(){
	alert('Patience, la fonction arrive ! ;)')
}