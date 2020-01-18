/*========================================================================================
*********    
*******      SLIDER WITH THREE ROW
*****        THREE ROW AND MOVEMENT TWO ROW
***         
*/

$(document).ready(function(){

    $('#buttons > article').on('click', function(e){

        e.preventDefault();

        // GET WHICH TAG ELEMENT CLICKED (NTH-CHILD)
        var numNthChild = $(this).index(); 
       
        /*--------------------------------
        ***   
        **	 ADD MARGIN LEFT TO GALLERIES FOR SCROLL LEFT IMAGES
        */

            var galleryParent = $('#galleries');        
            galleryParent.css('margin-left', (numNthChild * 100 * -1) + '%' );

        /*--------------------------------
        ***   ADD ACTIVE CLASS TO ICON WHICH CLICKED
        **	  FIRST : REMOVE ACTIVE CLASS FROM PREVIOUS TAG 
        */

            $('#buttons > article').each(function(){
                $(this).removeClass('active');
                $(this).addClass('onlyStrock');
            });

            /** SECOND : ADD ACTIVE CLASS **/
            $(this).addClass('active');
            $(this).removeClass('onlyStrock');

        /*--------------------------------
        ***   
        **	 SCROLL THE CONTENT TO LEFT
        */

            $('.containArticles').css('margin-left', (numNthChild * 100 * -1) + '%' );


    });

});