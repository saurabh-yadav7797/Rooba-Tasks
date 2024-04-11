

let fruits = ['Apple', 'Banana', 'Cherry', 'Date'];


console.log("Original Array:", fruits);


fruits.push('Fig');
console.log("After push('Fig'):", fruits);


let poppedElement = fruits.pop();
console.log("After pop(), Popped Element:", poppedElement);
console.log("After pop(), Array:", fruits);


fruits.unshift('Apricot');
console.log("After unshift('Apricot'):", fruits);


let shiftedElement = fruits.shift();
console.log("After shift(), Shifted Element:", shiftedElement);
console.log("After shift(), Array:", fruits);


fruits.splice(2, 1, 'Grape', 'Kiwi');
console.log("After splice(2, 1, 'Grape', 'Kiwi'):", fruits);


let slicedFruits = fruits.slice(1, 4);
console.log("Sliced Array (fruits.slice(1, 4)):", slicedFruits);


let cherryIndex = fruits.indexOf('Cherry');
console.log("Index of 'Cherry':", cherryIndex);


let includesBanana = fruits.includes('Banana');
console.log("Includes 'Banana'?", includesBanana);


let moreFruits = ['Lemon', 'Mango'];
let allFruits = fruits.concat(moreFruits);
console.log("Concatenated Array:", allFruits);


console.log("Using forEach to print each fruit:");
fruits.forEach(function(fruit, index) {
  console.log(index + 1, fruit);
});


let upperCaseFruits = fruits.map(function(fruit) {
  return fruit.toUpperCase();
});
console.log("Array after map to uppercase:", upperCaseFruits);


let filteredFruits = fruits.filter(function(fruit) {
  return fruit.length > 5;
});
console.log("Array after filter (length > 5):", filteredFruits);


let totalLength = fruits.reduce(function(total, fruit) {
  return total + fruit.length;
}, 0);
console.log("Total length of all fruits:", totalLength);


let allLongerThanThree = fruits.every(function(fruit) {
  return fruit.length > 3;
});
console.log("Are all fruits longer than 3 characters?", allLongerThanThree);


let someLongerThanFive = fruits.some(function(fruit) {
  return fruit.length > 5;
});
console.log("Are some fruits longer than 5 characters?", someLongerThanFive);


console.log("Final Array:", fruits);
