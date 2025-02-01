function MoveRandomEl(elm) {
    elm.style.position = "absolute";
    elm.style.top = Math.floor(Math.random() * 90 + 5) + "%";
    elm.style.left = Math.floor(Math.random() * 90 + 5) + "%";
}   

const MoveRandom = document.querySelector("#Move-Random");

MoveRandom.addEventListener("mouseenter", function(e) {
    MoveRandomEl(e.target);
});