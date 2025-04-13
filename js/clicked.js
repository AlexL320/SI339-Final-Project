const sections = document.querySelectorAll("section");

sections.forEach((section, index) => {
  const image = section.getElementsByTagName("img")[0];

  if (image) { // Always good to check if image exists
    image.addEventListener("click", () => {
      console.log(`Image in section ${index + 1} was clicked`);
      const stats = document.getElementById("stats");
      if (stats.style.display == "block"){
        stats.style.display = "none";
        console.log("hide stats");
      }
      else if(stats.style.display == "none"){
        stats.style.display = "block";
        console.log("show stats");
      }
    });
  }
});
