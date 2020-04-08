import { useRetailers } from "./RetailerProvider.js"
import { RetailHTML } from "./Retailer.js"


const contentTarget = document.querySelector(".retailerContainer")

export const RetailerList = () => {
    const retailers = useRetailers()

    render(retailers)
}

const render = allTheRetailers => {
    contentTarget.innerHTML = `
    <div><h3>Retailers</h3>
    ${allTheRetailers.map(retailer => RetailHTML(retailer)).join('')}
    </div>
    `
}