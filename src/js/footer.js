$.get("components/footer.html", function(data){ // Get the data from components/navbar.html
    $("footer").replaceWith(data); //Find the nav element and replace it with the data
});

