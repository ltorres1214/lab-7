let menuItem = {
  name: "Classic Cheeseburger",
  price: 9.99,
  category: "Burgers",
  toppings: ["lettuce", "tomato", "onion", "pickles"],
  nutrition: {
    calories: 540,
    protein: 28
  }
};

console.log(menuItem);
console.log(JSON.stringify(menuItem));
console.log(menuItem.name);
console.log(menuItem["price"]);
console.log(menuItem.toppings[2]); // Find alternate syntax here! use copilot chat
console.log(menuItem.toppings[3]);

console.log(menuItem.nutrition.calories);

// Convert the JS object to a JSON string
let jsonString = JSON.stringify(menuItem);
console.log("JSON string:", jsonString);
console.log("Type:", typeof jsonString);

// Convert the JSON string back to a JS object
let parsedObj = JSON.parse(jsonString);
console.log("Parsed object:", parsedObj);
console.log("Type:", typeof parsedObj);
console.log("Name:", parsedObj.name);


let myDinerOrder = {
  name: "classic burrito",
  price: 9.99,
  category: "Burrito",
  inclusions: ["rice", "beans", "chicken", "cheese"],
  nutrition: {
    calories: 400,
    protein: 55
  }
};

console.log(myDinerOrder);
console.log(JSON.stringify(myDinerOrder));
console.log(myDinerOrder.name);
console.log(myDinerOrder["price"]);
console.log(myDinerOrder.inclusions[3]);
console.log(myDinerOrder.inclusions[2]);
