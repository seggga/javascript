"use strict";

/*
1. к числу 10 прибавляем 10, получаем число 20
2. приведение к строковому типу числа 20, получаем строку "20"
3. конкатенация двух строк "20" и "10", получаем строку "2010"
4. присваивание переменной result значения "2010"
5. с помощью console.log выводим result в консоль
*/
let result = 10 + 10 + "10";
console.log(result);



/*
1. приведение числа 10 к типу строка, получаем строку "10"
2. конкатенация строк "10" и "10", получаем строку "1010"
3. приведение числа 10 к типу строка, получаем еще одну строку "10"
4. конкатенация строк "1010" и "10", получаем строку "101010"
5. присваивание переменной result значения "101010"
6. с помощью console.log выводим result в консоль
*/
result = 10 + "10" + 10;
console.log(result);


/*
1. приведение типа строки "10" к числовому, получаем число 10
2. сложение первых двух числе 10 и 10, получаем 20
3. сложение 20 и приведенного числа 10, получаем 30
4. присваивание переменной result значения "30"
5. с помощью console.log выводим result в консоль
*/
result = 10 + 10 + +"10"; //(обратите внимание на пробелы, пишите также)
console.log(result);



/*
1. приведение типа пустой строки к числовому, получаем 0
2. унарная операция "минус", поулчаем минус 0
3. деление числа 10 на минус 0, получаем  -Infinity
4. присваивание переменной result значения -Infinity
5. с помощью console.log выводим result в консоль
*/
result = 10 / -"";
console.log(result);


/*
1. приведение типа строки "2,5" к числовому, из-за ошибки парсинга получаем NaN
2. деление числа 10 на NaN, получаем NaN
3. присваивание переменной result значения NaN
4. с помощью console.log выводим result в консоль
*/
result = 10 / +"2,5"; //(да здесь запятая, это не опечатка)
console.log(result);

