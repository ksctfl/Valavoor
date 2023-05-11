// Get the modal element
var modal = document.getElementById("modal");

// Get the close button element
var closeButton = document.getElementsByClassName("close")[0];

// When the page loads, show the modal
window.onload = function() {
	modal.style.display = "flex";
	document.body.classList.add("modal-open");
}

// When the user clicks the close button, hide the modal
closeButton.onclick = function() {
	modal.style.display = "none";
	document.body.classList.remove("modal-open");
}

// When the user clicks anywhere outside the modal, hide it
window.onclick = function(event) {
	if (event.target == modal) {
		modal.style.display = "none";
		document.body.classList.remove("modal-open");
	}
}