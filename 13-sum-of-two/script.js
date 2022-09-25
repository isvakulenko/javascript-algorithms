/*
 * Задача 13: «Сумма двух»
 *
 * Напишите функцию sumOfTwo(arr, num). Её аргументы: массив целых чисел arr
 * и целое число num. Функция должна вернуть true, если в переданном массиве
 * есть какие-то два числа, чья сумма равна num. Если же такой пары чисел нет,
 * функция должна вернуть false.
 * 
*/

function sumOfTwo(arr, sum) {
    // Напишите код здесь
    let arrSum = [];
    for (let i = 0; i  <=  arr.length - 1; i++) {
           for (let k = i+1; k <= arr.length - 1; k++) {
        if (arr[i] + arr[k] === sum)
           {
              arrSum.push(true)
                   }
         else 
          arrSum.push(false);
      }
    }
   return arrSum.includes(true)? true:false;
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(sumOfTwo([1, 2, 3, 4, 5], 4)); // true (так как 1 + 3 === 4)
console.log(sumOfTwo([1, 2, 3, 4, 5], 100)); // false