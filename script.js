const body = document.getElementById("body")
const topbar = document.getElementById("topbar")
const nav = document.getElementById("nav");
const page = document.getElementById("page")
const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");
const box3 = document.getElementById("box3");
const box4 = document.getElementById("box4");
const box5 = document.getElementById("box5");
const box6 = document.getElementById("box6");
const bulb = document.getElementById("bulb");

bulb.addEventListener("click", () => {
    bulb.classList.toggle("switch");
    body.classList.toggle("dark-body")
    topbar.classList.toggle("dark-topbar")
    nav.classList.toggle("dark-nav");
    page.classList.toggle("dark-page")
    box1.classList.toggle("dark-box1");
    box2.classList.toggle("dark-box2");
    box3.classList.toggle("dark-box3");
    box4.classList.toggle("dark-box4");
    box5.classList.toggle("dark-box5");
    box6.classList.toggle("dark-box6");
})


