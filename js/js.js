$(document).ready(function(){
    $("#gen-button").on('click', function(){
   $.getJSON("/js/json/quotes.json", function(json){
      var html = "";
       var id = Math.floor(Math.random() * 2);
       
       json = json.filter(function(val){
          return (val.id == id); 
       });
       
       json.forEach(function(val){
           html += val.quote + "<br>" + "<span class='author'>" + "-" + val.author + "</span>";
       });
       
       $("#gen").html(html);
       
   });
});
    
    $("#twitter-button").on('click', function(){
       window.alert("Works!");
    });
    
});