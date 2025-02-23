// script.js
const festivals = [
  { name: "清明节", date: "2025-04-04" },
  { name: "劳动节", date: "2025-05-01" },
  { name: "端午节", date: "2025-06-10" },
  { name: "暑假", date: "2025-07-05" },
  { name: "中秋节", date: "2025-09-17" },
  { name: "国庆节", date: "2025-10-01" },
  { name: "元旦", date: "2026-01-01" },
  { name: "除夕", date: "2026-02-16" },
  { name: "春节", date: "2025-02-17" },

];

function calculateCountdown(date) {
  const now = new Date();
  const target = new Date(date);
  const diff = target - now;
  if (diff <= 0) return "已到期";

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return `${days}天 ${hours}小时 ${minutes}分 ${seconds}秒`;
}

function updateCountdowns() {
  const countdownList = document.getElementById("countdownList");
  countdownList.innerHTML = "";

  festivals.forEach(festival => {
    const card = document.createElement("div");
    card.className = "card";

    const title = document.createElement("h2");
    title.className = "card-title";
    title.textContent = festival.name;

    const timer = document.createElement("div");
    timer.className = "card-timer";
    timer.textContent = calculateCountdown(festival.date);

    const description = document.createElement("p");
    description.className = "card-description";
    description.textContent = `日期：${festival.date}`;

    card.appendChild(title);
    card.appendChild(timer);
    card.appendChild(description);
    countdownList.appendChild(card);
  });
}

// 每秒更新倒计时
setInterval(updateCountdowns, 1000);

// 初始化
updateCountdowns();