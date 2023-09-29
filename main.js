const navNombre = document.getElementById("navNombre");
const navDeveloper = document.getElementById("navDeveloper");
const menuDesplegable = document.getElementById("menuDesplegable");
const botonMenuDesplegable = document.getElementById("botonMenuDesplegable");

setInterval(() => {
    navNombre.classList.toggle("subir");
    navDeveloper.classList.toggle("subir");
}, 4000);


addEventListener("scroll", () => {
    setTimeout(() => {
        if(window.scroll != 0){
            menuDesplegable.style.display = "none";
        }
    }, 500);
    console.log(window.scrollY)
})


botonMenuDesplegable.addEventListener("click", () => {
    if((menuDesplegable.style.display === "") || (menuDesplegable.style.display === "none")){
        menuDesplegable.style.display = "flex";
        menuDesplegable.style.animation = "fadeInDown";
        menuDesplegable.style.animationDuration = "1s";
    }
    else{
        menuDesplegable.style.animation = "fadeOutUp";
        menuDesplegable.style.animationDuration = "1s";
        setTimeout(() => {
            menuDesplegable.style.display = "none";
        }, 900);
    }
})

