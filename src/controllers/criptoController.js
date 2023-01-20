const criptoController = async () => {
 try {
    const response = await fetch("../../public/data/stock.json")
    const data = await response.json()

    return data
 } catch (error) {
    console.log(error)
 }
};