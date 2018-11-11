(function() {

	var expanded = false;
	
	var toggleNav = function() {
		var hamburgerButton = document.getElementById("hamburger_button");
		var siteHeader = document.getElementById("site_header");
		hamburgerButton.classList.toggle("is-active");
		siteHeader.classList.toggle("opened");

		expanded = !expanded;
		hamburgerButton.setAttribute("aria-expanded", expanded);
	};

	document.addEventListener("DOMContentLoaded", function() {
		var hamburgerButton = document.getElementById("hamburger_button");
		hamburgerButton.addEventListener("click", toggleNav, false)
	});
	
})(this);