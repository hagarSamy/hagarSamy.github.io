document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("navbar");
  const logo = document.querySelector(".logo img");

  window.addEventListener("scroll", () => {
    if (window.scrollY > window.innerHeight - navbar.offsetHeight) {
      navbar.classList.add("scrolled");
      logo.src = "images/logo.png";
    } else {
      navbar.classList.remove("scrolled");
      logo.src = "images/logoW.png";
    }
  });
});
