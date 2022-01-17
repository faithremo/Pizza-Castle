// create object constructor for pizza orders
class orderPizza {
    constructor(size, crust, toppings, numberOfPizza, delivery) {
        this.size = size;
        this.crust = crust;
        this.toppings = toppings;
        this.numberOfPizza = numberOfPizza;
        this.delivery = delivery;
    }
};
// create prototypes that calculates prices
orderPizza.prototype.getSizePrice = function () {
    if (this.size === "small") {
        return 500;
    } else if (this.size === "medium") {
        return 800;
    } else if (this.size === "large") {
        return 1000;
    } else if (this.size === "x-large") {
        return 1200;
    }else { return "choose an option"
}};
orderPizza.prototype.getCrustPrice = function () {
    if (this.crust === "stuffed") {
        return 150;
    } else if (this.crust === "cripsy") {
        return 120;
    } else if (this.crust === "gluten-free") {
        return 250;
    } else{ return "Choose an option"
}};
orderPizza.prototype.getToppingsPrice = function () {
    if (this.toppings === "ChickenTikka") {
        return 150;
    } else if (this.toppings === "BBQSteak") {
        return 100;
    } else if (this.toppings === "ChickenandMushrooms") {
        return 200;
    } else if (this.toppings === "BeefBBQ") {
        return 80;
    } else if (this.toppings === "Hawaiian") {
        return 120;
    } else if (this.toppings === "ChickenPeri-Perin") {
        return 250;
    } else if (this.toppings === "VegTikka") {
        return 50;
    } else if (this.toppings === "Regina") {
        return 200;
    }else{return "Choose an option"
}};
orderPizza.prototype.priceOfDelivery = function () {
    if (this.delivery === "Hand") {
        return 0;
    } else if (this.delivery === "Remote") {
        return Math.floor(Math.random()*200);
    }
};
// get user values
// $(document).ready(function () {
//     $(".custom").submit(function (event) {
//         event.preventDefault();
//         var size = $("#inputSize option:selected").val();
//         var crust = $("#inputCrust option:selected").val();
//         var toppings = $("#inputToppings option:selected").val();
//         var numberOfPizza = parseInt($("#number").val());
//         var delivery = $("#inputDelivery option:selected").val();

//         var newOrderPizza = new orderPizza(size, crust, toppings, numberOfPizza, delivery);
//         var totalPrice = (newOrderPizza.getSizePrice()+newOrderPizza.getCrustPrice()+newOrderPizza.getToppingsPrice())*numberOfPizza;

//         window.alert("Hi! You have ordered "+numberOfPizza+ " " +size+ " pizzas, with a " + crust +" crust and "+toppings + " toppings!");
//         window.alert("The total cost is  " + totalPrice + " /= " + " For Delivery services kindly fill the form below");
    
//     $("#submit").click(function (event) {
//         event.preventDefault();
//         var keyedName = $("#inputName").val();
//         var keyedAddress = $("#inputAddress").val();
//         window.alert("Hey" + " " + keyedName + " " + " Your order will be ready in 25 mins and will be delivered to" + " " + keyedAddress + " " + "in the next 45 mins.")
//         window.alert("Your total order will be " + (totalPrice + newOrderPizza.priceOfDelivery()));
//     });});
// });

function orderup() {
    alert("Faith")
}

const order_Btn = document.querySelector("#submit")

order_Btn.addEventListener("click", orderup);
