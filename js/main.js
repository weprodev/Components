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