$('.date').click(function() {
  // remove old content:
  $("#tweet").empty();

  // display new content:

  // get date from clicked item
  var date = this.id;

  // open the json file
  $.getJSON("tweets2017.json", function(id) {
    // get the tweetID based on the date in the json
    var tweetID = id[date];

    // Tweet embed code written by Amit Agarwal amit@labnol.org
    // https://ctrlq.org/code/19933-embed-tweet-with-javascript
    var location = document.getElementById("tweet");

    twttr.widgets.createTweet(
    tweetID, location,
    {
      conversation : 'none',    // or all
      cards        : 'visable',  // or visible
      linkColor    : '#cc0000', // default is blue
      theme        : 'light'    // or dark
    });
  });
});
