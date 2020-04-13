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



});


window.onscroll = function() {myFunction()};

var navbar = document.getElementById("bottom-section");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}