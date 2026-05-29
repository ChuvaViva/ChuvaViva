const menuButton = document.querySelector("#menuButton")
const mobileMenu = document.querySelector(".mobile-menu")

menuButton.addEventListener("click", () => {
    console.log("clicou aqui")
    mobileMenu.classList.toggle("active")
})