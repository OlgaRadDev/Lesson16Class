const SIZE_MEDIUM = {
    name: 'medium',
    price: 30,
    calories: 20
};
const SIZE_LARGE = {
    name: 'large',
    price: 50,
    calories: 30
};
const STUFFING_CHEESE = {
    name: 'cheese',
    price: 20,
    calories: 15
};
const STUFFING_CHICHEN_CHOP = {
    name: 'chichen chop',
    price: 30,
    calories: 20
};
const STUFFING_BEEF_CHOP = {
    name: 'beef chop',
    price: 30,
    calories: 20
};
const STUFFING_POTATO = {
    name: 'potato',
    price: 30,
    calories: 20
};
const TOPPING_SAUCE = {
    name: 'sauce',
    price: 30,
    calories: 20
};
const TOPPING_MAYO = {
    name: 'mayo',
    price: 30,
    calories: 20
};
const TOPPING_KETCHUP = {
    name: 'ketchup',
    price: 30,
    calories: 20
};


class Burger {
    constructor(name, size) {
        this.name = name;
        this.size = size;
        this.stuffing = [];
        this.topping = []
    }
    getName() {
        return this.name;
    }

    addStuffing(stuffing) {
        return this.stuffing.push(stuffing);
    }
    addTopping(topping) {
        return this.topping.push(topping);
    }
    getSumCalories() {
        let stuffingCalories = this.stuffing.reduce((accumStuf, item) => {
            accumStuf += item.calories;
            return accumStuf;
        },0);

        let toppingCalories = this.topping.reduce((accumTop, item) => {
            accumTop += item.calories;
            return accumTop;
        },0);
        let sumCalories = stuffingCalories + toppingCalories + this.size.calories;
        return sumCalories;
    }
    getTotalPrice() {
        return (
            this.size.price +
            this.stuffing.reduce((accumStuf,item) => accumStuf + item.price,0) +
            this.topping.reduce((accumTop, item) => accumTop + item.price,0)
        );
    }
}

class Cheeseburger extends Burger {
    constructor(name,size) {
        super(name,size);
    }

}
class Hamburger extends Burger {
    constructor(name,size) {
        super(name,size);
    }

    addStuffing(stuffing) {
        if(stuffing.name !== STUFFING_CHEESE.name) {
            return this.stuffing.push(stuffing);
        }
    }

}
const cheeseburger = new Cheeseburger('Cheeseburger', SIZE_MEDIUM);
console.log(cheeseburger.getName());
cheeseburger.addStuffing(STUFFING_CHEESE);
cheeseburger.addStuffing(STUFFING_CHICHEN_CHOP);
cheeseburger.addTopping(TOPPING_SAUCE);
cheeseburger.addTopping(TOPPING_KETCHUP);
// console.log(cheeseburger);
console.log('Total calories: '+ cheeseburger.getSumCalories());
console.log('Total price '+ cheeseburger.getTotalPrice());
//add cheese
cheeseburger.addStuffing(STUFFING_CHEESE);
console.log('Price with one more cheese: ' + cheeseburger.getTotalPrice());
//add mayo
cheeseburger.addTopping(TOPPING_MAYO);
// add chicken chop
cheeseburger.addStuffing(STUFFING_CHICHEN_CHOP);
console.log('Price with mayo and chicken chop: ' + cheeseburger.getTotalPrice());
console.log('Calories with mayo and chicken chop: ' + cheeseburger.getSumCalories());
// console.log(cheeseburger);

console.log('--------------------------------------------------');
const hamburger = new Hamburger('Hamburger', SIZE_MEDIUM);
console.log(hamburger.getName());
hamburger.addStuffing(STUFFING_CHEESE);
hamburger.addStuffing(STUFFING_BEEF_CHOP);
hamburger.addTopping(TOPPING_SAUCE);
hamburger.addTopping(TOPPING_KETCHUP);
console.log(hamburger);
console.log('Total calories: '+ hamburger.getSumCalories());
console.log('Total price '+ hamburger.getTotalPrice());
//add beef chop
hamburger.addStuffing(STUFFING_BEEF_CHOP);
console.log('Price with one more beef chop: ' + hamburger.getTotalPrice());
//add mayo potato
hamburger.addTopping(TOPPING_MAYO);
hamburger.addStuffing(STUFFING_POTATO);
console.log('Price with mayo and potato: ' + hamburger.getTotalPrice());
console.log('Calories with mayo and chicken chop: ' + hamburger.getSumCalories());
console.log(hamburger);

