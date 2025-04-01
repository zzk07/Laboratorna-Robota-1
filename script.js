function calculate() {
    let num = document.getElementById("numberInput").value;
    let digits = num.split('').map(Number).filter(n => !isNaN(n));
    let sum = digits.reduce((a, b) => a + b, 0);
    let product = digits.reduce((a, b) => a * b, 1);
    document.getElementById("result").innerText = `Сума: ${sum}, Добуток: ${product}`;
}
