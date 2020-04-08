export const DistributorHTML = (dist) => {
    return `
    <div class="distributor">
        <div class="distributor__name">${dist.name}</div>
        <div class="distributor__address">${dist.address}</div>
        <div class="distributor__location"></div>${dist.city}, ${dist.state}</div>
    </div>
    `
}