// For Animation on Card Flap
$(document).ready(function(){
    var zindex = 10;
    
    $("div.CoursesCard").click(function(e){
      e.preventDefault();
      var isShowing = false;
      if ($(this).hasClass("show")) {
        isShowing = true
      }
  
      if ($("div.CoursesCards").hasClass("showing")) {
        // already in view
        $("div.CoursesCard.show").removeClass("show");
        if (isShowing) {
          // reset the grid
          $("div.CoursesCards").removeClass("showing");
        } else {
          $(this).css({zIndex: zindex}).addClass("show");
        }
        zindex++;
      } else {
        // no cards in view
        $("div.CoursesCards").addClass("showing");
        $(this).css({zIndex:zindex}).addClass("show");
        zindex++;
      }
      
    });
});

// For Underlined Effect on Nav Options
var underlineMenuItems = document.querySelectorAll(".CoursesNavItems div");
underlineMenuItems[0].classList.add("active");
underlineMenuItems.forEach(function (item) {
    item.addEventListener("click", function () {
        underlineMenuItems.forEach(function (item) { return item.classList.remove("active"); });
        item.classList.add("active");
    });
});