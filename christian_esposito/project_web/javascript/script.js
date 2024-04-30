const docTitle = document.title;
window.addEventListener("blur", () => {
    document.title = "Povero Gabbiano";
});

window.addEventListener("focus", ()=> {
    document.title = docTitle
})