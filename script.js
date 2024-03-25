const openBtn = document.querySelector("main > i");
const closeBtn = document.querySelector(".nav-sideBar > i");
const navMenu = document.querySelector(".nav-sideBar");

openBtn.addEventListener("click", () => {
  navMenu.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  navMenu.classList.remove("active");
});
