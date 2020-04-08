let flowers = []

export const getFlowers = () => {
    return fetch('http://localhost:3000/flowers')
        .then(resp => resp.json())
        .then(parsed => {
            flowers = parsed
        })
}

export const useFlowers = () => {
    return flowers.slice()
}