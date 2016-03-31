(function($) {
    $(function() {

        $('.button-collapse').sideNav({
            menuWidth: 200, // Default is 240
            edge: 'left', // Choose the horizontal origin
            closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
        });
        $('.scrollspy').scrollSpy();
        $('.slider').slider({
            full_width: true,
            indicators: true,
            height: 800
        });

    }); // end of document ready
})(jQuery); // end of jQuery name space