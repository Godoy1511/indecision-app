
// const square = function(x) {
//     return x * x;
// };

// console.log(square(3));


// const squareArrow = (x) => {
//     return x * x;
// };

// const squareArrow = (x) => x * x;


// console.log(squareArrow(4));


// Challenge - Use arrow functions
// getFirstName ("Mike Smith") -> "Mike" -> O mesmo feito na outra file do playground de let e const
// Create regular arrow function
// Create arrow function using the shorthand syntax

const getFirstName = (fullName) => {
    return fullName.split(" ")[0]
};

console.log(getFirstName("Pedro Godoy"));


const getFirstName2 = (fullName) => fullName.split(" ")[0];

console.log(getFirstName2("Lucas Godoy"));