
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
	count_score();

	}

  	button.addEventListener("click", function () {
  		let top = getRandomInt(98);
  		let left = getRandomInt(98);
  		modal.style.display = "block";
  		button.style.top = top;
  		button.style.left = left;
  	});
}


 function countdown(duration,display) {
 	let timer = duration, minutes, seconds;
 	setInterval(function () {
 		minutes = parseInt(timer / 60, 10);
 		seconds = parseInt(timer % 60, 10);

 		minutes = minutes < 10 ? "0" + minutes : minutes;
 		seconds = seconds < 10 ? "0" + seconds : seconds;

 		display.innerText = minutes + ":" + seconds;



 		if (--timer < 0) {
 			timer = duration;
 		}
 	}, 1000);
}
    window.onload = function (){
	    let time = document.getElementById("myBtn")
    time.addEventListener('click',(duration) =>{
	    let oneMinute = 60,
			 display = document.querySelector('#time');
	    countdown(oneMinute,display)

 }
 )}


function count_score(){
	let score_num = document.getElementById("score-num")
	let score = 0;
 	let pop = document.getElementById("button");
	pop.addEventListener("click", () =>{
		score += 1;
		console.log(score);
		score_num.innerText="Score: "+ score;
	})
}

function game_over(oneMinute){
	setTimeout(function () {
		
		}
	)


}