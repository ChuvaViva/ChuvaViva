const menuButton = document.querySelector("#menuButton")
const mobileMenu = document.querySelector(".mobile-menu")
const navMobileMenu = document.querySelector(".nav-mobile-menu")
const row1Item1 = document.querySelector(".row1-item1")
const row1Item2 = document.querySelector(".row1-item2")
const row2Item1 = document.querySelector(".row2-item1")
const row2Item2 = document.querySelector(".row2-item2")
const row2Item3 = document.querySelector(".row2-item3")

menuButton.addEventListener("click", () => {
    console.log("clicou aqui")
    mobileMenu.classList.toggle("active")
    navMobileMenu.classList.toggle("close")
})

console.log(row1Item1)

row1Item1.addEventListener("click", () => {
    row1Item1.classList.toggle("col-lg-8")
    row1Item1.classList.toggle("style")
    console.log("Clicou aqui 1")
})
row1Item2.addEventListener("click", () => {
    row1Item2.classList.toggle("col-lg-8")
    row1Item2.classList.toggle("style")
    console.log("Clicou aqui 2")
})

row2Item1.addEventListener("click", () => {
    row2Item1.classList.toggle("col-lg-6")
    row2Item1.classList.toggle("style")
    console.log("Clicou aqui 2")
})

row2Item2.addEventListener("click", () => {
    row2Item2.classList.toggle("col-lg-6")
    row2Item2.classList.toggle("style")
    console.log("Clicou aqui 2")
})

row2Item3.addEventListener("click", () => {
    row2Item3.classList.toggle("col-lg-6")
    row2Item3.classList.toggle("style")
    console.log("Clicou aqui 2")
})
