var showbutton = document.getElementById("showbutton");
var hidebutton = document.getElementById("hidebutton");
var paragraph = document.getElementById("content");

showbutton.addEventListener("click", function showContent() {
  paragraph.style.display = "block";
});

hidebutton.addEventListener("click", function hideContent() {
  paragraph.style.display = "none";
});
