function shuffle(array) {
    const _array = array.slice(0)
    for (let i = 0; i < array.length-1; i++) {
        let newIndex = Math.floor(Math.random() * (i+1))
        let temp = _array[i]
        _array[i] = _array[newIndex]
        _array[newIndex] = temp
    }

    return _array
}

export default function createDeck() {
    let id = 0
    const cards = ['gameboy', 'finn', 'ice-king', 'jake', 'mongrol', 'princess'].reduce((acc, type) => {
        acc.push({
            id: id++,
            type
        })
        acc.push({
            id: id++,
            type
        })
        return acc
    }, [])

    return shuffle(cards)
}