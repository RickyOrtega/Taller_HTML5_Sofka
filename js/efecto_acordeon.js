function acordeon(elemento){
    elemento.styles.display = "block";
}

var acordeones = document.getElementsByClassName("elemento_acordeon");
var descripcion = document.getElementsByClassName("descripcion");
var i;

for (i = 0; i < acordeones.length; i++) {
    acordeones[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var descripcion = this.nextElementSibling;
        if (descripcion.style.display === "block") {
            descripcion.style.display = "none";
        } else {
            descripcion.style.display = "block";
        }
    });
}