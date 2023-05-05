function hideResults() {
	document.getElementById("liberal").setAttribute("class", "hidden");
	document.getElementById("moderate").setAttribute("class", "hidden");
	document.getElementById("conservative").setAttribute("class", "hidden");
	document.getElementById("undetermined").setAttribute("class", "hidden");
}

window.onload = function() {

	document.querySelector("form").onsubmit = function(event) {
		event.preventDefault();
		hideResults();
		const yes = "yes";
		const no = "no";
		const abortion = document.querySelector("input#abortion").value.toLowerCase();
		const gay = document.querySelector("input#gay").value.toLowerCase();
		const police = document.querySelector("input#police").value.toLowerCase();

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
		};
	};