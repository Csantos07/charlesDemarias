// Higher-order function is a function that takes a function as an argument
function higherOrderFunction(callback) {
  // Perform some operations
  console.log("Before callback");

  // Call the callback function
  callback();

  // Perform some more operations
  console.log("After callback");
}

// Callback function passed to the higher-order function
function callbackFunction() {
  console.log("Inside callback");
}

// Call the higher-order function with the callback function
// higherOrderFunction(callbackFunction);

// find, filter, map, reduce

const areas = [768, 1004.2, 433.1];
let result = areas.reduce((total, area, currentIndex, array) => {
  console.log("Total: ", total);
  console.log("Area: ", area);
  console.log("Current Index: ", currentIndex);
  console.log("Array: ", array);
  return total + area;
}, 999);
// console.log(result); //> 2205.3

const areasTwo = [768, 1004.2, 433.1];
let resultTwo = areas.reduce((total, area, currentIndex, array) => {
  console.log("Total: ", total);
  console.log("Area: ", area);
  console.log("Current Index: ", currentIndex);
  console.log("Array: ", array);
  if (currentIndex >= 2) {
    return total + area;
  }
  return 0;
});
