import { FlowerHTML } from "../flowers/Flower.js"

export const RetailHTML = (shop, dist, nurseries, flowers) => {
    return `
    <div class="retailer">
        <div class="retailer__info">
            <div data-splitting class="retailer__name">${shop.name}</div>
            <div class="address">${shop.address}</div>
            <div class="location">${shop.city}, ${shop.state}</div>
        </div>
        <div class="retailer__flowersTitle">Available Flowers</div>
        <div class="retailer__flowers">
            ${flowers.map(flower => FlowerHTML(flower)).join("")}
        </div>
        <div class="retailer__dist">Distributor: ${dist.name}</div>
        <div class="retailer__nurseries">Source Nurseries:${nurseries.map(nursery => {
            return `
            <div class="nursery">
                <div>${nursery.name}</div>
                <div>${nursery.city}, ${nursery.state}</div>
            
            </div>
            `
        }).join("")}</div>
    </div>
    `
}