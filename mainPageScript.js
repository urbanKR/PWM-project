const hMenu = document.querySelector("#h-menu")
const navBar = document.querySelector("nav")

hMenu.addEventListener("click", () => {
    hMenu.classList.toggle("open")
    navBar.classList.toggle("show-nav")
})