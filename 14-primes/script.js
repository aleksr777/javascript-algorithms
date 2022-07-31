/*
 * Задача 14: «Простые числа»
 *
 * Напишите функцию primes(n). Её единственный аргумент — целое число n.
 * Функция должна возвращать массив простых чисел от 2 до n.
 * 
*/

function primes(num) {
    arr = [];

    if (num === 1 || num === '1' || num === 0 || num === '0') { return false }

    num = Number(num);

    if (typeof num !== 'number' || Boolean(num) !== true) { return false }

    function checkNum(i) {
        for (let j = 2; j <= 10; j += 1) {
            if (i === j) { continue }
            else if (i % j === 0) { return false }
        }
        return true;
    }

    for (i = 2; i <= num; i += 1) {
        if (checkNum(i)) {
            arr.push(i);
        }
    }
    return arr;
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(primes(6)); // [2, 3, 5]
console.log(primes(17)); // [2, 3, 5, 7, 11, 13, 17]
console.log(primes('18'));
console.log(primes('30'));
console.log(primes('0'));
console.log(primes(1));
console.log(primes('1sdsd'));
console.log(primes()); 