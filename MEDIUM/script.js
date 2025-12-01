// Request breakdown:
// Create a fuction that calculate hoe many slice of pizza each person would get if they shared evenly.
// Return "Each person gets 4 slice of pizza; from our 8 slice pizza"

// Solution:
// - Create an outer function.
// - Create an empty variables.
// - Create an inner function with two parameters (x,y).
// - Trasform result in 2 decimal place in case there is not way to split evenly.
// - Return the inner function, which takes (x),(y) and return the calculation.

function sliceCalculator() {
  let totSlice = "";
  let personNum = "";

  return function calcSlice(x, y) {
    totSlice = x;
    personNum = y;

    let sliceOperation = x / y;

    // 2 decimal place for the result
    sliceOperation = parseFloat(sliceOperation.toFixed(2));

    return `Each person gets ${sliceOperation} slice of pizza; from our ${totSlice} slice of pizza`;
  };
}

const sharePizza = sliceCalculator();

console.log(sharePizza(8, 2));
console.log(sharePizza(8, 3));
console.log(sharePizza(21, 20));
console.log(sharePizza(10, 3));
