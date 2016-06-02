$(window).scroll(function gridUpdate() {
  $('.grid').masonry({
  // options
  // itemSelector: '.grid-item',
  // columnWidth: '.gridItem',
    percentPosition: true,
  });
});
