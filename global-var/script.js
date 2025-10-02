var x = 1;    // Global scope
let y = 2;    // Global scope
const z = 3;  // Global scope

myFunction();

function myFunction() {
    globalAuto = "automatically global b ruh";
}

// value of globalAuto will be printed
console.log(globalAuto);