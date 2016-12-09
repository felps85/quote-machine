
    var quote = "";
    var quoted = "";

$("#getQuoteButton").click(function getQuote(){ $.getJSON("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=", function(a) {

    quote = a[0].content;
    quoted = a[0].title;


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
