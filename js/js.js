$(document).ready(function(){
    $("#gen-button").on('click', function(){
   $.getJSON("/js/json/quotes.json", function(json){
      $("#gen").html(JSON.stringify(json)); 
   });
});
});