const contentTarget = document.querySelector(".navContainer")

export const navBar = () => {
    contentTarget.innerHTML = `
    <image class="nav__image" src=../styles/images/bouquet.svg></image>
    <h3 class="nav__title">Are You Feeling Bouquet?</h3>
    `
}