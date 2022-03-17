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

let audio = new Audio('../static/music/background.mp3');
	audio.play()


function initGame() {
    	// Get the modal
	const modal = document.getElementById("myModal");

	// Get the button that opens the modal
	const btn = document.getElementById("myBtn");

	// When the user clicks the button, open the modal 
	btn.onclick = function() {
  	modal.style.display = "block";
	alert('Hit only the ALERT button as many times as possible. Do not let the alerts to trick you!')
  	const button = document.querySelector("#button")
	const mine = document.querySelector("#mine")
	count_score();
	let audio = new Audio('../static/music/background.mp3');
	audio.play();
	}
	let mines = document.getElementsByClassName("mine")
	let mine2 = document.getElementById("mine2")
	let mine3 = document.getElementById("mine3")
	let buttons = [mine, mine2, mine3]

	for (let i=0; i<mines.length; i++) {
		button.addEventListener("click", function () {
		let top = getRandomInt(98);
		let left = getRandomInt(98);
		mines[i].style.top = top;
		mines[i].style.left = left;
		mines[i].style.opacity = "100"
	});
		buttons[i].addEventListener("click", function () {
		let top = getRandomInt(98);
		let left = getRandomInt(98);
		modal.style.display = "block";
  		buttons[i].style.top = top;
  		buttons[i].style.left = left;
	})
		}
	  	button.addEventListener("click", function () {
  		let top = getRandomInt(98);
  		let left = getRandomInt(98);
  		modal.style.display = "block";
  		button.style.top = top;
  		button.style.left = left;
  	});
	restart()
	}

 function countdown(duration,display) {
 	let timer = duration, minutes, seconds;
	 let openedWindow= document.getElementById("myModal")
	 let restart = document.getElementsByClassName("restart")
	 let start = document.getElementById("myBtn")
 	setInterval(function () {
 		minutes = parseInt(timer / 60, 10);
 		seconds = parseInt(timer % 60, 10);

 		minutes = minutes < 10 ? "0" + minutes : minutes;
 		seconds = seconds < 10 ? "0" + seconds : seconds;

 		display.innerText = minutes + ":" + seconds;



 		if (--timer < 0) {
			 openedWindow.style.display = "none";
start.style.display = "none";
			 restart[0].classList.remove("hide_button");

 		}
 	}, 1000);
}
    window.onload = function (){
	    let time = document.getElementById("myBtn")
    time.addEventListener('click',(duration) =>{
	    let oneMinute = 5,
			 display = document.querySelector('#time');
	    countdown(oneMinute,display)




 })}

let score = 0;


function count_score() {
	let score_num = document.getElementById("score-num")
	let pop = document.getElementById("button");
	let mineClick = document.getElementsByClassName("mine");

	let asd = document.querySelector("#result")
	pop.addEventListener("click", () =>{
		let sound = new Audio('../static/music/success.wav');
		sound.play();
		score += 1;
		console.log(score);
		score_num.innerText="Score: "+ score;
		asd.setAttribute('value',`${score}`);
	})

	for (let i=0; i<mineClick.length; i++) {
		mineClick[i].addEventListener('click', () => {

		let sound2 = new Audio('../static/music/miss.wav');
		sound2.play();
		score -= 1;
		console.log(score);
		score_num.innerText="Score: "+ score;
		asd.setAttribute('value',`${score}`);
	})
}}

function restart(){
		let restart = document.getElementsByClassName("restart")
		restart[0].addEventListener('click', () => {
			initGame()
			})
}
