const navNombre = document.getElementById("navNombre");
const navDeveloper = document.getElementById("navDeveloper");

setInterval(() => {
    navNombre.classList.toggle("subir");
    navDeveloper.classList.toggle("subir");
}, 4000);