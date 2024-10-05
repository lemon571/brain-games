function generateGeometricProgression() {
    const start = Math.floor(Math.random() * 10) + 1; // Начальный элемент
    const ratio = Math.floor(Math.random() * 5) + 1; // Задаем шаг прогрессии
    const length = 10; // Длина прогрессии
    const progression = [];

    for (let i = 0; i < length; i++) {
        progression.push(start * Math.pow(ratio, i));
    }

    const missingIndex = Math.floor(Math.random() * length);
    const missingValue = progression[missingIndex];
    progression[missingIndex] = '..'; // Заменяем пропущенное значение

    return { progression, missingValue };
}

module.exports = { generateGeometricProgression };
