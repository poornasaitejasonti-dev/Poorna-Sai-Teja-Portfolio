/* ================= MOBILE MENU ================= */

function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("active");
}

/* ================= CLOSE MENU ================= */

document.querySelectorAll(".nav-links a").forEach(function (link) {
  link.addEventListener("click", function () {
    document.getElementById("navLinks").classList.remove("active");
  });
});

/* ================= CONTACT FORM ================= */

function sendMessage(event) {
  event.preventDefault();
  alert("Thank you! Your message has been received.");
  event.target.reset();
}

/* ================= SCROLL ANIMATION ================= */

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.15
  }
);

sections.forEach(function (section) {
  observer.observe(section);
});
