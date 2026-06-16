const lottoNumbersContainer = document.getElementById('lotto-numbers');
const generateBtn = document.getElementById('generate-btn');
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Theme logic
function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
    }
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const isDark = body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// Lotto logic
function generateNumbers() {
    const numbers = new Set();
    while (numbers.size < 6) {
        const randomNumber = Math.floor(Math.random() * 45) + 1;
        numbers.add(randomNumber);
    }
    return Array.from(numbers).sort((a, b) => a - b);
}

function displayNumbers() {
    lottoNumbersContainer.innerHTML = '';
    const numbers = generateNumbers();
    numbers.forEach(number => {
        const numberDiv = document.createElement('div');
        numberDiv.classList.add('lotto-number');
        numberDiv.textContent = number;
        lottoNumbersContainer.appendChild(numberDiv);
    });
}

generateBtn.addEventListener('click', displayNumbers);

// Initialize
initTheme();