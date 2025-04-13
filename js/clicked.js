const sections = document.querySelectorAll("section");

sections.forEach((section, index) => {
  const image = section.getElementsByClassName("img")[0];

  if (image) { // Always good to check if image exists
    image.addEventListener("click", () => {
      console.log(`Image in section ${index + 1} was clicked`);
    });
  }
});
