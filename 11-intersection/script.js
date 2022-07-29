/*
 * Задача 11: «Пересечения массивов»
 *
 * Напишите функцию intersection(arr1, arr2). Она должна принимать
 * на вход два массива целых чисел. Функция должна вернуть новый
 * массив чисел, содержащихся в обоих исходных массивах.
 * 
*/

function intersection(arr1, arr2) {
    arr1 = new Set(arr1);
    arr2 = new Set(arr2);
    return [...arr1].filter(item => arr2.has(item));
}

console.log(intersection([1, 5, 4, 2], [8, 91, 4, 1, 3])); // [4, 1]
console.log(intersection([1, 1, 5, 4, 2], [8, 91, 4, 1, 1, 3])); 