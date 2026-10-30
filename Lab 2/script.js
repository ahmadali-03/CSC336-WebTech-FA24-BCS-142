document.addEventListener("DOMContentLoaded", () => {
  const hamburgerBtn = document.querySelector(".hamburger-btn");
  const menuUl = document.querySelector(".menu ul");

  hamburgerBtn.addEventListener("click", () => {
    menuUl.classList.toggle("active");
  });
});
