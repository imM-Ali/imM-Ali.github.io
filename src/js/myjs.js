
$("#button").on('click',function(){
   /*Changing the anchor tag text on click sourced from: https://www.techiedelight.com/replace-text-anchor-tag-javascript/*/
    if($("#Icon").hasClass("fas fa-lightbulb")){ $("#Icon").removeClass("fas fa-lightbulb").addClass("fas fa-lightbulb-on").addClass("text-warning");  
$(this).text('Turn Off');
}else{
$("#Icon").removeClass("fas fa-lightbulb-on").addClass("fas fa-lightbulb").removeClass("text-warning");  
$(this).text('Turn On');
}


});

