// funciones para que el carro sea modal, es decir para que aparezca y para que se esconda



const modalContainer = document.querySelector(".modal__contenedor");
const abrirCarro = document.getElementById("carrito__cesto");
const cerrarCarro = document.getElementById("btn__cerrarcarro");
const modalCarro = document.querySelector(".modal__carro");

abrirCarro.addEventListener("click", () => {
    modalContainer.classList.toggle("activar__modal")
});

cerrarCarro.addEventListener("click", () => {
    modalContainer.classList.toggle ("activar__modal")
});

modalContainer.addEventListener("click", () => {
    cerrarCarro.click()
});

modalCarro.addEventListener("click", (e) => {
    e.stopPropagation()
    if (e.target.classList.contains("btn__eliminar")) {
        quitarcriptoCarro(e.target.value);
    }
})