window.onload = function() {
 

    // Toggle footer color on click
    document.getElementById("footer-toggle").onclick = function (){
      let footer = document.getElementById("footer");
      if (footer.style.backgroundColor === "lightgreen") {
        footer.style.backgroundColor = "#4A4A4A"; // original color
      } else 
        footer.style.backgroundColor = "lightgreen";}
      }