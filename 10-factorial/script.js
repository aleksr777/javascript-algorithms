/*
 * Задача 10: «Факториал»
 *
 * Напишите функцию factorial(n), возвращающую факториал неотрицательного
 * целого числа. Факториал — это произведение всех натуральных чисел
 * от 1 до n включительно. Факториал 0 равен 1.
 * 
*/

function factorial(n) {
    if (n === 0 || n === '0') {
        return 1;
    }
    n = Number(n);
    if (typeof n !== 'number' || Boolean(n) !== true || n < 0 || !Number.isInteger(n)) {
        return false;
    }
    return n * factorial(n - 1);
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(factorial('0')); // 1
console.log(factorial(0)); // 1
console.log(factorial(1)); // 1
console.log(factorial(6)); // 720
console.log(factorial('6')); // 720
console.log(factorial('-6')); // 720
console.log(factorial(-10)); // false
console.log(factorial(1.2)); // false