// change color of date on hover
$('.date').hover(
  function() {
    $(this).css("background-color", "#47B2F4"); // twitter blue
  }, function() {
    $(this).css("background-color", "#F8F8F8");
  }
);

$('.date').click(function() {
  // remove old content:
  $("#tweet").empty();

  // display new content:

  // get date from clicked item
  var date = this.id;

  // open the json file
  $.getJSON("makevember/tweets2017.json", function(id) {
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

  // scroll to tweet
  // https://stackoverflow.com/a/9348152/7564623
  $('html,body').animate({
     scrollTop: $("#tweet").offset().top
  });

});
