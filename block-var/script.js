{
    let hermes = "heheheohoho";
    const PI = 3.14;
    var today = "thursday";
}

console.log(today);
try {
    console.log(hermes);
} catch (error) {
    console.log(error);
    // ReferenceError: hermes is not defined
}