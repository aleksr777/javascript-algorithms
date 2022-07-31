/*
 * Задача 9: «Простое число»
 *
 * Напишите функцию isPrime(n) для проверки, простое число n или нет.
 * Напомним, что число называют простым, если оно больше 1 и делится
 * без остатка только на 1 и на само себя.
 * 
 * На вход функция должна принимать число n и возвращать true,
 * если n простое, и false — если нет.
*/

function isPrime(n) {
    if (n === 1 || n === '1' || n === 0 || n === '0') { return false }
    n = Number(n);
    if (typeof n !== 'number' || Boolean(n) !== true) { return false }
    for (let j = 2; j <= 10; j += 1) {
        if (n === j) { continue }
        else if (n % j === 0) { return false }
    }
    return true;
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(isPrime('11'));
console.log(isPrime(3));
console.log(isPrime('3'));
console.log(isPrime(2));
console.log(isPrime(9));