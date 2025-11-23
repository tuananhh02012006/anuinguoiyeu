// ====== HÀM TẠO TIM BAY CHUNG ======
function createHeart(container, emoji = "💛") {
  if (!container) return;

  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.textContent = emoji;

  const randomX = Math.random() * 80 + 10; // 10% -> 90%
  heart.style.left = randomX + "%";

  const randomDelay = Math.random() * 0.4;
  const randomSize = Math.random() * 10 + 18; // 18px -> 28px
  heart.style.fontSize = randomSize + "px";
  heart.style.animationDelay = randomDelay + "s";

  container.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 2600);
}

// ====== TRANG 1: NÚT DẪN SANG LINH.HTML ======
const goBtn = document.getElementById("goToLinhPage");
const heartContainer = document.getElementById("heartContainer");

if (goBtn) {
  goBtn.addEventListener("click", () => {
    // chơi vài trái tim trước khi chuyển trang
    for (let i = 0; i < 8; i++) {
      setTimeout(() => createHeart(heartContainer, "💛"), i * 120);
    }

    setTimeout(() => {
      window.location.href = "linh.html";
    }, 1500);
  });

  // tim bay nhẹ lúc mới vào
  setTimeout(() => {
    for (let i = 0; i < 5; i++) {
      setTimeout(() => createHeart(heartContainer, "💛"), i * 250);
    }
  }, 500);
}

// ====== TRANG 2: TIM BAY LIÊN TỤC TRÊN CÂY HOA ======
const heartContainerLinh = document.getElementById("heartContainerLinh");

if (heartContainerLinh) {
  setInterval(() => {
    createHeart(heartContainerLinh, "💖");
  }, 650);
}
