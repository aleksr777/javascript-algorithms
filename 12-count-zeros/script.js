/*
 * Задача 12: «Посчитать количество нулей»
 *
 * Напишите функцию countZeros(n), принимающую на вход натуральное число n.
 * Возвращать функция должна суммарное количество нулей, содержащихся во всех числах от 1 до n включительно.
 *
*/

function countZeros(n) {
    n = Number(n);
    if (typeof n !== 'number' || Boolean(n) !== true && n !== 0) { return false }
    else if (n < 10) { return 0 }
    else {
        let sum = 0;
        let str;
        for (let i = 10; i <= n; i += 1) {
            str = String(i);
            const strArr = str.split('');
            for (let j = 0; j < strArr.length; j += 1) {
                if (strArr[j] === '0') { sum += 1 }
            }
        }
        return sum;
    }

}

// Протестируйте решение, вызывая функцию с разными аргументами:

//console.log(countZeros(20)); // 2 – два нуля, по одному в числах 10 и 20
//console.log(countZeros(100)); // 11 – 11 нулей в числах: 10, 20, 30, 40, 50, 60, 70, 80, 90, 100
console.log(countZeros(322));