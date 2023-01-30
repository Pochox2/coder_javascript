const vaciarCarro = document.getElementById(`btn__vaciar`)

let carro = []

const criptoContainer = document.getElementById("cripto__container")

// funcion para vaciar carrito

vaciarCarro.addEventListener(`click`, () => {
    if (carro.length===0) {
        Swal.fire ({
            icon:"error",
            text:"El carrito ya esta vacio",
            showConfirmButton: false,
            timer: 2000
        })
    } else {
    carro.length = 0
    Swal.fire({
        icon:"success",
        text:"Carrito vaciado con exito",
        showConfirmButton: false,
        timer: 2000
    })
    }
    actualizarCarro(carro);
    actualizarTotalCarro(carro);
})

criptoContainer.addEventListener("click", (e) =>{
    if (e.target.classList.contains("agregar")) {
        aceptarCriptorepetida(e.target.id)
        Swal.fire({
            icon:"success",
            text:"Producto agregado al carrito",
            showConfirmButton: false,
            timer: 2000
        })
    }
});

const aceptarCriptorepetida = async (criptoId) => {
    const criptoRepetida = carro.find(cripto => cripto.id == criptoId);
    const criptos = await criptoController()
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

// funcion para pintar las criptos en el carrito

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

// funcion para eliminar 1 tipo de cripto del carrito

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

// funcion para determinar el precio y cantidad total

const actualizarTotalCarro = (carro) => {
    const cantidadTotal = carro.reduce((acc, item) => acc + item.cantidad, 0);
    const precioTotal = carro.reduce((acc, item) => acc + (item.precio * item.cantidad), 0);


    ponerTotalCarro(cantidadTotal, precioTotal);
    guardarCarroStorage(carro);
};



// funcion que pinta lo que determinamos en la funcion anterior


const ponerTotalCarro = (cantidadTotal, precioTotal) => {
    
    const contadorCarro = document.getElementById("carro__contador");
    const totalCompra = document.getElementById("precio__total");
    
    console.log(contadorCarro, totalCompra)
    
    contadorCarro.innerText= cantidadTotal;
    totalCompra.innerText= precioTotal; 
};


