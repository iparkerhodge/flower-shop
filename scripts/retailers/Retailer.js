export const RetailHTML = (shop, dist) => {
    return `
    <div class="retailer">
        <div class="retailer__name">${shop.name}</div>
        <div class="address">${shop.address}</div>
        <div class="location">${shop.city}, ${shop.state}</div>
        <div class="retailer__dist">Distributor: ${dist.name}</div>
    </div>
    `
}