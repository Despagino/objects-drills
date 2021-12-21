let person = {
    firstName: "Gino",
    lastName: "Tasis",
    age: 22,
}


let meal = {
    appetizer: "rolls",
    entree: "New York Strip",
    dessert: "Ice cream",
    drink: "Mr. Pib"
}


let {drink: nextBest, appetizer, dessert} = meal

console.log(nextBest)
console.log(appetizer)
console.log(dessert)