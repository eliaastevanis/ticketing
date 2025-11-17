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

// Subscribe Form Handler
function handleSubscribe(event) {
  event.preventDefault();
  const email = event.target.querySelector(".email-input").value;
  alert("Thank you for subscribing with: " + email);
  event.target.reset();
}

// Events Pagination System with Responsive Support
var slideIndex = 1;

function getCardsPerPage() {
  var width = window.innerWidth;

  // Mobile: 1 card per page
  if (width <= 768) {
    return 1;
  }
  // Tablet: 2 cards per page
  else if (width <= 992) {
    return 2;
  }
  // Desktop: 3 cards per page
  else {
    return 3;
  }
}

function plusDivs(n) {
  showDivs((slideIndex += n));
}

function showDivs(n) {
  var i;
  var x = document.querySelectorAll(".event-card");

  if (x.length === 0) return;

  // Get cards per page based on screen size
  var cardsPerPage = getCardsPerPage();
  var totalPages = Math.ceil(x.length / cardsPerPage);

  // Loop back to first page
  if (n > totalPages) {
    slideIndex = 1;
  }
  // Loop back to last page
  if (n < 1) {
    slideIndex = totalPages;
  }

  // Hide all cards first
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }

  // Show cards for current page
  var startIndex = (slideIndex - 1) * cardsPerPage;
  var endIndex = startIndex + cardsPerPage;

  for (i = startIndex; i < endIndex && i < x.length; i++) {
    x[i].style.display = "flex";
  }

  // Update button states
  updateArrowButtons(slideIndex, totalPages);
}

function updateArrowButtons(currentPage, totalPages) {
  var leftBtn = document.querySelector(".events-header .arrow-btn:first-child");
  var rightBtn = document.querySelector(".events-header .arrow-btn:last-child");

  if (leftBtn && rightBtn) {
    // Disable left arrow on first page
    if (currentPage === 1) {
      leftBtn.style.opacity = "0.5";
      leftBtn.style.cursor = "not-allowed";
    } else {
      leftBtn.style.opacity = "1";
      leftBtn.style.cursor = "pointer";
    }

    // Disable right arrow on last page
    if (currentPage === totalPages) {
      rightBtn.style.opacity = "0.5";
      rightBtn.style.cursor = "not-allowed";
    } else {
      rightBtn.style.opacity = "1";
      rightBtn.style.cursor = "pointer";
    }
  }
}

// Handle window resize
var resizeTimer;
window.addEventListener("resize", function () {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(function () {
    // Reset to first page on resize
    slideIndex = 1;
    showDivs(slideIndex);
  }, 250);
});

// Initialize on page load
document.addEventListener("DOMContentLoaded", function () {
  // Show cards based on screen size
  showDivs(1);
});
