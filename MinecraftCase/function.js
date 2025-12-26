const tape = document.getElementById("tape");
const btn = document.getElementById("spin-button");
const attemptsDisplay = document.getElementById("attempts-display");
const slots = document.querySelectorAll(".slot");

// --- 1. ЗАГРУЗКА ПОПЫТОК ---
let savedAttempts = localStorage.getItem('Attempts');
let attempts = (savedAttempts === null) ? 18 : Number(savedAttempts);
attemptsDisplay.textContent = `ПОПЫТКИ: ${attempts}`;

// --- 2. ЗАГРУЗКА ИНВЕНТАРЯ ---
let savedInv = localStorage.getItem('Inventory');
// Если в памяти есть данные, превращаем их в массив, если нет — создаем пустой []
let inventoryData = savedInv ? JSON.parse(savedInv) : [];

// Сразу рисуем сохраненные предметы в слоты
function loadInventory() {
    inventoryData.forEach((itemImg, index) => {
        if (index < slots.length) {
            slots[index].textContent = itemImg;
        }
    });
}
loadInventory();

// Указываем индекс для следующего предмета (равен количеству уже выбитых)
let inventoryIndex = inventoryData.length;

const gifts = [
  { name: "Алмаз", img: "💎" },
  { name: "Золото", img: "🟡" },
  { name: "Меч", img: "🗡️" },
  { name: "ТНТ", img: "🧨" },
  { name: "Кирка", img: "⛏️" },
  { name: "Яблоко", img: "🍎" }
];

function createTape() {
  tape.innerHTML = "";
  for (let i = 0; i < 150; i++) {
    const gift = gifts[Math.floor(Math.random() * gifts.length)];
    const div = document.createElement("div");
    div.className = "item";
    div.dataset.img = gift.img;
    div.innerHTML = `<span>${gift.img}</span><div style="font-size:10px">${gift.name}</div>`;
    tape.appendChild(div);
  }
}

function spin() {
  if (attempts <= 0) {
      alert("Попытки кончились!");
      return;
  }
  if (inventoryIndex >= slots.length) {
      alert("Инвентарь полон! Сбрось игру.");
      return;
  }

  btn.disabled = true;
  createTape();

  tape.style.transition = "none";
  tape.style.transform = "translateX(0)";

  setTimeout(() => {
    const itemWidth = 102;
    const winningItemIndex = 80;
    const containerWidth = 1000;
    const stopAt = (winningItemIndex * itemWidth) - (containerWidth / 2 - itemWidth / 2);

    tape.style.transition = "transform 5s cubic-bezier(0.1, 0, 0.1, 1)";
    tape.style.transform = `translateX(-${stopAt}px)`;

    setTimeout(() => {
      const allItems = tape.querySelectorAll(".item");
      const winner = allItems[winningItemIndex];
      const winnerImg = winner.dataset.img;

      // СОХРАНЯЕМ В ИНВЕНТАРЬ
      if (inventoryIndex < slots.length) {
        // Добавляем картинку в наш массив данных
        inventoryData.push(winnerImg);
        // Сохраняем обновленный массив в LocalStorage (в виде строки)
        localStorage.setItem('Inventory', JSON.stringify(inventoryData));
        
        // Отображаем в слоте на экране
        slots[inventoryIndex].textContent = winnerImg;
        inventoryIndex++;
      }

      // ОБНОВЛЯЕМ ПОПЫТКИ
      attempts--;
      localStorage.setItem('Attempts', attempts);
      attemptsDisplay.textContent = `ПОПЫТКИ: ${attempts}`;
      
      if (attempts > 0) btn.disabled = false;
    }, 5000);
  }, 50);
}

createTape();