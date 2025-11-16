// Smooth scroll buat semua link anchor
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});

// Find Ticket button
const searchBtn = document.querySelector(".search-btn");
if (searchBtn) {
  searchBtn.addEventListener("click", function (e) {
    e.preventDefault();
    alert("Mencari tiket...");
  });
}

// Book Now buttons
document.querySelectorAll(".book-btn").forEach((button) => {
  button.addEventListener("click", function () {
    alert("Booking tiket...");
  });
});

// Hamburger menu functionality
const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");
const overlay = document.getElementById("overlay");
const hamburgerLinks = hamburger.querySelectorAll("span");

// Toggle menu ketika hamburger diklik
hamburger.addEventListener("click", (e) => {
  if (e.target.tagName === "SPAN") return;

  hamburger.classList.toggle("active");
  nav.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.style.overflow = nav.classList.contains("active")
    ? "hidden"
    : "";
});

// Fungsi buat scroll ke section dan tutup menu
function scrollToSection(targetId) {
  const targetSection = document.querySelector(targetId);
  if (targetSection) {
    targetSection.scrollIntoView({ behavior: "smooth" });
  }

  // Tutup menu
  hamburger.classList.remove("active");
  nav.classList.remove("active");
  overlay.classList.remove("active");
  document.body.style.overflow = "";
}

// Click handler buat span dalem hamburger (About Us & Contact)
hamburgerLinks.forEach((span, index) => {
  span.addEventListener("click", (e) => {
    e.stopPropagation();
    const targetId = index === 0 ? "#aboutUs" : "#contact";
    scrollToSection(targetId);
  });
});

// Click handler buat nav links (About Us & Contact)
const navLinks = nav.querySelectorAll("a");
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href");
    scrollToSection(targetId);
  });
});

// Tutup menu pake tombol ESC
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && nav.classList.contains("active")) {
    hamburger.classList.remove("active");
    nav.classList.remove("active");
    overlay.classList.remove("active");
    document.body.style.overflow = "";
  }
});

// Tutup menu kalo klik overlay
if (overlay) {
  overlay.addEventListener("click", () => {
    hamburger.classList.remove("active");
    nav.classList.remove("active");
    overlay.classList.remove("active");
    document.body.style.overflow = "";
  });
}

// Tutup menu kalo klik di luar navbar
document.addEventListener("click", (e) => {
  if (
    !hamburger.contains(e.target) &&
    !nav.contains(e.target) &&
    nav.classList.contains("active")
  ) {
    hamburger.classList.remove("active");
    nav.classList.remove("active");
    overlay.classList.remove("active");
    document.body.style.overflow = "";
  }
});

function handleSubscribe(event) {
  event.preventDefault();
  const email = event.target.querySelector(".email-input").value;
  alert("Thank you for subscribing with: " + email);
  event.target.reset();
}

function scrollEvents(direction) {
  const grid = document.getElementById("eventsGrid");
  const scrollAmount = 320;
  if (direction === "left") {
    grid.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  } else {
    grid.scrollBy({ left: scrollAmount, behavior: "smooth" });
  }
}

function toggleFaq(element) {
  const faqItem = element.parentElement;
  const wasActive = faqItem.classList.contains("active");

  // Close all FAQ items
  document.querySelectorAll(".faq-item").forEach((item) => {
    item.classList.remove("active");
  });

  // Open clicked item if it wasn't active
  if (!wasActive) {
    faqItem.classList.add("active");
  }
}
