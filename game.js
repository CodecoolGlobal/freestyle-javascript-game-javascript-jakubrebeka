
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
  	
  	button.addEventListener("click", function () {
  		modal.style.display = "block";
  		button.style.top = "50%";
  	});


}
