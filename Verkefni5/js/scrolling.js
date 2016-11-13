$(document).ready(function(){

/* insert element to click and element to scroll to */
$('#banner').click(function (){
                
           scrollToElement('#banner');               
    });
    $('#flex1').click(function (){
                
      scrollToElement('#flex1');               
    });
    $('#Layout').click(function (){
                
      scrollToElement('#Layout');               
    });
    $('#kort').click(function (){
                
      scrollToElement('#kort');               
    });
    $('#footer').click(function (){
                
      scrollToElement('#footer');               
    });

});

var scrollToElement = function(element)
{
$('body').animate({
               scrollTop: ($(element).offset().top)
           }, 1000);
}