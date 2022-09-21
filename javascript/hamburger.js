const hamburger = document.querySelector(".hamburger");
const navBar = document.querySelector(".navBar");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navBar.classList.toggle("active");
});

document.querySelectorAll(".nav-bar-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navBar.classList.remove("active");
  })
);
