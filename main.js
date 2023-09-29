const navNombre = document.getElementById("navNombre");
const navDeveloper = document.getElementById("navDeveloper");
const botonProyectos = document.getElementById("botonProyectos");
const botonSobreMi = document.getElementById("botonSobreMi");

setInterval(() => {
    navNombre.classList.toggle("subir");
    navDeveloper.classList.toggle("subir");
}, 4000);



if(window.innerWidth > 480){
    botonSobreMi.addEventListener("click", () => {    
        window.scroll({
            top: 900,
            behavior: "smooth"
        });
    });
    
    botonProyectos.addEventListener("click", () => {
        window.scroll({
            top: 1500,
            behavior: "smooth"
        });
    });
}





addEventListener("scroll", () => {
    console.log(window.scrollY)
})