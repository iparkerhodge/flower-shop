import { useFlowers } from "./FlowerProvider.js"
import { FlowerHTML } from "./Flower.js"


const contentTarget = document.querySelector(".flowerContainer")

export const FlowerList = () => {
    const flowers = useFlowers()

    render(flowers)
}

const render = allTheFlowers => {
    contentTarget.innerHTML = `
    <div class="title">Flowers</div>
    ${allTheFlowers.map(flower => FlowerHTML(flower)).join('')}
    `
}