$(document).ready(function(){
    
    var quoteContent = [];
    
    $("#gen-button").on('click', function(){
   $.getJSON("/js/json/quotes.json", function(json){
      var html = "";
       var id = Math.floor(Math.random() * 2);
       
       json = json.filter(function(val){
          return (val.id == id); 
       });
       
       json.forEach(function(val){
           html += val.quote + "<br>" + "<span class='author'>" + "-" + val.author + "</span>";
           quoteContent = [val.quote, val.author];
           quoteContent = quoteContent.join(' ');
       });
       
       $("#gen").html(html);
       
   });
});
    
    $("#twitter-button").on('click', function(){
        quoteContent = quoteContent.replace(';', '%3B')
        quoteContent = quoteContent.replace(',', '%2C')
        var url = quoteContent.split(' ').join('%20');
        
        window.open("https://twitter.com/intent/tweet?text=" + url, 'popUpWindow')
        
        //$("#tweet").html(
        //"<a href='https://twitter.com/intent/tweet?text=" + url + "' id='twitter-button' class='twitter btn btn-social btn-twitter'><span class='fa fa-lg fa-twitter'><span class='twitter-text'> Tweet</span></span></a>"
        //);
        console.log(url);
        
    });
    
});