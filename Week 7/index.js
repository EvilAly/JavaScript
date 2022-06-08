/**
 * Problem 1: Match cars to their owners.
 *
 * Each person in the "people" array owns the car at the same spot in the "cars" array.
 * Use map() to print statements to the console matching these cars to their owners.
 * When complete, there should be 6 separate statements, each telling which person drives their respective car.
 * E.g.
 *  "Suzanne drives a Ford"
 *  "Mark drives a Tesla"
 *  … etc.
 */
const cars = ["Fiat", "Honda", "Ford", "Tesla", "Chevy", "Dodge"];
const people = ["Janet", "Omar", "Suzanne", "Mark", "Juan", "Stephen"];

// YOUR CODE HERE

function drivers(item) {
    let car = cars.shift();
    console.log(item + " drives a " + car); 
};



let driverVehicle = people.map(drivers);

/**
 * Problem 2 (part A): Shopping lists
 *
 * Both Mike and Susan have created their own grocery list for an upcoming trip to the store,
 *  but they need to combine it into one list before they go.
 *
 * Merge the two shopping lists in a _new_ combined shopping list.
 *  HINT: it should only require one line of code.
 */
const mikesList = [
  "bananas",
  "bread",
  "carrots",
  "sour cream",
  "limes",
  "candy",
  "potatoes",
];

const susansList = [
  "cheese",
  "eggs",
  "cellery",
  "onions",
  "twinkies",
  "beans",
  "flour",
];

// YOUR CODE HERE
let comboList = mikesList.concat(susansList);

/**
 * Problem 2 (part B): Healthy groceries only!
 *
 * After looking at their shopping list, Mike and Susan decided they shouldn't be buying any junk food.
 *
 * Filter (hint, hint) out the twinkies and candy from the combined shopping list array you just created,
 *  logging to the console the final result of their shopping list.
 */

// YOUR CODE HERE
let unhealthy = ["candy", "twinkies"];
let healthyList = comboList.filter(item => !unhealthy.includes(item));

console.log(healthyList);