const number = 42;

try {
  number = 99;  // bad, value cannot be changed
} catch (err) {
  console.log(err);
  // Expected output: TypeError: invalid assignment to const 'number'
}

console.log(number);
// Expected output: 42
