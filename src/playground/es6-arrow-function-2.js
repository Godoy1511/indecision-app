// arguments object - no longer bound with arrow functions

const add = (a, b) => {
    //  console.log(arguments);
    return a + b;    
};
console.log(add(55, 1));


// this keyword - no longer bound with arrow functions
// printPlacesLived: function () { É A MESMA COISA QUE printPlacesLived() {
// "map" permite que você modifique os itens de uma variável

const user = {
    name: "Pedro",
    cities: ["Philadelphia", "New York", "Dublin"],
    printPlacesLived() {
        return this.cities.map((city) => this.name + " has lived in " + city);
        }
    };

console.log(user.printPlacesLived());

// Challenge
// numbers - array of numbers
// multiplyBY - single number
// Multiply - return a new array where the number have been multiplied

const multiplier = {
    numbers: [2, 7, 15, 30, 77, 2, 12],
    multiplyBy: 3,
    multiply() {
        return this.numbers.map((number) => this.multiplyBy * number)
    }
};

console.log(multiplier.multiply());

// Challenge result
// Basicamente, todos os valores do "numbers" foram multiplicados por 3 (multiplyBy)
// O "map" faz cada um dos valores serem multiplicados individualmente pelo multiplyBy