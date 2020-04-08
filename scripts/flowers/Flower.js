export const FlowerHTML = (flower) => {
    return `
    <div class="flower">
        <img class="flower__image" src=${flower.image}></image>
        <div class="flower__name">${flower.commonName}</div>
        <div class="flower__color">Color: ${flower.color}</div>
    </div>
    `
}