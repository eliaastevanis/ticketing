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

// Form submission
document.querySelector(".search-form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Mencari tiket...");
});

// Book buttons
document.querySelectorAll(".book-btn").forEach((button) => {
  button.addEventListener("click", function () {
    alert("Booking tiket...");
  });
});
