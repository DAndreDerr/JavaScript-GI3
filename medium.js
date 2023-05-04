// Write a function that would allow you to do this: 

// var sharePizza = cutPizzaSlices(8);

// console.log(sharePizza(2));                                                                                                                                                                    
  // prints "Each person gets 4.00 slices of pizza"

// console.log(sharePizza(3)); 
  // prints "Each person gets 2.67 slices of pizza"

function pizzaFunction(x) {
    return `Each person gets ${8 / x} slices of pizza`;
}

console.log(pizzaFunction(2))
console.log(pizzaFunction(3))