// change color of date on hover
$('.date').hover(
  function() {
    $(this).css("background-color", "#47B2F4"); // twitter blue
  }, function() {
    $(this).css("background-color", "#F8F8F8");
  }
);

// get the current year from the page name
// https://stackoverflow.com/a/30678857
function getCurrentYear() {
  var pathName = window.location.pathname;
  var pageName = pathName.substring(pathName.lastIndexOf("/") + 1);
  return pageName.substring(11, 15);
}

$('.date').click(function() {
  // remove old content:
  $("#tweet").empty();

  // display new content:

  // get date from clicked item
  var date = this.id;

  // make the correct file based on the webpage's year
  var filename = "makevember/tweets".concat(getCurrentYear()).concat(".json");

  // open the json file
  $.getJSON(filename, function(id) {
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
