//1. Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, мы должны получить на выходе объект,
//в котором в соответствующих свойствах описаны единицы, десятки и сотни. Например, для числа 245 мы должны получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}.
//Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.

function getDigi(num) {
            if (!Number.isInteger(num) || num < 0 || num > 999) {
                console.log('Значение аргумента должно быть целым числом в диапазоне [0 .. 999].');
                return {};
            }

            return {
                firstDigit: num % 10,
                secondDigit: Math.floor(num / 10) % 10,
                thirdDigit: Math.floor(num / 100),
            };
        }

        console.log(getDigi(934));
		
//2 Продолжить работу с интернет-магазином:


 const basket = {
            goods: [
                {
                    id_product: 126,
                    product_name: "HDD",
                    price: 10200,
                    quantity: 1
                },
                {
                    id_product: 321,
                    product_name: "RAM",
                    price: 761,
                    quantity: 3
                }
            ],
            countBasketPrice() {
                return this.goods.reduce((totalPrice, cartItem) => totalPrice + cartItem.price * cartItem.quantity, 0);
            },

            findGoodById(id) {
                return this.goods.find((cartItem) => cartItem.id_product === id);
            },

            findGoodsByName(title) {
                return this.goods.filter((cartItem) => cartItem.product_name === title); 
            },
        };

        console.log(basket.countBasketPrice());
        console.log(basket.findGoodById(321));
