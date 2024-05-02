const clickbutton = document.getElementById("clickButton");
const image = document.getElementById("image");

function changeImg() {
  image.src =
    "https://pbs.twimg.com/profile_images/1701878932176351232/AlNU3WTK_400x400.jpg";
}
clickbutton.addEventListener("click", changeImg);
