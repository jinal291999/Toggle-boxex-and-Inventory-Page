//LAB 10 - 1 FAQ PAGE
//  alert("1 - connected")

jQuery(document).ready(function () {
    jQuery('.contentBox').css('display', 'none');//SELECT BY CLASS
$('h2').click(function(){
    $(this).next('p').slideToggle();
});
$('p').hover(
    function(){$(this).addClass('textHovered');},
    function(){$(this).removeClass('textHovered');}
);

});
