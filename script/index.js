const navBar = document.querySelector("header");
const button = document.querySelector("nav button");
document.addEventListener("scroll", function () {
  if (window.scrollY > 475) {
    navBar.style.backgroundColor = "white";
    button.style.backgroundColor = "green";
    navBar.style.transition = "0.5s";
  } else {
    navBar.style.backgroundColor = "#ffc017";
    button.style.backgroundColor = "black";
  }
});
