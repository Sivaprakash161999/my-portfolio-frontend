const hamBtn = document.querySelector(".hamburger-btn")
const xBtn = document.querySelector(".x-btn")
const navLinksContainer = document.querySelector(".flex-links-container")
const navLinks = document.querySelectorAll(".sec-links a")
const mq = window.matchMedia("(max-width: 700px)");
const mq2 = window.matchMedia("(min-width: 699px)");


if (matchMedia) {
    const mq2 = window.matchMedia("(min-width: 700px)");
    mq2.addListener(displayChange);
    displayChange(mq2);
}

function displayChange(mq2) {
    if (mq2.matches) {
        navLinksContainer.style.display = "flex";
    }
}

if (matchMedia) {
    const mq3 = window.matchMedia("(max-width: 700px)");
    mq3.addListener(displayChange2);
    displayChange2(mq3);
}

function displayChange2(mq3) {
    if (mq3.matches) {
        navLinksContainer.style.display = "none";
    }
}

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
        if (mq.matches) {
        navLinksContainer.style.display = "none";
        };
        xBtn.style.display = "none";
    })
});
