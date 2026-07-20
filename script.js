document.addEventListener("DOMContentLoaded", function () {
  const topBtn = document.getElementById("topBtn");
  window.addEventListener("scroll", function () {
    topBtn.style.display = window.scrollY > 300 ? "block" : "none";
  });
  if (topBtn) {
    topBtn.onclick = function () { window.scrollTo({ top: 0, behavior: "smooth" }); };
  }

  const navbar = document.querySelector(".navbar");
  window.addEventListener("scroll", function () {
    navbar.style.background = "#0f172a";
    navbar.style.boxShadow = window.scrollY > 50 ? "0 10px 30px rgba(0,0,0,.25)" : "none";
  });

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) target.scrollIntoView({ behavior: "smooth" });
    });
  });

  const cards = document.querySelectorAll(".info-card,.chapter-card");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add("fade-up"); });
  });
  cards.forEach(card => observer.observe(card));
});

const counters = document.querySelectorAll(".counter");
counters.forEach(counter => {
  const update = () => {
    const target = +counter.getAttribute("data-target");
    const c = +counter.innerText;
    const inc = target / 80;
    if (c < target) {
      counter.innerText = Math.ceil(c + inc);
      setTimeout(update, 20);
    } else {
      counter.innerText = target;
    }
  };
  update();
});