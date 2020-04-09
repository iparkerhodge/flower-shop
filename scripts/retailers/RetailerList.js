import { useRetailers } from "./RetailerProvider.js"
import { useDistributors } from "../distributors/DistributorProvider.js"
import { useDistributorNurseries } from "../distributors/DistributorNurseriesProvider.js"
import { RetailHTML } from "./Retailer.js"
import { useNurseries } from "../nursery/NurseryProvider.js"
import { useNurseryFlowers } from "../nursery/NurseryFlowersProvider.js"
import { useFlowers } from "../flowers/FlowerProvider.js"


const contentTarget = document.querySelector(".retailerContainer")

export const RetailerList = () => {
    const retailers = useRetailers()

    render(retailers)
}

const render = allTheRetailers => {
    const distributors = useDistributors()
    const distributorNursery = useDistributorNurseries()
    const allTheNurseries = useNurseries()
    const nurseryFlowers = useNurseryFlowers()
    const allTheFlowers = useFlowers()


    contentTarget.innerHTML = `
    <div class="title">Retailers</div>
    ${allTheRetailers.map(retailer => {
        const foundDist = distributors.find(distributor =>  distributor.id === retailer.distributorId)
        const relatedNurseryPairArray = distributorNursery.filter(pair => foundDist.id === pair.distributorId)
        const relatedNurseries = relatedNurseryPairArray.map(relatedPair =>{
            return allTheNurseries.find(nursery => nursery.id === relatedPair.nurseryId)
        })
        
        let nurseryFlowerPairArray = []
        relatedNurseries.forEach(nursery => {
            let filtered = nurseryFlowers.filter(pair => pair.nurseryId === nursery.id)
            filtered.forEach(rel => nurseryFlowerPairArray.push(rel))
        })


        const relatedFlowers = nurseryFlowerPairArray.map(relatedPair => {
            return allTheFlowers.find(flower => flower.id === relatedPair.flowerId)
        })

        const relatedFlowersFiltered = Array.from(new Set (relatedFlowers))

        return RetailHTML(retailer, foundDist, relatedNurseries, relatedFlowersFiltered)
    }).join("")}
    `
}