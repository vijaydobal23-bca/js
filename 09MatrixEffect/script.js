const p = document.querySelector("p");
const text = p.innerText;

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

let iteration = 0;

function randomText() {
  const str = text
    .split("")
    .map((char, idx) => {
      if (idx < iteration) return char;
      
      return characters[Math.floor(Math.random() * characters.length)];
    })
    .join("");

  p.innerText = str;

  iteration += 0.5; 

  if (iteration >= text.length) {
    clearInterval(interval);
  }
}

const interval = setInterval(randomText, 100);