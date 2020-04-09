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
        const foundDist = distributors.find(distributor => retailer.distributorId === distributor.id)
        const relatedNurseryPairArray = distributorNursery.filter(pair => foundDist.id === pair.distributorId)
        const relatedNurseries = relatedNurseryPairArray.map(relatedPair =>{
            return allTheNurseries.find(nursery => nursery.id === relatedPair.nurseryId)
        })
        const nurseryFlowerPairArray = nurseryFlowers.filter(pair => pair.nurserId === relatedNurseries.id)
        const relatedFlowers = nurseryFlowerPairArray.map(relatedPair => {
            return allTheFlowers.find(flower => flower.id === relatedPair.flowerId)
        })


        return RetailHTML(retailer, foundDist, relatedNurseries, relatedFlowers)
    }).join("")}
    `
}