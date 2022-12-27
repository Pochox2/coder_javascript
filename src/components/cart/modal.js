
const cerrarCarro= document.getElementById("btn__cerrarcarro")[0];
const abrirCarro = document.getElementById("carrito__cesto");
const modalCarro = document.querySelector(".modal__carro")[0];
const modalContainer = document.querySelector(".modal__contenedor")[0];

abrirCarro.addEventListener("click", (e) => {
    e.preventDefault();
    modalContainer.style.opacity= "0.99";
    modalContainer.style.visibility = "visible";
    modal.classList.toggle("modal__close");
});


// const modalContainer = document.querySelector(".modal__contenedor");
// const abrirCarro = document.getElementById("carrito__cesto");
// const cerrarCarro= document.getElementById("btn__cerrarcarro");
// const modalCarro = document.querySelector(".modal__carro");

// abrirCarro.addEventListener("click", () => {
//     modalContainer.classList.toogle (`modal-active`)
// });

// cerrarCarro.addEventListener("click", () => {
//     modalContainer.classList.toogle (`modal-active`)
// });

// modalContainer.addEventListener("click", () => {
//     cerrarCarro.click()
// });

// modalCarro.addEventListener("click", (e) => {
//     e.stopPropagation()
//     if (e.target.classList.contains("btn__eliminar")) {
//         quitarcriptoCarro(e.target.value);
//     }
// })