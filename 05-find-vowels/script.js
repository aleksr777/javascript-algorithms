/*
 * Задача 5: «Найти гласные»
 *
 * Напишите функцию findVowels(str), принимающую на вход кириллическую
 * строку str  и возвращающую количество гласных, содержащихся в этой строке.
 * Для вашего удобства вот массив кириллических гласных:
 * 
 * ['а', 'я', 'о', 'ё', 'у', 'ю', 'ы', 'и', 'э', 'е'].
 *
*/

function findVowels(str) {

    //функция для поиска гласных букв
    const verify = (sign) => {
        const arrSigns = ['а', 'я', 'о', 'ё', 'у', 'ю', 'ы', 'и', 'э', 'е'];
        for (let s = 0; s < arrSigns.length; s++) {
            if (sign === arrSigns[s]) { return true; }
        }
        return false;
    }

    // Приводим к нижнему регистру строку
    str = str.toLowerCase();

    // переводим строку в массив
    const wordArr = str.split('');

    // подсчитываем...
    let consonantsSum = wordArr.reduce((prev, item) => {
        if (verify(item)) { return prev += 1 }
        else { return prev }
    }, 0);

    return consonantsSum;
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(findVowels('здравствуй')); // 2
console.log(findVowels('привет')); // 2
console.log(findVowels('хеллоу')); // 3