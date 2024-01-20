// Arrow functions

// normal function
// without parameter
function greet() {
  console.log("Hello");
}

greet();

// with parameter
function greetUser(name) {
  console.log(`Hello ${name}`);
}

greetUser("Arun");

// arrow function
const greet2 = () => console.log("Arrow Hello");
greet2();

// with parameter
const greetUser2 = (fname, lname) => console.log(`Hello ${fname} ${lname}`);

greetUser2("Storm", "Spirit");
