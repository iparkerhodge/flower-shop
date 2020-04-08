let retailers = []

export const getRetailers = () => {
    return fetch('http://localhost:3000/retailers')
        .then(resp => resp.json())
        .then(parsed => {
            retailers = parsed
        })
}

export const useRetailers = () => {
    return retailers.slice()
}