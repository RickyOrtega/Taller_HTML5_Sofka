//Función que cambia el tema de la página
function cambiarTema(colorBody, colorHeader, colorMain, colorAside, colorBotonHover, colorEspacioBotones, colorLetras) {
    var body = document.querySelector("body");
    var header = document.querySelector("header");
    var main = document.querySelector("main");
    var aside = document.querySelector("aside");
    var boton = document.querySelectorAll(".boton");
    var botones = document.querySelector(".botones");

    body.style.backgroundColor = colorBody;
    header.style.backgroundColor = colorHeader;
    main.style.backgroundColor = colorMain;
    aside.style.backgroundColor = colorAside;
    botones.style.backgroundColor = colorEspacioBotones;
}

//Para mostrar los botones de cambio de tema

var brocha = document.querySelector(".cambio_tema");
var tema_1 = document.querySelector(".uno");
var tema_2 = document.querySelector(".dos");
var tema_3 = document.querySelector(".tres");
var controlDisplayTema = 0;
var temaActual = localStorage.getItem("tema");

//Para mostrar los temas guardados en el localStorage

switch (temaActual) {
    case "0":
        cambiarTema("#4e627e", "#0e2038", "#fff", "#26404d", "#fff", "#000", "#000");
        break;
    case "1":
        cambiarTema("#cee8ce", "#608334", "#f7feef", "#97b670", "#f7feef", "#314f00", "#fff");
        break;
    case "2":
        cambiarTema("#838280", "#1f1a17", "#c1c1c1", "#615d5c", "#000", "#000", "#fff");
        break;
}

brocha.addEventListener("click", function (event) {

    if (controlDisplayTema == 0) {
        tema_1.style.display = "block";
        tema_2.style.display = "block";
        tema_3.style.display = "block";

        controlDisplayTema = 1;

    } else {
        tema_1.style.display = "none";
        tema_2.style.display = "none";
        tema_3.style.display = "none";

        controlDisplayTema = 0;
    }
});

//Para cambiar el tema

tema_1.addEventListener("click", function (event) {

    //cambiarTema(colorBody, colorHeader, colorMain, colorAside, colorBotonHover, colorEspacioBotones, colorLetras)
    cambiarTema("#4e627e", "#0e2038", "#fff", "#26404d", "#fff", "#000", "#000");

    temaActual = 0;

    localStorage.setItem("tema", temaActual);
});

tema_2.addEventListener("click", function (event) {
    cambiarTema("#cee8ce", "#608334", "#f7feef", "#97b670", "#f7feef", "#314f00", "#fff");

    temaActual = 1;

    localStorage.setItem("tema", temaActual);
});

tema_3.addEventListener("click", function (event) {
    cambiarTema("#838280", "#1f1a17", "#c1c1c1", "#615d5c", "#000", "#000", "#fff");

    temaActual = 2;

    localStorage.setItem("tema", temaActual);
});