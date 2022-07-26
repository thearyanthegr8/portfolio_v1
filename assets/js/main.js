let mouseCursor = document.querySelector(".cursor");
let navLinks = document.querySelectorAll(".nav-links li");
let themeChanger = document.querySelector(".theme-changer");

window.addEventListener("mousemove", cursor);

function cursor(e) {
  mouseCursor.style.top = e.pageY + "px";
  mouseCursor.style.left = e.pageX + "px";
}

navLinks.forEach((link) => {
  link.addEventListener("mouseleave", () => {
    mouseCursor.classList.remove("link-grow");
    link.style.setProperty("--link-color", "#1c1c1c");
  });
  link.addEventListener("mouseover", () => {
    mouseCursor.classList.add("link-grow");
    link.style.setProperty("--link-color", "white");
  });
  themeChanger.addEventListener("mouseleave", () => {
    mouseCursor.classList.remove("link-grow");
    themeChanger.style.setProperty("--link-color", "#1c1c1c");
  });
  themeChanger.addEventListener("mouseover", () => {
    mouseCursor.classList.add("link-grow");
    themeChanger.style.setProperty("--link-color", "white");
  });
});
