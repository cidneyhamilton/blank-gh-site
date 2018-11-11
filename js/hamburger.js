(function() {

	var $ = window.jQuery;

	var expanded = false;

	var toggleNav = function() {
		var $hamburger = $(".hamburger");
		var $header = $(".site-header")
		$hamburger.toggleClass("is-active");
		$header.toggleClass("opened");
		expanded = !expanded;
		$hamburger.attr("aria-expanded", expanded);
		
	};

	$(document).ready(function() {
		$(".hamburger").click(function() {
			toggleNav();
		});
	});

})(this);