document.addEventListener(`DOMContentLoaded`, () => {
        ponerCriptos();


        if (localStorage.getItem(`carro`)) {
            carro = recibirCarroStorage();
            console.log(carro)
            actualizarCarro(carro)
            actualizarTotalCarro(carro)
        }
});


