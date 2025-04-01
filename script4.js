let clickCount = 0;

const button = document.getElementById("clickButton");
const clickCounter = document.getElementById("clickCount");

button.addEventListener("click", () => {
    clickCount++;
    clickCounter.textContent = clickCount;
});
