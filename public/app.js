$( document ).ready(function() {
    console.log( "ready!" );
    
    $.ajax({ 
        method: "GET",
        url: "/find"

    }).then(function(data) {
        console.log(data);
    })











});




