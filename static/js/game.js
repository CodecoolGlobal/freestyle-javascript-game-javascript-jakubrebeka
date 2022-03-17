function success() {
	 if(document.getElementById("name").value==="") {
            document.getElementById('myBtn').disabled = true;
        } else {
            document.getElementById('myBtn').disabled = false;
        }
    }


initGame();


function getRandomInt(max) {
  		return `${Math.floor(Math.random() * max)}%`;
	}

function initGame() {
    	// Get the modal
	const modal = document.getElementById("myModal");

	// Get the button that opens the modal
	const btn = document.getElementById("myBtn");

	// When the user clicks the button, open the modal 
	btn.onclick = function() {
  	modal.style.display = "block";

  	const button = document.querySelector("#button")
	const mine = document.querySelector("#mine")
	count_score();
	let audio = new Audio('../static/music/background.mp3');
	audio.play();
	}
	let mine = document.getElementById("mine")
	let mine2 = document.getElementById("mine2")
	let mine3 = document.getElementById("mine3")
	let buttons = [mine, mine2, mine3]

	for (let i=0; i<buttons.length; i++) {
		button.addEventListener("click", function () {
		let top = getRandomInt(98);
		let left = getRandomInt(98);
		buttons[i].style.top = top;
		buttons[i].style.left = left;
	});
		buttons[i].addEventListener("click", function () {
		let top = getRandomInt(98);
		let left = getRandomInt(98);
		modal.style.display = "block";
  		buttons[i].style.top = top;
  		buttons[i].style.left = left;
	})

 function countdown(duration,display) {
 	let timer = duration, minutes, seconds;
	 let openedWindow= document.getElementById("myModal")
	 let restart = document.getElementById("restart")
	 let start = document.getElementById("myBtn")
 	setInterval(function () {
 		minutes = parseInt(timer / 60, 10);
 		seconds = parseInt(timer % 60, 10);

 		minutes = minutes < 10 ? "0" + minutes : minutes;
 		seconds = seconds < 10 ? "0" + seconds : seconds;

 		display.innerText = minutes + ":" + seconds;



 		if (--timer < 0) {
start.style.display = "none";
			 restart.classList.remove("hide_button");
	openedWindow.style.display = "none";

 		}
 	}, 1000);
}
    window.onload = function (){
	    let time = document.getElementById("myBtn")
    time.addEventListener('click',(duration) =>{
	    let oneMinute = 5,
			 display = document.querySelector('#time');
	    countdown(oneMinute,display)


 }
 )}


function count_score() {
	let score_num = document.getElementById("score-num")
	let score = 0;
	let pop = document.getElementById("button");
	pop.addEventListener("click", () => {
		let sound = new Audio('../static/music/success.wav');
		sound.play();
		score += 1;
		console.log(score);
		score_num.innerText = "Score: " + score;
	})

	let mineClick = document.getElementsByClassName("mine");
	for (let i = 0; i < mineClick.length; i++) {
		mineClick[i].addEventListener('click', () => {
			let sound2 = new Audio('../static/music/miss.wav');
			sound2.play();
			score -= 1;
			console.log(score);
			score_num.innerText = "Score: " + score;
		})
	}
}
