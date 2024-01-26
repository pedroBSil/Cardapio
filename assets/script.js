$(document).ready(function() {
   
    $("#logo").click(function() {
      $("nav").toggleClass("open");
    });
  
    
    $(".menu-card").click(function() {
      $(".menu-card").removeClass("active");
      $(this).addClass("active");
  
      $(".menu-card ul").slideUp();
      $(this).find("ul").slideDown();
    });
  });
  