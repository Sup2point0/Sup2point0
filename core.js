var secs = document.getElementsByClassName("collapsible");

for (let i = 0; i < secs.length; i++) {
  secs[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollheight + "px";
    }
  });
}
