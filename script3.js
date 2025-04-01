function checkTriangle() {
    let a = parseFloat(document.getElementById("a").value);
    let b = parseFloat(document.getElementById("b").value);
    let c = parseFloat(document.getElementById("c").value);
    let resultElement = document.getElementById("triangleResult");

    console.log("Введені значення:", a, b, c); // Додано для перевірки

    if (isNaN(a) || isNaN(b) || isNaN(c) || a <= 0 || b <= 0 || c <= 0) {
        resultElement.innerText = "Будь ласка, введіть коректні додатні числа.";
        return;
    }

    if (a + b > c && a + c > b && b + c > a) {
        let type = "";
        if (a === b && b === c) {
            type = "Рівносторонній трикутник";
        } else if (a === b || a === c || b === c) {
            type = "Рівнобедрений трикутник";
        } else {
            type = "Різносторонній трикутник";
        }
        resultElement.innerText = `✅ Можна побудувати трикутник. Тип: ${type}`;
    } else {
        resultElement.innerText = "❌ Не можна побудувати трикутник.";
    }
}
