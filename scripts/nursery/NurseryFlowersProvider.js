let nurseryFlowers = []

export const getNurseryFlowers = () => {
    return fetch('http://localhost:3000/NurseryFlowers')
        .then(resp => resp.json())
        .then(parsed => {
            nurseryFlowers = parsed
        })
}

export const useNurseryFlowers = () => {
    return nurseryFlowers.slice()
}