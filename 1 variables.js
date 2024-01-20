// 1 var,const,let
// var is function scoped
// let and const are block scoped

// var
function printVarLoop() {
  for (var i = 1; i <= 3; i++) {
    console.log(i);
  }

  //i is accessible outside the block and inside the function
  console.log("Outside", i);
}
printVarLoop();

// let /const - unique/cannot be changed
function printLetLoop() {
  for (let i = 0; i <= 3; i++) {
    console.log(i);
  }

  //   i is not accessible outside the block scope and throws error
  console.log("Outside", i);
}

printLetLoop();

// let and const

let x = 10;
x = 20; //can reassign

const a = 10; //cannot reassign
