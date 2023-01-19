let carro = []

const criptoContainer = document.getElementById("cripto__container")

criptoContainer.addEventListener("click", (e) =>{
    if (e.target.classList.contains("agregar")) {
        aceptarCriptorepetida(e.target.id)
    }
});

const aceptarCriptorepetida = (criptoId) => {
    const criptoRepetida = carro.find(cripto => cripto.id == criptoId);

    if (!criptoRepetida) {
        const cripto = criptos.find(cripto => cripto.id == criptoId);
        carro.push(cripto);
        ponerCriptoCarro(cripto);
        guardarCarroStorage(carro);
        actualizarTotalCarro(carro);
        
    } else {
        criptoRepetida.cantidad++
        const cantidadCripto = document.getElementById(`cantidad${criptoRepetida.id}`);
        cantidadCripto.innerText= `Cantidad: ${criptoRepetida.cantidad}`
        actualizarTotalCarro(carro);
    }
};

const ponerCriptoCarro = (cripto) => {
    const container = document.getElementById(`carro__container`)
    const div = document.createElement(`div`)
    div.classList.add(`criptoenCarro`);
    div.innerHTML = ` <p>${cripto.nombre}</p>
                    <p>Precio: ${cripto.precio}</p>
                    <p id=cantidad${cripto.id}> Cantidad: ${cripto.cantidad}</p>
                    <button class="btn__eliminar" value="${cripto.id}">X</button>
                    `
    container.appendChild(div)
};


const quitarcriptoCarro = (criptoId) => {
    const criptoIndex = carro.findIndex(cripto => cripto.id == criptoId);
    carro.splice(criptoIndex, 1);
    actualizarCarro(carro);
    actualizarTotalCarro(carro);
};


const actualizarCarro = (carro) => {
    const container = document.getElementById(`carro__container`);


    container.innerHTML= ``;


    carro.forEach(cripto => {
        const div = document.createElement(`div`);
        div.classList.add(`criptoenCarro`);
        div.innerHTML += ` <p>${cripto.nombre}</p>
                            <p>Precio: ${cripto.precio}</p>
                            <p id=cantidad${cripto.id}> Cantidad: ${cripto.cantidad}</p>
                           <button class="btn__eliminar" value="${cripto.id}">X</button>
                            `
        container.appendChild(div);
        
    });
};


const guardarCarroStorage = (carro) => {
    localStorage.setItem(`carro`, JSON.stringify(carro));
};


const recibirCarroStorage = () => {
    const carroStorage = JSON.parse (localStorage.getItem(`carro`));
    return carroStorage;

};

const actualizarTotalCarro = (carro) => {
    const cantidadTotal = carro.reduce((acc, item) => acc + item.cantidad, 0);
    const precioTotal = carro.reduce((acc, item) => acc + (item.precio * item.cantidad), 0);


    ponerTotalCarro(cantidadTotal, precioTotal);
    guardarCarroStorage(carro);
};

const ponerTotalCarro = (cantidadTotal, precioTotal) => {
    
    const contadorCarro = document.getElementById("carro__contador");
    const totalCompra = document.getElementById("precio__total");
    
    console.log(contadorCarro, totalCompra)
    
    contadorCarro.innerText= cantidadTotal;
    totalCompra.innerText= precioTotal; 
};


const notificacion=document.querySelector("btn__agregar")
notificacion.addEventListener("click", ( => {
    Swal.fire({
        text: "Haz agregado un producto al carro con exito"
        icon: "success"
        confirmButtonText:"Ok"
    })
}))