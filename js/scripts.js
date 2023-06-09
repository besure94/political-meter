window.addEventListener("load", function() {
	let form = document.querySelector("form");
	let resetBtn = document.getElementById("reset");
	let liberal = document.getElementById("liberal");
	let moderate = document.getElementById("moderate");
	let conservative = document.getElementById("conservative");
	let undetermined = document.getElementById("undetermined");

	form.addEventListener("submit", function(event) {
		const yes = "yes";
		const no = "no";
		const abortion = document.getElementById("abortion").value.toLowerCase();
		const gay = document.getElementById("gay").value.toLowerCase();
		const police = document.getElementById("police").value.toLowerCase();

		liberal.setAttribute("class", "hidden");
		moderate.setAttribute("class", "hidden");
		conservative.setAttribute("class", "hidden");
		undetermined.setAttribute("class", "hidden");
		event.preventDefault();

		if (abortion && gay && police) {
			if (abortion === yes && gay === yes && police === yes) {
				document.getElementById("liberal").removeAttribute("class");
			} else if (abortion === yes && gay === yes && police === no || abortion === no && gay === no && police === yes){
				document.getElementById("moderate").removeAttribute("class");
			} else if (abortion === no && gay === no && police === no){
				document.getElementById("conservative").removeAttribute("class");
			} else {
				document.getElementById("undetermined").removeAttribute("class");
			}
		}
	});

	form.addEventListener("submit", function() {
		resetBtn.removeAttribute("class");
	});

	form.addEventListener("submit", function() {
		window.alert("Do you want to learn more about the political spectrum? Visit https://en.wikipedia.org/wiki/Political_spectrum for more information!");
	});

	resetBtn.addEventListener("click", function() {
		liberal.setAttribute("class", "hidden");
		moderate.setAttribute("class", "hidden");
		conservative.setAttribute("class", "hidden");
		undetermined.setAttribute("class", "hidden");
		document.getElementById("abortion").value = null;
		document.getElementById("gay").value = null;
		document.getElementById("police").value = null;
	});
});