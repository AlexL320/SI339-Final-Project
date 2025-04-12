const army_button = document.getElementsByClassName("section")

Array.from(army_button).forEach(element => {
    var text = element.getElementsByTagName("p")[0];
    var image = element.getElementsByTagName("img")[0];
    if (image && text) {
        image[0].addEventListener("mouseover", function() {
            console.log("over")
            text[0].style.visibility = 'visible';
        });
        image[0].addEventListener("mouseout", function() {
            console.log("out")
            text[0].style.visibility = "hidden";
        });
    }
});

