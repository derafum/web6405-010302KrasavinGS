// Проверяет, является ли число целым с помощью побитового оператора
function isInteger(n) {
    return (n | 0) === n; // Побитовая операция убирает дробную часть
}

// Возвращает массив четных чисел от 2 до 20
function even() {
    let result = [];
    for (let i = 2; i <= 20; i += 2) {
        result.push(i); // Добавляем четное число в массив
    }
    return result;
}

// Считает сумму чисел от 1 до n с помощью цикла
function sumTo(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i; // Суммируем числа
    }
    return sum;
}

// Считает сумму чисел от 1 до n рекурсивно
function recSumTo(n) {
    if (n === 1) return 1; // Базовый случай
    return n + recSumTo(n - 1); // Рекурсивный вызов
}

// Считает факториал числа (n!)
function factorial(n) {
    if (n <= 1) return 1; // Базовый случай
    return n * factorial(n - 1); // Умножаем на следующий факториал
}

// Проверяет, является ли число степенью двойки
function isBinary(n) {
    return n > 0 && (n & (n - 1)) === 0; // Проверка на степень двойки
}

// Вычисляет n-е число Фибоначчи
function fibonacci(n) {
    if (n <= 1) return n; // Первые два числа
    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
        let temp = a + b; // Следующее число = сумма двух предыдущих
        a = b;
        b = temp;
    }
    return b;
}

// Создает функцию для выполнения операции с сохранением результата
function getOperationFn(initialValue, operatorFn) {
    let storedValue = initialValue;
    return function(newValue) {
        if (!operatorFn) return storedValue; // Если операции нет, возвращаем текущее значение
        storedValue = operatorFn(storedValue, newValue); // Применяем операцию
        return storedValue;
    };
}

// Генератор арифметической последовательности
function sequence(start = 0, step = 1) {
    let current = start;
    return function() {
        let result = current;
        current += step; // Увеличиваем на шаг
        return result;
    };
}

// Глубокое сравнение объектов
function deepEqual(firstObject, secondObject) {
    if (Number.isNaN(firstObject) && Number.isNaN(secondObject)) return true;

    if (firstObject === secondObject) return true;

    if (typeof firstObject !== 'object' || firstObject === null ||
        typeof secondObject !== 'object' || secondObject === null) {
        return false;
    }

    const firstKeys = Object.keys(firstObject);
    const secondKeys = Object.keys(secondObject);
    if (firstKeys.length !== secondKeys.length) return false;

    for (let key of firstKeys) {
        if (!secondObject.hasOwnProperty(key) || !deepEqual(firstObject[key], secondObject[key])) {
            return false;
        }
    }

    return true;
}

// Экспорт функций
module.exports = {
    isInteger,
    even,
    sumTo,
    recSumTo,
    factorial,
    isBinary,
    fibonacci,
    getOperationFn,
    sequence,
    deepEqual,
};
