export const RetailHTML = (shop) => {
    return `
    <div class="retailer">
        <div class="retailer__name">${shop.name}</div>
        <div class="retailer__address">${shop.address}</div>
        <div class="retailer__location">${shop.city}, ${shop.state}</div>
    </div>
    `
}