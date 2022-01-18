//constructor for pizza orders
class yourPizza {
    constructor( toppings, numberOfPizza,size, delivery,crust) {
        this.size = size;
        this.crust = crust;
        this.toppings = toppings;
        this.numberOfPizza = numberOfPizza;
        this.delivery = delivery;
    }
};
//prototypes to get the prices of the pizza
yourPizza.prototype.getSizePrice = function () {
    if (this.size === "small") {
        return 400;
    } else if (this.size === "medium") {
        return 750;
    } else if (this.size === "large") {
        return 900;
    } else if (this.size === "x-large") {
        return 1100;
    }else { return "please fill in the missing field"
}};
yourPizza.prototype.getCrustPrice = function () {
    if (this.crust === "stuffed") {
        return 100;
    } else if (this.crust === "cripsy") {
        return 150;
    } else if (this.crust === "gluten-free") {
        return 200;
    } else{ return "please fill in the missing field"
}};
yourPizza.prototype.getToppingsPrice = function () {
    if (this.toppings === "ChickenTikka") {
        return 200;
    } else if (this.toppings === "BBQSteak") {
        return 150;
    } else if (this.toppings === "ChickenandMushrooms") {
        return 250;
    } else if (this.toppings === "BeefBBQ") {
        return 100;
    } else if (this.toppings === "Hawaiian") {
        return 100;
    } else if (this.toppings === "ChickenPeri-Perin") {
        return 220;
    } else if (this.toppings === "VegTikka") {
        return 70;
    } else if (this.toppings === "Regina") {
        return 180;
    }else{return "please fill in the missing field"
}};
yourPizza.prototype.priceOfDelivery = function () {
    if (this.delivery === "Hand") {
        return 0;
    } else if (this.delivery === "Remote") {
        return Math.floor(Math.random()*200);
    }
};
// user feedback
$(document).ready(function () {
    $(".custom").submit(function (event) {
        event.preventDefault();
        var size = $("#inputSize option:selected").val();
        var crust = $("#inputCrust option:selected").val();
        var toppings = $("#inputToppings option:selected").val();
        var numberOfPizza = parseInt($("#number").val());
        var delivery = $("#inputDelivery option:selected").val();

        var newyourPizza = new yourPizza(size, crust, toppings, numberOfPizza, delivery);
        var totalPrice = (newyourPizza.getSizePrice()+newyourPizza.getCrustPrice()+newyourPizza.getToppingsPrice())*numberOfPizza;

        window.alert("Hi! You have ordered "+numberOfPizza+ " " +size+ " pizzas, with a " + crust +" crust and "+toppings + " toppings!");
        window.alert("The total cost is  " + totalPrice + " /= " + " For Delivery services kindly fill the form below");
    
    $("#submit").click(function (event) {
        event.preventDefault();
        var keyedName = $("#inputName").val();
        var keyedAddress = $("#inputAddress").val();
        window.alert("Hey" + " " + keyedName + " " + " Your order will be ready in 25 mins and will be delivered to" + " " + keyedAddress + " " + "in the next 45 mins.");
        window.alert("Your total order will be " + (totalPrice + newyourPizza.priceOfDelivery()));
    });});
});