// funcion para pintar productos en el html

const ponerCriptos= async () => {
    const container = document.getElementById("cripto__container")

    const criptos = await criptoController()

    criptos.forEach(cripto => {
        const div = document.createElement("div");
        div.classList.add("card__compra");
         div.innerHTML +=   `
                             <img class="img__compra" src=${cripto.imagen} alt="Imagen de una moneda ethereum">
                             <h3> ${cripto.nombre}</h3>
                             <h4>Precio: ${cripto.precio}</h4>
                             <a class="btn__agregar"><i id=${cripto.id} class= "agregar">Agregar al carro</i></a>
                             `
                             
        container.appendChild(div)

    });
};
