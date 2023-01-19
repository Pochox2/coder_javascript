const criptoController = async () => {
    const response = await fetch("/src/components/data/stock.json")
    const data = await response.json()

    return data
};