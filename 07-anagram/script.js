/*
 * Задача 7: «Анаграмма»
 *
 * Два слова называют анаграммами, если они состоят из одних и тех же букв.
 * Напишите функцию, проверяющую, являются ли две строки анаграммами друг друга
 * (регистр букв не имеет значения). Для простоты примите, что в этих строках
 * нет пробелов и знаков препинания.
 * 
*/

function anagram(str1, str2) {
    // Проверяем корректность введённых данных (без учёта знаков препинания и пробелов)
    if (!str1 || !str2 || typeof str1 !== 'string' || typeof str2 !== 'string') {
        return false;
    }

    // Переводим строки в нижний регистр
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();

    // Проверяем, что это не одно и то же слово
    if (str1 === str2) { return false };

    // Формируем массивы из строк
    const strArr1 = str1.split('');
    const strArr2 = str2.split('');

    // Сортируем...
    strArr1.sort();
    strArr2.sort();

    //Сравниваем...
    if (strArr1.length !== strArr2.length) { return false }
    else {
        for (let i = 0; i < strArr1.length; i += 1) {
            if (strArr1[i] !== strArr2[i]) { return false }
        }
        return true;
    }
}

// Протестируйте решение, вызывая функцию с разными аргументами:
console.log(anagram('finder', 'Friend')); // true
console.log(anagram('hello', 'bye')); // false