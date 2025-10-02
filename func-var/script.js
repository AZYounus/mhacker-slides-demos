function myFunction() {
    let dragon = "The big magnificent dragon";
    console.log(dragon);
}

myFunction();

try {
    console.log(dragon);
} catch (error) {
    console.log(error);
    // Reference Error: dragon is not defined
}