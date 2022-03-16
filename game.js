
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
} 	
  	let button = document.querySelector("#button")
  	
  	
  	
  	button.addEventListener("click", function () {
  		let top = getRandomInt(100);
  		let left = getRandomInt(100);
  		modal.style.display = "block";
  		button.style.top = top;
  		button.style.left = left;
  	});
  	
  	

	
	


}
