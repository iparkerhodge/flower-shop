export const DistributorHTML = (dist) => {
    return `
    <div class="distributor">
        <div class="distributor__name">${dist.name}</div>
        <div class="address">${dist.address}</div>
        <div class="location"></div>${dist.city}, ${dist.state}</div>
    </div>
    `
}