// Smooth scroll for navigation
document.querySelectorAll(".navbar a").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const target = document.querySelector(event.target.getAttribute("href"));
    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});

const textElement = document.getElementById("rainbowText");
const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
let colorIndex = 0;

// Wrap each letter in a <span>
textElement.innerHTML = textElement.textContent
  .split("")
  .map((letter) => `<span>${letter}</span>`)
  .join("");

// Animate the colors
const animateRainbow = () => {
  const letters = textElement.querySelectorAll("span");
  letters.forEach((letter, index) => {
    const nextColorIndex = (colorIndex + index) % colors.length;
    letter.style.color = colors[nextColorIndex];
  });
  colorIndex = (colorIndex + 1) % colors.length;
};

// Update colors every 100ms
setInterval(animateRainbow, 100);
