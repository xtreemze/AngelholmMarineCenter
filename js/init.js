(function ($) {
	$(function () {
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
			time_constant: 800,
			dist: -12,
			shift: 2,
			padding: 24,
			//full_width: 100
		});

var options = [
    {selector: '#sponsors', offset: 500, callback: function(){
	$('.carousel').carousel('prev', [18]);
}}
  ];

  Materialize.scrollFire(options);
		
	}); // end of document ready
})(jQuery); // end of jQuery name space

