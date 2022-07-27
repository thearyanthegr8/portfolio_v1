const logo = document.querySelector("#logo");

const tl = new TimelineMax();

tl.fromTo(
  logo,
  1.2,
  { opacity: "0", x: "-40" },
  { opacity: "1", x: "0", ease: Power2.easeInOut }
);
