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

		if (abortion && gay && police && capitalism && healthcare && climate && government && taxes && rights && whites){
			if (abortion === yes && gay === yes && police === yes && capitalism === no && healthcare === yes && climate === yes && government === yes && taxes === yes && rights === yes && whites === yes);
				document.getElementById("liberal").removeAttribute("class");
			} else if (abortion === yes && gay === yes && police === no && capitalism === yes && healthcare === no && climate === yes && government === yes && taxes === yes && rights === no && whites === no) {
				document.getElementById("liberal").removeAttribute("class");
			}	else if (abortion === yes && gay === yes && police === undecided && capitalism === undecided && healthcare === undecided && climate === undecided && government === undecided && taxes === undecided && rights === undecided && whites === undecided || abortion === yes && gay === yes && police === undecided && capitalism === yes && healthcare === no && climate === no && government === yes && taxes === yes && rights === no && whites === no) {
				document.getElementById("moderate").removeAttribute("class");
			} else if (abortion === no && gay === no && police === no && capitalism === yes && healthcare === no && climate === no && government === no && taxes === no && rights === no && whites === no) {
				document.getElementById("conservative").removeAttribute("class");
			} else {
				document.getElementById("undetermined").removeAttribute("class");
			}
		};
	};