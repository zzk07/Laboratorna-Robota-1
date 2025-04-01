function convert() {
    let value = parseFloat(document.getElementById("inputValue").value);
    let unit = document.getElementById("inputUnit").value;
    
    if (isNaN(value)) {
        alert("Введіть число!");
        return;
    }

    // Перетворюємо в метри
    let meters;
    switch (unit) {
        case "km": meters = value * 1000; break;
        case "m": meters = value; break;
        case "cm": meters = value / 100; break;
        case "dm": meters = value / 10; break;
        case "mm": meters = value / 1000; break;
    }

    // Розраховуємо всі одиниці
    let results = {
        "Кілометри": meters / 1000,
        "Метри": meters,
        "Сантиметри": meters * 100,
        "Дециметри": meters * 10,
        "Міліметри": meters * 1000
    };

    // Вивід результатів
    let outputList = document.getElementById("outputList");
    outputList.innerHTML = "";
    for (let unit in results) {
        let li = document.createElement("li");
        li.textContent = `${unit}: ${results[unit]}`;
        outputList.appendChild(li);
    }
}
