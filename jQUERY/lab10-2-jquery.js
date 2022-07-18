//LAB 10 - 2 INVENTORY PAGE
// alert("2 - connected");
jQuery(document).ready(function () { 
    jQuery('.desc').css('display', 'none'); 
    $('tr').click(function(){
        jQuery('.desc').css('display', 'none');  //hide content
        $(this).find('td').last().show();   //display content
    });
$('tr').hover(
    function(){
        $(this).css('background', 'red');   //changes background colour
    },
    function(){
        $(this).css('background', 'white');  // changes background colour
}
);
});