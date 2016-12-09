
    var quote = "";
    var quoted = "";

$("#getQuoteButton").click(function getQuote(){ $.getJSON("https://crossorigin.me/http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?", function(a) {

    quote = a.quoteText;
    quoted = a.quoteAuthor;


$("#quote").html(quote);
$("#quoted").html(quoted);
                                                        });
                                         });

$("#share").click(function shareContent(){

$("#share").attr("href", function() { return $(this).attr("href") + quote + "- " + quoted });

});


$(document).keydown(function( event ) {
if ( event.which == 32 ) {
$("#getQuoteButton").click();
$("#getQuoteButton").toggleClass("button-nice-active");

} else if(event.which == 84){
$("#share")[0].click();
$("#share").toggleClass("button-nice-active");
};
});

$(document).keyup(function( event ) {
if ( event.which == 32 ) {
$("#getQuoteButton").toggleClass("button-nice-active");

} else if(event.which == 84){
$("#share").toggleClass("button-nice-active");
};
});


  
