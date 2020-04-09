let distributorNurseries = []

export const getDistributorNurseries = () => {
    return fetch('http://localhost:3000/DistributorNurseries')
        .then(resp => resp.json())
        .then(parsed => {
            distributorNurseries = parsed
        })
}

export const useDistributorNurseries = () => {
    return distributorNurseries.slice()
}