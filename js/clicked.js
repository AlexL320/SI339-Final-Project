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

var button_two = document.querySelector("#button");
button_two.addEventListener("click", function() {
  console.log("clicked")
  var sections = document.querySelectorAll("section");
  sections.forEach((section,index) => {
    const stats = section.querySelector("#stats");
    const text = section.getElementsByTagName("p")[0]
    if (stats.style.display == "grid"){
      stats.style.display = "none";
      text.style.visibility = "hidden"
      button_two.innerHTML = "Not Keyboard Restricted";
      console.log("hide stats");
    }
    else {
      stats.style.display = "grid";
      text.style.visibility = "visible"
      button_two.innerHTML = "Keyboard Restricted";
      console.log("show stats");
    }
  })
})


document.getElementById("year").innerHTML = new Date().getFullYear();