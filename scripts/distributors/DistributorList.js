import { useDistributors } from "./DistributorProvider.js"
import { DistributorHTML } from "./Distributor.js"


const contentTarget = document.querySelector(".distributorContainer")

export const DistributorList = () => {
    const distributors = useDistributors()

    render(distributors)
}

const render = allTheDistributors => {
    contentTarget.innerHTML = `
    <div><h3>Distributors</h3>
    ${allTheDistributors.map(distributor => DistributorHTML(distributor)).join('')}
    </div>
    `
}