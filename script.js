let obj = {
    "name": "John",
    "age": 25,
    "nextAge": 25 + 1,
    "children": ["Child 1", "Child 2"],
    "address": {
        "street": "Vilnius st.",
        "city": "Vilnius",
        "country": "Lithuania"
    },
    "married": true
}

// Simple object turned into a JSON object
let json = JSON.stringify(obj);
console.log(json);

// JSON object turned into simple object
let convertedObj = JSON.parse(json);
console.log(convertedObj);

console.log(obj);