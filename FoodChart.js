const data = require('./data.json');


// Fucntion for listing all the food items

function allFoodItems() {
    return data.map((Items) => Items.foodname)
};
console.log(allFoodItems());

// Functioin for listing all the food items with cateogry vegetables

function catgVegetable() {
    return data.filter((item) => item.category === "Vegetable")
};
console.log(catgVegetable());

// Functioin for listing all the food items with cateogry fruit

function catgFruit() {
    return data.filter((item) => item.category === "Fruit")
};
console.log(catgFruit());

// Functioin for listing all the food items with cateogry protien

function catgProtein() {
    return data.filter((item) => item.category === "Protein")
};
console.log(catgProtein());

// Functioin for listing all the food items with cateogry nuts

function catgNuts() {
    return data.filter((item) => item.category === "Nuts")
};
console.log(catgNuts());

// Functioin for listing all the food items with cateogry grains

function catgGrain() {
    return data.filter((item) => item.category === "Grain")
};
console.log(catgGrain());

// Functioin for listing all the food items with cateogry dairy

function catgDairy() {
    return data.filter((item) => item.category === "Dairy")
};
console.log(catgDairy());

// Functioin for listing all the food items with calorie above 100

function above100() {
    return data.filter((item) => item.calorie > 100)
};
console.log(above100());

// Functioin for listing all the food items with calorie below 100

function below100() {
    return data.filter((item) => item.calorie < 100)
};
console.log(below100());

// Functioin for listing all the food items with highest protein content to lowest

function HighProContent() {
    
    return data.sort((a, b) => b.protiens - a.protiens)
    
}
console.log(HighProContent());

// Functioin for listing all the food items with lowest carb content to highest

function LowCarbContent() {
    return data.sort((a, b) => a.protiens - b.protiens)
}
console.log(LowCarbContent());



