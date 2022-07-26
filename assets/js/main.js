let mouseCursor = document.querySelector(".cursor");
let navLinks = document.querySelectorAll(".nav-links li");
let themeChanger = document.querySelector(".theme-changer");
let darkTheme = false;
let patternDots = document.querySelector("#dots-background");

window.addEventListener("mousemove", cursor);

function cursor(e) {
  mouseCursor.style.top = e.pageY + "px";
  mouseCursor.style.left = e.pageX + "px";
}

var icon = document.getElementById("icon");
var iconDiv = document.getElementById("icon-div");
iconDiv.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (darkTheme == false) {
    darkTheme = true;
    navLinks.forEach((link) => {
      link.style.setProperty("--link-color", "white");
    });
    themeChanger.style.setProperty("--link-color", "#1c1c1c");
    icon.classList.add("uil-moon");
    icon.classList.remove("uil-sun");
  } else {
    darkTheme = false;
    navLinks.forEach((link) => {
      link.style.setProperty("--link-color", "#1c1c1c");
    });
    themeChanger.style.setProperty("--link-color", "white");
    icon.classList.remove("uil-moon");
    icon.classList.add("uil-sun");
  }
};

navLinks.forEach((link) => {
  link.addEventListener("mouseleave", () => {
    mouseCursor.classList.remove("link-grow");
    if (darkTheme == false) {
      link.style.setProperty("--link-color", "#1c1c1c");
    } else {
      link.style.setProperty("--link-color", "white");
    }
  });
  link.addEventListener("mouseover", () => {
    mouseCursor.classList.add("link-grow");
    if (darkTheme == false) {
      link.style.setProperty("--link-color", "white");
    } else {
      link.style.setProperty("--link-color", "#1c1c1c");
    }
  });
  themeChanger.addEventListener("mouseleave", () => {
    mouseCursor.classList.remove("link-grow");
    if (darkTheme == false) {
      themeChanger.style.setProperty("--link-color", "#1c1c1c");
    } else {
      themeChanger.style.setProperty("--link-color", "white");
    }
  });
  themeChanger.addEventListener("mouseover", () => {
    mouseCursor.classList.add("link-grow");
    if (darkTheme == false) {
      themeChanger.style.setProperty("--link-color", "white");
    } else {
      themeChanger.style.setProperty("--link-color", "#1c1c1c");
    }
  });
});

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let spots = [];
let hue = 0;

const mouse = {
  x: undefined,
  y: undefined,
};

canvas.addEventListener("mousemove", function (event) {
  mouse.x = event.x;
  mouse.y = event.y;
  for (let i = 0; i < 3; i++) {
    spots.push(new Particle());
  }
});

class Particle {
  constructor() {
    this.x = mouse.x;
    this.y = mouse.y;
    this.size = Math.random() * 2 + 0.5;
    this.speedX = Math.random() * 2 - 1;
    this.speedY = Math.random() * 2 - 1;
    this.color = "hsl(" + hue + ", 100%, 50%)";
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.size > 0.1) this.size -= 0.03;
  }
  draw() {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

function handleParticle() {
  for (let i = 0; i < spots.length; i++) {
    spots[i].update();
    spots[i].draw();
    for (let j = i; j < spots.length; j++) {
      const dx = spots[i].x - spots[j].x;
      const dy = spots[i].y - spots[j].y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      if (distance < 90) {
        ctx.beginPath();
        ctx.strokeStyle = spots[i].color;
        ctx.lineWidth = spots[i].size / 5;
        ctx.moveTo(spots[i].x, spots[i].y);
        ctx.lineTo(spots[j].x, spots[j].y);
        ctx.stroke();
      }
    }
    if (spots[i].size <= 0.3) {
      spots.splice(i, 1);
      i--;
    }
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  handleParticle();
  hue++;
  requestAnimationFrame(animate);
}

window.addEventListener("resize", function () {
  canvas.width = innerWidth;
  canvas.height = innerHeight;
  init();
});

window.addEventListener("mouseout", function () {
  mouse.x = undefined;
  mouse.y = undefined;
});

animate();

// Text Changing
// const words = ["Programmer", "UI / UX Designer", "Musician"];
// const wordContainer = document.querySelector("#words");
// let i = 0;
// const cycleText = () => {
//   wordContainer.innerHTML = words[i];
//   i = ++i % words.length;
// };
// cycleText();
// setInterval(cycleText, 3000);

const logoAnimation = document.querySelector(".logo");
const navLinksAnimation = document.querySelector(".nav-links");
const welcomeAnimation = document.querySelector("#welcome");
const aryanAnimation = document.querySelector("#aryan_title");
const wordsAnimation = document.querySelector(".wrapper");
const contactmeAnimation = document.querySelector("#contact-me");
const burgerAnimation = document.querySelector(".burger");

const tl = new TimelineMax();

var w = window.innerWidth;

if (w >= 960) {
  tl.fromTo(
    logoAnimation,
    1.2,
    { opacity: "0", x: "-40" },
    { opacity: "1", x: "0", ease: Power2.easeInOut }
  )
    .fromTo(
      navLinksAnimation,
      1.2,
      { opacity: "0", x: "+40" },
      { opacity: "1", x: "0", ease: Power2.easeInOut },
      "-=1.2"
    )
    .fromTo(
      welcomeAnimation,
      1,
      { opacity: "0", y: "+40" },
      { opacity: "1", y: "0", ease: Power2.easeInOut }
    )
    .fromTo(
      aryanAnimation,
      1,
      { opacity: "0", y: "+40" },
      { opacity: "1", y: "0", ease: Power2.easeInOut },
      "-=1"
    )
    .fromTo(
      wordsAnimation,
      1,
      { opacity: "0", y: "+40" },
      { opacity: "1", y: "0", ease: Power2.easeInOut },
      "-=1"
    )
    .fromTo(
      contactmeAnimation,
      1,
      { opacity: "0", y: "-40" },
      { opacity: "1", y: "0", ease: Power2.easeInOut },
      "-=1"
    );
} else {
  tl.fromTo(
    logoAnimation,
    1.2,
    { opacity: "0", x: "-40" },
    { opacity: "1", x: "0", ease: Power2.easeInOut }
  )
    .fromTo(
      burgerAnimation,
      1.2,
      { opacity: "0", x: "+40" },
      { opacity: "1", x: "0", ease: Power2.easeInOut },
      "-=1.2"
    )
    .fromTo(
      welcomeAnimation,
      1,
      { opacity: "0", y: "+40" },
      { opacity: "1", y: "0", ease: Power2.easeInOut }
    )
    .fromTo(
      aryanAnimation,
      1,
      { opacity: "0", y: "+40" },
      { opacity: "1", y: "0", ease: Power2.easeInOut },
      "-=1"
    )
    .fromTo(
      wordsAnimation,
      1,
      { opacity: "0", y: "+40" },
      { opacity: "1", y: "0", ease: Power2.easeInOut },
      "-=1"
    )
    .fromTo(
      contactmeAnimation,
      1,
      { opacity: "0", y: "-40" },
      { opacity: "1", y: "0", ease: Power2.easeInOut },
      "-=1"
    );
}

const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".navbar-links");

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.5
        }s`;
      }
    });
    burger.classList.toggle("toggle");
  });
};

navSlide();

//Typed JS Animation
var typed = new Typed(".auto-type", {
  strings: ["Programmer", "UI / UX Designer", "FreeLancer", "BTech Student"],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true
})