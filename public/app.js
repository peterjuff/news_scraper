$(document).ready(function() {
    console.log( "ready!" );
    
    $.ajax({ 
        method: "GET",
        url: "/find"

    }).done(function(response) {
        // var results = response.data;
        console.log(response);

        // var news = 

        // $("#newsHere").append(data);

    });
// Grab the articles as a json
$.getJSON("/articles", function(data) {
    // For each one
    for (var i = 0; i < data.length; i++) {
      // Display the apropos information on the page
      $("#newsHere").append("<p data-id='" + data[i]._id + "'>" + data[i].title + "<br />" + data[i].link + "</p>");
    }
  });
    







});




