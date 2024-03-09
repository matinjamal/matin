const btnNavEl = document.querySelector(".header-btn");
const headerNavEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerNavEl.classList.toggle("nav-open");
});