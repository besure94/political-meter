function hideResults() {
	document.getElementById("liberal").setAttribute("class", "hidden");
	document.getElementById("moderate").setAttribute("class", "hidden");
	document.getElementById("conservative").setAttribute("class", "hidden");
}

window.onload = function() {
	hideResults();

	document.querySelector("form").onsubmit = function(event) {
		event.preventDefault();
		hideResults();
		const abortion = document.querySelector("input#abortion").value;
		const gay = document.querySelector("input#gay").value;
		const police = document.querySelector("input#police").value;
		const capitalism = document.querySelector("input#capitalism").value;
		const healthcare = document.querySelector("input#healthcare").value;
		const climate = document.querySelector("input#climate").value;
		const government = document.querySelector("input#government").value;
		const taxes = document.querySelector("input#taxes").value;
		const rights = document.querySelector("input#rights").value;
		const whites = document.querySelector("input#whites").value;

	}
}