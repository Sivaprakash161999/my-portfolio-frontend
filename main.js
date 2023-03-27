const hamBtn = document.querySelector(".hamburger-btn")
const xBtn = document.querySelector(".x-btn")
const navLinksContainer = document.querySelector(".flex-links-container")
const navLinks = document.querySelectorAll(".sec-links a")

hamBtn.addEventListener("click", e => {
    hamBtn.style.display = "none";
    navLinksContainer.style.display = "flex";
    xBtn.style.display = "inline-block";
})

xBtn.addEventListener("click", e => {
    hamBtn.style.display = "inline-block";
    navLinksContainer.style.display = "none";
    xBtn.style.display = "none";
})


navLinks.forEach((link) => {
    link.addEventListener("click", e => {
        hamBtn.style.display = "inline-block";
        navLinksContainer.style.display = "none";
        xBtn.style.display = "none";
    })
});
