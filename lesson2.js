
//1)В JavaScript есть префиксная и постфиксная форма их записи. 
//По сути, обе увеличивают значение операнда на единицу,но в 
//префиксной форме инкрементирование производится сразу,
 //а возврат — уже с обновленным значением.
//2) 5
//3)
let x = parseInt(prompt('Введите число x'));
let y = parseInt(prompt('Введите число y'));
if(x && y > 0) 
   alert(x - y);
else if ( x && y  < 0)
   alert(x*y);
else
   alert(x + y);
//4)4. Присвоить переменной а значение в промежутке [0..15].
// С помощью оператора switch организовать вывод чисел от a до 15.
 
 function recursion(x) {
      if (x <= 0 || !Number.isInteger(x)) return 'Задайте целое число больше 0';
         if (x === 1) return '1';
         return recursion(x - 1) + ' ' + x;
     }
 
 a = +prompt ('Введите число от 1 до 15');
		switch (a) {
		case 1:
			alert ( 'Ваше число 1');
			alert (recursion(a));
			break;
		case 2:
			alert ( 'Ваше число 2');
			alert (recursion(a));
			break;
		case 3:
			alert ( 'Ваше число 3');
			alert (recursion(a));
			break;
		case 4:
			alert ( 'Ваше число 4');
			alert (recursion(a));
			break;
		case 5:
			alert ( 'Ваше число 5');
			break;
		case 6:
			alert ( 'Ваше число 6');
			alert (recursion(a));
			break;
		case 7:
			alert ( 'Ваше число 7');
			alert (recursion(a));
			break;
		case 8:
			alert ( 'Ваше число 8');
			alert (recursion(a));
			break;
		case 9:
			alert ( 'Ваше число 9');
			alert (recursion(a));
			break;
		case 10:
			alert ( 'Ваше число 10');
			alert (recursion(a));
			break;
		case 11:
			alert ( 'Ваше число 11');
			alert (recursion(a));
			break;
		case 12:
			alert ( 'Ваше число 12');
			alert (recursion(a));
			break;
		case 13:
			alert ( 'Ваше число 13');
			alert (recursion(a));
			break;
		case 14:
			alert ( 'Ваше число 14');
			alert (recursion(a));
			break;
		case 15:
			alert ( 'Ваше число 15');
			alert (recursion(a));
			break;	
		}	
//Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return.

function sum(x, y) {
            return (x + y);
        }
        a = sum(3, 4);
        alert(a);
		
function mult(x, y) {
            return (x * y);
        }
        a = mult(3, 4);
        alert(a);
		
function divi(x, y) {
            return (x / y);
        }
        a = divi(3, 4);
        alert(a);
function razn(x, y) {
            return (x - y);
        }
        a = razn(3, 4);
        alert(a);
		
		
//Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 – значения аргументов, operation – строка с названием операции. 
//В зависимости от переданного значения операции выполнить одну из арифметических операций (использовать функции из пункта 5) и вернуть полученное значение (использовать switch).

function mathOperation(arg1, arg2, operation) {
            switch (operation) {
                case sum:
                    return sum(arg1, arg2);
                    break;
                case mult:
                    return mult(arg1, arg2);
                    break;
                case divi:
                    return divi(arg1, arg2);
                    break;
                case razn:
                    return razn(arg1, arg2);
                    break;
            }
        }
        alert(mathOperation(3, 4, sum));
		
//7. *Сравнить null и 0. Попробуйте объяснить результат.
//Пыпытка сравнить на тождество выдаёт FALSE тк:
//Есть значение NULL - это отсутствие значения( не определено). Есть 0 - это означает именно 0(ноль) или ложь(FALSE).

//8. *С помощью рекурсии организовать функцию возведения числа в степень. Формат: function power(val, pow), где val – заданное число, pow – степень.
function pow(x, n) {
  if (n == 1) {
    return x;
  } else {
    return x * pow(x, n - 1);
  }
}

alert( pow(2, 3) ); // 8
		




