var main = function() {

  $(".dropdown-toggle").click(function() {
      $(".dropdown-menu").toggle();
  });

  $(".photo-container").click(function() {
    $(".photo-container").fadeIn(20);
  });

};

$(document).ready(main);
