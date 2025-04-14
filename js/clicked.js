const sections = document.querySelectorAll("section");

sections.forEach((section, index) => {
  const image = section.getElementsByTagName("img")[0];

  if (image) { // Always good to check if image exists
    image.addEventListener("click", () => {
      console.log(`Image in section ${index + 1} was clicked`);
      const stats = section.querySelector("#stats");
      if (stats.style.display == "grid"){
        stats.style.display = "none";
        console.log("hide stats");
      }
      else {
        stats.style.display = "grid";
        console.log("show stats");
      }
    });
  }
});
