const carroCompras = [];

 const ordenMenoraMayor = () => {
    criptos.sort ((a, b) => a.precio - b.precio)
    mostrarListaenOrden()
}

 const ordenMayoraMenor = () => {
     criptos.sort ((a, b) => b.precio - a.precio)
    mostrarListaenOrden()
}




const mostrarListaenOrden = () => {
    const listaenOrden = criptos.map(criptomoneda => {
        return "- " +criptomoneda.nombre+" $"+criptomoneda.precio
    });
    alert("Lista de criptomonedas con sus precios:"+"\n\n"+listaenOrden.join("\n"))
    ComprarProducto(listaenOrden)
};




const ComprarProducto = (listaCriptomonedas) => {
    let seguirComprando = false;
    let criptomonedaNombre = "";
    let criptomonedaCantidad = 0;

    do {
        criptomonedaNombre = prompt("¿Que criptomoneda desea comprar?"+"\n\n"+listaCriptomonedas.join("\n"));
        criptomonedaCantidad = parseInt(prompt("¿Qué cantidad desea comprar?"));

        const criptomoneda = criptos.find(criptomoneda => criptomoneda.nombre.toLowerCase() === criptomonedaNombre.toLowerCase())
        
        if(criptomoneda) {
            agregaralcarroCompras(criptomoneda, criptomoneda.id, criptomonedaCantidad)
        } else {
            alert("Alguno de los datos ingresados no es correcto");
        }

        seguirComprando = confirm("¿Desea agregar otra criptomoneda?")
    } while (seguirComprando)
        

    confirmarCompra();
};


const agregaralcarroCompras = (criptomoneda, criptomonedaId, criptomonedaCantidad) => {
    const criptomonedaRepetida = carroCompras.find(criptomoneda => criptomoneda.id === criptomonedaId)
    if (criptomonedaRepetida) {
        criptomonedaRepetida.cantidad += criptomonedaCantidad
    } else {
        criptomoneda.cantidad += criptomonedaCantidad
        carroCompras.push(criptomoneda)
    }
};


const quitarcriptoCarro = (criptomonedaNombre) => {
    carroCompras.forEach((criptomoneda, index) => {
        if (criptomoneda.nombre.toLowerCase() === criptomonedaNombre) {
            if(criptomoneda.cantidad > 1) {

            } else {
                carroCompras.splice(index, 1)
            }
        }
    })
    confirmarCompra()
};

const confirmarCompra = () => {
    
    const listaCriptomonedas = carroCompras.map(criptomoneda => {
        return "- "+criptomoneda.nombre+" Cantidad: "+criptomoneda.cantidad
    });

    const confirmar = confirm ("Lista de criptomonedas:"
        +"\n\n"+listaCriptomonedas.join("\n\n")
        +"\n\nPara pasar a finalizar la compra introduzca 'Aceptar', si desea lo contrario introduzca 'Cancelar' y se eliminaran los prodcutos del carro"
    );

    if (confirmar) {
        terminarCompra(listaCriptomonedas)
    } else {
        const criptoaEliminar = prompt("Introduzca el nombre de la criptomoneda que desea eliminar:");
        quitarcriptoCarro(criptoaEliminar)
    }
};

const terminarCompra = (listaCriptomonedas) => {
    const cantidadTotal = carroCompras.reduce((acc, item) => acc + item.cantidad, 0)
    const precioTotal = carroCompras.reduce((acc, item) => acc + (item.precio*item.cantidad), 0)
    alert("Informacion de su compra:"
    +'\n\n'+listaCriptomonedas.join("\n")
    +'\n\nTotal de criptomonedas: '+cantidadTotal
    +'\n\nEl total de su compra es: '+precioTotal
    +'\n\nGracias por su compra!'
    )
};

const comprar = () => {
    const criptomonedasCaras = confirm("¿Desea ordenar las criptomonedas de la mas cara a la mas barata?");
    
    if (criptomonedasCaras) {
        ordenMayoraMenor();
    } else {
        ordenMenoraMayor();
    }
};

comprar();


// const aplicarComision = (precioTotal) => {
//     if (precioTotal >= 20000) {
//         return precioTotal * 1.08;
//     } else {
//         return precioTotal * 1.05;
//     }
// }
// const ganarDescuento = (precioTotal) => {
//     if (precioTotal >= 100000) {
//         alert("Tenes un descuento del 10%. El total de tu compra es $" + precioTotal * 0.90);
//       }  else {
//         alert("El total de tu compra es $" + precioTotal);
//       }

//       return precioTotal;
// }