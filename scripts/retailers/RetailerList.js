import { useRetailers } from "./RetailerProvider.js"
import { useDistributors } from "../distributors/DistributorProvider.js"
import { RetailHTML } from "./Retailer.js"


const contentTarget = document.querySelector(".retailerContainer")

export const RetailerList = () => {
    const retailers = useRetailers()

    render(retailers)
}

const render = allTheRetailers => {
    const distributors = useDistributors()


    contentTarget.innerHTML = `
    <div class="title">Retailers</div>
    ${allTheRetailers.map(retailer => {
        const foundDist = distributors.find((distributor => retailer.distributorId === distributor.id))

        return RetailHTML(retailer, foundDist)
    }).join("")}
    `
}