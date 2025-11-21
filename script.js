
// Toggle mobile menu
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Smooth scroll to section
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// Contact form (simulated functionality)
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const status = document.getElementById("formStatus");

    if (name && email && message) {
        status.innerText = "✅ Thank you! Your message has been sent successfully.";
        status.style.color = "#38bdf8";
        this.reset();
    } else {
        status.innerText = "⚠️ Please fill out all fields!";
        status.style.color = "orange";
    }
});
