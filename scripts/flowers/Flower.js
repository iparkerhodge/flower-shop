export const FlowerHTML = (flower) => {
    return `
    <div class="flower">
        <div class="flower__name">Name: ${flower.commonName}</div>
        <div class="flower__color">Color: ${flower.color}</div>
    </div>
    `
}