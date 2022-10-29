let button = document.getElementById("menu-toggle")
let menuList = document.getElementsByClassName("menu-list")[0]

function closeMenuHandler() {
    if (window.innerWidth < 450) {
        menuList.classList.remove("active")
        button.classList.remove("show")
        let links = document.querySelectorAll(".menu-link")
        for (let i = 0; i < links.length; i++) {
            links[i].removeEventListener("click", closeMenuHandler)
        }
        button.removeEventListener("click", closeMenuHandler)
    }
}

function buttonMenuHandler() {
    if (window.innerWidth < 450) {
        menuList.classList.add("active")
        button.classList.add("show")
        button.addEventListener("click", closeMenuHandler)
        let links = document.querySelectorAll(".menu-link")
        for (let i = 0; i < links.length; i++) {
            links[i].addEventListener("click", closeMenuHandler)
        }
    }
}

button.addEventListener("click", buttonMenuHandler)