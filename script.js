// =========================
// Portfolio Script
// محمد يحيى
// =========================

// Loader

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";
        loader.style.visibility = "hidden";

    }, 1200);

});

// =========================
// Typing Effect
// =========================

const words = [

    "Web Developer",
    "Article Writer",
    "UI Designer",
    "HTML Developer",
    "CSS Expert",
    "JavaScript Developer",
    "PHP Developer",
    "Python Developer",
    "Java Programmer"

];

const typing = document.querySelector(".typing");

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    const current = words[wordIndex];

    if (!deleting) {

        typing.textContent = current.substring(0, charIndex++);

        if (charIndex > current.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;

        }

    } else {

        typing.textContent = current.substring(0, charIndex--);

        if (charIndex < 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length)
                wordIndex = 0;

        }

    }

    setTimeout(typeEffect, deleting ? 60 : 120);

}

typeEffect();

// =========================
// Sticky Header
// =========================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.style.background = "#111";

        header.style.padding = "15px 8%";

    } else {

        header.style.background = "rgba(0,0,0,.35)";

        header.style.padding = "20px 8%";

    }

});

// =========================
// Mobile Menu
// =========================

const menu = document.querySelector(".menu");

const nav = document.querySelector("nav");

menu.addEventListener("click", () => {

    nav.classList.toggle("active");

});

// =========================
// Scroll Reveal
// =========================

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.2

});

document.querySelectorAll("section,.card,.project,.skill").forEach(el => {

    el.classList.add("hidden");

    observer.observe(el);

});

// =========================
// Active Navbar
// =========================

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 150;

        if (pageYOffset >= top) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

// =========================
// Back To Top
// =========================

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.cssText = `
position:fixed;
bottom:30px;
left:30px;
width:50px;
height:50px;
border:none;
border-radius:50%;
background:#ff3b3b;
color:white;
font-size:20px;
cursor:pointer;
display:none;
z-index:999;
transition:.3s;
`;

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.onclick = () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

};

// =========================
// Animate Skill Bars
// =========================

const skills = document.querySelectorAll(".progress span");

const skillObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const width = entry.target.style.width;

            entry.target.style.width = "0";

            setTimeout(() => {

                entry.target.style.width = width;

            }, 200);

        }

    });

});

skills.forEach(skill => {

    skillObserver.observe(skill);

});

// =========================
// Contact Form
// =========================

const form = document.querySelector("form");

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        alert("تم إرسال رسالتك بنجاح.");

        form.reset();

    });

}

// =========================
// Cursor Glow
// =========================

const glow = document.createElement("div");

glow.style.cssText = `
position:fixed;
width:18px;
height:18px;
border-radius:50%;
background:#ff3b3b;
pointer-events:none;
transform:translate(-50%,-50%);
filter:blur(5px);
opacity:.8;
z-index:9999;
`;

document.body.appendChild(glow);

document.addEventListener("mousemove", e => {

    glow.style.left = e.clientX + "px";

    glow.style.top = e.clientY + "px";

});

// =========================
// Console Message
// =========================

console.log("%cمحمد يحيى Portfolio", "color:#ff3b3b;font-size:20px;font-weight:bold;");
console.log("Website Developed with HTML CSS JavaScript");
