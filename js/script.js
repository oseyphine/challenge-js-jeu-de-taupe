let boutons = document.querySelectorAll('button');
let holes = document.querySelectorAll('.hole');
let face = "images/josephine.jpg";
let face2 = "file:///Users/josephinelegleut/Desktop/Simplon/Exercices/challenge-js-jeu-de-taupe/images/josephine.jpg"
let pile = "images/logorond.png";
let score = 0;
let scoreShow = document.querySelectorAll('span');
let oneAtTheTime = 0;
let timeTab = [];

let setIntervalReveal;
let setIntervalHide

function move(){
	if(timeTab.length>1){

		timeTab = [];
	} else {
		oneAtTheTime++;
		timeTab.push(oneAtTheTime);
		console.log(timeTab);
	}	
	setIntervalReveal = window.setInterval(reveal, 1000);
	setIntervalHide = window.setInterval(hide, 1500);
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
// CA SERT POUR LE SCORE
	for(let i=0; i<holes.length; i++){
		holes[i].addEventListener('click', function(e) {
			console.log(holes[i].src)
			console.log(e.currentTarget.src)
			console.log(face)			
			if(holes[i].src == face2){
				score++;
				scoreShow[0].innerHTML = score;
				console.log(scoreShow);
				console.log(scoreShow.innerHTML);
				console.log("Score : " + score);
			}
		})
	}

function stop(){
    clearInterval(setIntervalReveal);
    clearInterval(setIntervalHide);
}
function reset(){
for(let i=0; i<holes.length; i++){
		holes[i].src = pile;
		// console.log(holes[i].src)
	}
	stop();
	score = "";
	scoreShow[0].innerHTML = score;

	// alert('Patience, la fonction arrive ! ;)')
}