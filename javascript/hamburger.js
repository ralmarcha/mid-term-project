const hamburger = document.querySelector(".hamburger");
const navBarul = document.querySelector(".nav-bar-ul");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navBarul.classList.toggle("active");
});

document.querySelectorAll(".nav-bar-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navBarul.classList.remove("active");
  })
);
