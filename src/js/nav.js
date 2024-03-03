$.get("components/navbar.html", function(data){ // Get the data from components/navbar.html
    $("nav").replaceWith(data); //Find the nav element and replace it with the data
});

