/*========================================================================================
*********   ALL OF THE JAVASCRIPT CODE 
*******      
*****       
***         
*/

$(document).ready(function(){

    /*--------------------------------
    ***  NAVIGATION ON SMALL DEVICE
    **   AND OPEN AND CLOSE
    */

    $('#showNav').on('click',function(){
        $(this).siblings('nav').addClass('showNavigation');
    });

    $('#hideNav').on('click',function(){
        $(this).parent('nav').removeClass('showNavigation');
    });

    $("#showNav").click(function(){
      $("#nav-list").animate({
          left : 0,
          opacity : 1,
          width : "100%",
      },500,);
      $("#hideNav").css("display", "block");
      $(this).hide();
  });

  $("#hideNav").click(function(){
      $("#nav-list").animate({
          left : "-100%",
          opacity : 0,
          width : "100%",
      },500,);
      $("#showNav").css("display", "block");
      $(this).hide();
  });
  $("#nav-list").scroll(function(){
      $(".logo").hide();
      $("#nav-list").css("padding-top", "0em");
  });


});


window.onscroll = function() {myFunction()};

var navbar = document.getElementById("container-top");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}


// $(document).ready(function() {
//   $("#showNav").click(function() {
//     $("ul.nav-list").addClass('show');
//   });

//   $("#hideNav").click(function() {
//     $("ul.nav-list").removeClass('show');
//   });  
// });


$(document).ready(function(){

  /*--------------------------------
  ***  NAVIGATION ON SMALL DEVICE
  **   AND OPEN AND CLOSE
  */

  



});