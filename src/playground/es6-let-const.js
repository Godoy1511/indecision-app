var nameVar = "Andrew";
var nameVar = "Mike";
console.log("nameVar", nameVar);

let nameLet = "Jen";
nameLet = "Julie";
console.log("nameLet", nameLet);

const nameConst = "Frank";
console.log("nameConst", nameConst);

// Block Scoping
// Começar com o "const" praticamente sempre, e se eu precisar mudar o valor da variável, usar "let"

const fullName = "Pedro Godoy";
let firstName;

if (fullName) {
    firstName = fullName.split(" ")[0];
    console.log(firstName);
};

console.log(firstName);