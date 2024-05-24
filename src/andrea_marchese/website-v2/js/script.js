// JavaScript
console.log("Hello, World!");
document.addEventListener("DOMContentLoaded", function () {
  const themeToggle = document.getElementById("theme-toggle");

  themeToggle.addEventListener("change", function () {
    if (this.checked) {
      // Attiva la modalità scura
      document.body.classList.add("dark");
    } else {
      // Disattiva la modalità scura
      document.body.classList.remove("dark");
    }
  });
});
