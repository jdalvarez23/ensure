$(document).ready(function() {
  $('.btn').on("click", function() {
    $(this).blur();
  });
});

// $(document).ready(function() {
//   $('#main-content').fadeIn(1000);
// });

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
  $('a.page-scroll').bind('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
  });
});
