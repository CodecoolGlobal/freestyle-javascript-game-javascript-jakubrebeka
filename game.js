initGame();

function initGame() {

    	// Get the modal
	let modal = document.getElementById("myModal");

	// Get the button that opens the modal
	let btn = document.getElementById("myBtn");

	// When the user clicks the button, open the modal 
	btn.onclick = function() {
  	modal.style.display = "block";
	}
	score();
}
function score(){
	var score_num = document.getElementById("score-num")
	var score = 0;
 	var pop = document.getElementById("button");
	pop.addEventListener("click", () =>{
		score += 1;
		console.log(score);
		score_num.innerText="Score: "+ score;
	})}