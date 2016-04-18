(function ($) {
	$(function () {
		//$(".dropdown-button").dropdown();
		$('.button-collapse').sideNav({
			menuWidth: 320, // Default is 240
			edge: 'left', // Choose the horizontal origin
			closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
		});
		$('.scrollspy').scrollSpy();
		$('.slider').slider({
			full_width: true,
			indicators: true,
			height: 600,
			transition: 500,
			interval: 6000
		});
		$('.modal-trigger').leanModal();
		$('.carousel').carousel({
			time_constant: 200,
			dist: -50,
			shift: 40,
			padding: 50,
			//full_width: -100
		});
		nextCarousel();
	}); // end of document ready
})(jQuery); // end of jQuery name space
var intervalID = window.setInterval(nextCarousel, 3000);

function nextCarousel() {
	$('.carousel').carousel('next');
}
