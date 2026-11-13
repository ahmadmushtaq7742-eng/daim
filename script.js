let currentPage = 1;

function nextPage(number) {
  document.querySelectorAll(".page").forEach(page => {
    page.classList.remove("active");
  });

  document.getElementById("page" + number).classList.add("active");

  currentPage = number;

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

// Background music
const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");

function toggleMusic() {
  if (music.paused) {
    music.play().then(() => {
      musicBtn.innerText = "⏸ Pause Music";
    }).catch(() => {
      musicBtn.innerText = "▶ Try Music Again";
    });
  } else {
    music.pause();
    musicBtn.innerText = "🎵 Play Music";
  }
}

// Floating hearts
const hearts = document.getElementById("hearts");

function createHeart() {
  const heart = document.createElement("span");

  heart.innerHTML = Math.random() > 0.5 ? "💖" : "✨";

  heart.style.position = "fixed";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.bottom = "-30px";
  heart.style.fontSize = (15 + Math.random() * 20) + "px";
  heart.style.pointerEvents = "none";
  heart.style.zIndex = "2";
  heart.style.transition = "transform 5s linear, opacity 5s";

  hearts.appendChild(heart);

  requestAnimationFrame(() => {
    heart.style.transform = `translateY(-${window.innerHeight + 80}px) rotate(360deg)`;
    heart.style.opacity = "0";
  });

  setTimeout(() => heart.remove(), 5100);
}

setInterval(createHeart, 500);