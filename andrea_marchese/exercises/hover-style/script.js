const p = document.querySelector("p");

p.addEventListener("mouseover", () => {
  p.style.color = "red";
});

p.addEventListener("mouseout", () => {
  p.style.color = "white";
});

p.addEventListener("mouseover", () => {
  p.style.fontSize = "50px";
});

p.addEventListener("mouseout", () => {
  p.style.fontSize = "30px";
});
