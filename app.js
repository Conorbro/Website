var main = function() {

  $(".dropdown-menu").hide();

  $(".dropdown-toggle").click(function() {
      $(".dropdown-menu").toggle();
  });

  $(".photo-container").click(function() {
    $(".photo-container").fadeIn(400);
  });

};

$(document).ready(main);
