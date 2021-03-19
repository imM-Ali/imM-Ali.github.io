
$("#button").on('click',function(){
   /*Changing the anchor tag text on click sourced from: https://www.techiedelight.com/replace-text-anchor-tag-javascript/*/
    if($("#Icon").hasClass("fas fa-lightbulb")){ $("#Icon").removeClass("fas fa-lightbulb").addClass("fas fa-lightbulb-on").addClass("text-warning");  
$(this).text('Turn Off');
}else{
$("#Icon").removeClass("fas fa-lightbulb-on").addClass("fas fa-lightbulb").removeClass("text-warning");  
$(this).text('Turn On');
}


});


function viewSource(){;
var source = "<html>";
source += document.getElementsByTagName('html')[0].innerHTML;
source += "</html>";
source = source.replace(/</g, "&lt;").replace(/>/g, "&gt;");
source = "<pre>"+source+"</pre>";
sourceWindow = window.open('','Source of page','height=800,width=800,scrollbars=1,resizable=1');
sourceWindow.document.write(source);
sourceWindow.document.close(); 
if(window.focus) sourceWindow.focus();
}  



