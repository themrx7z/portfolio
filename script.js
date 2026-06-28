// ===============================
// Mobile Menu
// ===============================

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {

    nav.classList.toggle("active");

    menuBtn.innerHTML = nav.classList.contains("active")
        ? '<i class="fa-solid fa-xmark"></i>'
        : '<i class="fa-solid fa-bars"></i>';

});

// ===============================
// Close Menu On Click
// ===============================

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");

        menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';

    });

});

// ===============================
// Navbar Scroll
// ===============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.style.background = "#090909";

        header.style.boxShadow = "0 10px 30px rgba(255,0,0,.15)";

    } else {

        header.style.background = "rgba(0,0,0,.70)";

        header.style.boxShadow = "none";

    }

});

// ===============================
// Scroll To Top
// ===============================

const topBtn = document.getElementById("top");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.opacity = "1";

        topBtn.style.pointerEvents = "auto";

    } else {

        topBtn.style.opacity = "0";

        topBtn.style.pointerEvents = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

// ===============================
// Active Navbar Link
// ===============================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 150;
        const height = section.clientHeight;

        if (pageYOffset >= top) {

            current = section.getAttribute("class").split(" ")[0];

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

// ===============================
// Scroll Reveal
// ===============================

const reveals = document.querySelectorAll(
    ".card,.project,.stats-grid div,.lang-grid div,.hero-text,.hero-image"
);

function revealAnimation() {

    reveals.forEach(item => {

        const top = item.getBoundingClientRect().top;

        const visible = 120;

        if (top < window.innerHeight - visible) {

            item.style.opacity = "1";

            item.style.transform = "translateY(0)";

        }

    });

}

reveals.forEach(item => {

    item.style.opacity = "0";

    item.style.transform = "translateY(60px)";

    item.style.transition = "all .8s ease";

});

window.addEventListener("scroll", revealAnimation);

revealAnimation();

// ===============================
// Typing Effect
// ===============================

const title = document.querySelector(".hero-text h2");

const words = [

    "مطور مواقع احترافي",

    "مصمم واجهات UI/UX",

    "كاتب مقالات تقنية",

    "صانع محتوى"

];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typingEffect() {

    const current = words[wordIndex];

    if (!deleting) {

        title.textContent = current.substring(0, charIndex++);

        if (charIndex > current.length) {

            deleting = true;

            setTimeout(typingEffect, 1500);

            return;

        }

    } else {

        title.textContent = current.substring(0, charIndex--);

        if (charIndex < 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {

                wordIndex = 0;

            }

        }

    }

    setTimeout(typingEffect, deleting ? 45 : 90);

}

typingEffect();

// ===============================
// Card Hover Glow
// ===============================

document.querySelectorAll(".card").forEach(card => {

    card.addEventListener("mousemove", e => {

        const x = e.offsetX;
        const y = e.offsetY;

        card.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255,0,0,.18), #121212)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.background = "#121212";

    });

});

// ===============================
// Footer Year
// ===============================

const copy = document.querySelector(".copyright");

if (copy) {

    copy.innerHTML =
        `© ${new Date().getFullYear()} محمد يحيى - جميع الحقوق محفوظة`;

}
