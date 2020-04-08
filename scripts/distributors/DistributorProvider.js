let distributors = []

export const getDistributors = () => {
    return fetch('http://localhost:3000/distributors')
        .then(resp => resp.json())
        .then(parsed => {
            distributors = parsed
        })
}

export const useDistributors = () => {
    return distributors.slice()
}