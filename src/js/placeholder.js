$.get("components/placeholder.html", function(data){ // Get the data from components/navbar.html
    $(".placeholder").replaceWith(data); //Find the nav element and replace it with the data
});

