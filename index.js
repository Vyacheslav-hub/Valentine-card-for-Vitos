const audio = document.getElementById('valentineAudio');
const left = document.getElementById('leftHalf');
const right = document.getElementById('rightHalf');

let hasPlayed = false;

function checkHearts() {
    // Проверяем, открыты ли ОБЕ половинки
    const isLeftOpen = left.classList.contains('is-open');
    const isRightOpen = right.classList.contains('is-open');
// 1. Если обе створки открыты — включаем или продолжаем играть
if (isLeftOpen && isRightOpen) {
    audio.play().catch(e => console.log("Нужен клик для звука"));
} 
// 2. Если прервали (хотя бы одна закрыта) — ставим на паузу
else {
    audio.pause();
}

// 3. ЛОГИКА СБРОСА: если обе створки закрыты — перематываем в начало
// Теперь при следующем полном открытии музыка заиграет сначала
if (!isLeftOpen && !isRightOpen) {
    audio.currentTime = 0;
}
}

// Слушатели событий на клик
left.addEventListener('click', () => {
    left.classList.toggle('is-open');
    checkHearts();
});

right.addEventListener('click', () => {
    right.classList.toggle('is-open');
    checkHearts();
});
