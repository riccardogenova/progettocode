const docTitle = document.title;
window.addEventListener("blur", () => {
    document.title = "Povero Gabbiano";
});

window.addEventListener("focus", ()=> {
    document.title = docTitle
})

let img1 = document.getElementById("img1")
let img2 = document.getElementById("img2")
let img3 = document.getElementById("img3")

function dropDown1() {
    document.getElementById("myDropdown1").classList.toggle("show");
}
function dropDown2() {
    document.getElementById("myDropdown2").classList.toggle("show");
}
function dropDown3() {
    document.getElementById("myDropdown3").classList.toggle("show");
}


  img1.addEventListener("click", dropDown1)
  img2.addEventListener("click", dropDown2)
  img3.addEventListener("click", dropDown3)


  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }