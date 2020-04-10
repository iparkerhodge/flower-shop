import { FlowerHTML } from "../flowers/Flower.js"

export const RetailHTML = (shop, dist, nurseries, flowers) => {
    return `
    <div class="retailer">
        <div class="retailer__info">
            <div data-splitting class="retailer__name">${shop.name}</div>
            <div class="address">${shop.address}</div>
            <div class="location">${shop.city}, ${shop.state}</div>
        </div>
        <div class="retailer__flowers">
            ${flowers.map(flower => FlowerHTML(flower)).join("")}
        </div>
        <div class="retailer__dist">
            <div>Distributor:</div>
            <div>${dist.name}</div>
            <div class="dist__location address">${dist.city}, ${dist.state}</div>
        </div>
        <div class="retailer__nurseries"><div class="nursery__title">Source Nurseries:</div>${nurseries.map(nursery => {
            return `
            <ul class="nursery">
                <li>
                <div>${nursery.name}</div>
                <div class="nursery__loc address">${nursery.city}, ${nursery.state}</div>
                </li>
            
            </ul>
            `
        }).join("")}</div>
    </div>
    `
}