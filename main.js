const navNombre = document.getElementById("navNombre");
const navDeveloper = document.getElementById("navDeveloper");
const botonProyectos = document.getElementById("botonProyectos");
const botonSobreMi = document.getElementById("botonSobreMi");

setInterval(() => {
    navNombre.classList.toggle("subir");
    navDeveloper.classList.toggle("subir");
}, 4000);

botonSobreMi.addEventListener("click", () => {    
    window.scrollTo(0, 990);
});

botonProyectos.addEventListener("click", () => {
    window.scrollTo(0, 2000);
});