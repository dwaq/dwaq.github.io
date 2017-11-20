$('.date')
  .mouseover(function() {
    //$( "#tweet" ).html(this.id);
    var date = this.id;
    $.getJSON( "tweets2017.json", function( tweetID ) {
      //console.log(tweetID[date]);
      var id = tweetID[date];

      // Written by Amit Agarwal amit@labnol.org
      // https://ctrlq.org/code/19933-embed-tweet-with-javascript
      var tweet = document.getElementById("tweet");
      // /var id = tweet.getAttribute("tweetID");

      twttr.widgets.createTweet(
        id, tweet,
        {
          conversation : 'none',    // or all
          cards        : 'visable',  // or visible
          linkColor    : '#cc0000', // default is blue
          theme        : 'light'    // or dark
        });

    });
  })
  .mouseout(function() {
    $("#tweet").empty();
  });
