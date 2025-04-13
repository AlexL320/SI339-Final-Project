const images = document.querySelectorAll("section")

images.forEach((section, index) => {
    image = section.getElementsByClassName("img")[0];
    image.addEventListener('click', () => {
        console.log("Image was clicked")
    });
});