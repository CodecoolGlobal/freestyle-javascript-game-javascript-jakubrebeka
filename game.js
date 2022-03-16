
initGame();

function initGame() {


    	// Get the modal
	const modal = document.getElementById("myModal");

	// Get the button that opens the modal
	const btn = document.getElementById("myBtn");

	// When the user clicks the button, open the modal 
	btn.onclick = function() {
  	modal.style.display = "block";
	}
  	let button = document.querySelector("#button")

	count_score();
  	button.addEventListener("click", function () {
  		modal.style.display = "block";
  		button.style.top = "50%";
  	});
}

function count_score(){
	var score_num = document.getElementById("score-num")
	var score = 0;
 	var pop = document.getElementById("button");
	pop.addEventListener("click", () =>{
		score += 1;
		console.log(score);
		score_num.innerText="Score: "+ score;
	})}
