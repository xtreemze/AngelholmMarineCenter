(function($) {
    $(function() {
        $(".dropdown-button").dropdown();
        $('.button-collapse').sideNav({
            menuWidth: 200, // Default is 240
            edge: 'left', // Choose the horizontal origin
            closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
        });
        $('.scrollspy').scrollSpy();
        $('.slider').slider({
            full_width: true,
            indicators: true,
            //height: 500
        });
        $('.modal-trigger').leanModal();

    }); // end of document ready
})(jQuery); // end of jQuery name space