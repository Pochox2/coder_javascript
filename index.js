const ComprarProducto = () => {
    let cripto = "";
    let cantidad = 0;
    let precio = 0;
    let precioTotal= 0;
    let seguirComprando = false;

    do {
        cripto = prompt("¿Querés comprar Bitcoin, Ethereum o Doge?"),
        cantidad = parseInt(prompt("¿Qué cantidad desea comprar?"));

    switch (cripto) {
        case "Bitcoin":
            precio = 16460;
            break;
        case "Ethereum":
            precio = 1195;
            break;
        case "Doge":
            precio = 1;
            break;
        default:
            alert("Alguno de los datos ingresados no es correcto");
            precio= 0;
            cantidad= 0;
    }

        precioTotal += precio * cantidad;

        seguirComprando = confirm("¿Desea seguir comprando?")

    } while (seguirComprando)

    return precioTotal;

}


const aplicarComision = (precioTotal) => {
    if (precioTotal >= 20000) {
        return precioTotal * 1.08;
    } else {
        return precioTotal * 1.05;
    }
}

const ganarDescuento = (precioTotal) => {
    if (precioTotal >= 100000) {
        alert("Tenes un descuento del 10%. El total de tu compra es $" + precioTotal * 0.90);
      }  else {
        alert("El total de tu compra es $" + precioTotal);
      }

      return precioTotal;
} 



ganarDescuento(aplicarComision(ComprarProducto()))

