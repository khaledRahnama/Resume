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

// const textElement = document.getElementById("rainbowText");
// const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];
// let colorIndex = 0;

// // Wrap each letter in a <span>
// textElement.innerHTML = textElement.textContent
//   .split("")
//   .map((letter) => `<span>${letter}</span>`)
//   .join("");

// // Animate the colors
// const animateRainbow = () => {
//   const letters = textElement.querySelectorAll("span");
//   letters.forEach((letter, index) => {
//     const nextColorIndex = (colorIndex + index) % colors.length;
//     letter.style.color = colors[nextColorIndex];
//   });
//   colorIndex = (colorIndex + 1) % colors.length;
// };

// // Update colors every 100ms
// setInterval(animateRainbow, 100);


const skills = document.querySelectorAll(".skills-list span");

skills.forEach((skill) => {
  // Generate a random HSL color with fixed S and L ranges
  const randomHue = Math.floor(Math.random() * 360);
  const saturation = 70; // Fixed saturation
  const lightness = 50; // Fixed lightness
  const randomColor = `hsl(${randomHue}, ${saturation}%, ${lightness}%)`;

  skill.style.backgroundColor = randomColor;

  // Convert HSL to RGB to calculate luminance
  const hslToRgb = (h, s, l) => {
    s /= 100;
    l /= 100;
    const k = n => (n + h / 30) % 12;
    const a = s * Math.min(l, 1 - l);
    const f = n => l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
    return [f(0) * 255, f(8) * 255, f(4) * 255];
  };

  const [r, g, b] = hslToRgb(randomHue, saturation, lightness);
  const luminance = 0.299 * r + 0.587 * g + 0.114 * b;

  skill.style.color = luminance > 186 ? "black" : "white"; // Light background -> black text, dark background -> white text
  skill.style.padding = "5px";
  skill.style.borderRadius = "5px";
  skill.style.margin = "2px";
});
