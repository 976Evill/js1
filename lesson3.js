console.log('======== 1 задание ========');
        let nums = 0;
        while (nums <= 100) {
            let check = true;
            for (let i = 2; i < nums; i++){
                if (nums%i === 0) {
                    check = false;
                    break;
                }
            }
            if (check) console.log(nums);
            nums++;
        }


  console.log('======== 2 задание ========');
        function getNumber(min, max) {
            let number = parseInt(Math.random() * (max - min) + min);
            if (number === -0) number = 0;
            return number;
        }

        let basket = [
            {
                product: "pen",
                price: getNumber(50, 100)
            },
            {
                product: "pencil",
                price: getNumber(50, 100)
            },
            {
                product: "file",
                price: getNumber(50, 100)
            },
            {
                product: "paper",
                price: getNumber(50, 100)
            }
        ];
        let basketPrice = 0;
        for (let prod of basket) {
            basketPrice += prod.price;
            console.log("Товар " + prod.product + " стоит: " + prod.price);
        }

        console.log("Стоимость корзины: " + basketPrice + " у.е.");
		
 console.log('======== 3 задание ========');
        function countBasketPrice(basket) {
            let funBasketPrice = 0;
            for (let prod of basket){
                funBasketPrice += prod.price;
            }
            return funBasketPrice;
        }

        console.log("Стоимость корзины: " + countBasketPrice(basket) + " у.е.");


console.log('======== 4 задание ========');
        for (let i = 0; i < 10; console.log(i++)) {} ;
		
console.log('======== 5 задание ========');
        let row = 'x';
        for (let i = 0; i < 20; i++){
            console.log(row);
            row += 'x';
        }



