/*
 * Задача 2: «FizzBuzz»
 *
 * Напишите функцию fizzBuzz(n), принимающую как аргумент натуральное число.
 * Функция должна выводить в консоль числа от 1 до n, заменяя числа:
 *
 * • кратные трём — на fizz;
 * • кратные пяти — на buzz;
 * • кратные и трём, и пяти одновременно — на fizzbuzz.
 * 
*/

function fizzBuzz(num) {
    const numb = Number(num);
    if (!num) {
        return 'Данные не введены!';
    }
    else if (!numb || numb <= 0 || !Number.isInteger(numb)) {
        return 'Нужно ввести целое число больше 0!';
    }
    else {
        for (let i = 1; i <= numb; i++) {
            if (i % 3 === 0 && i % 5 === 0) {
                console.log('fizzbuzz');
            }
            else if (i % 3 === 0) {
                console.log('fizz');
            }
            else if (i % 5 === 0) {
                console.log('buzz');
            }
            else {
                console.log(i);
            }
        }
        return '';
    }
};

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(fizzBuzz(23));