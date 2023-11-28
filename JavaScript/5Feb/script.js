// Var and Let
// global
// local (script)
// Hoisting
// Execution Content
// Call Stack
// Clouser

var a = 10;
console.log(a);
function sum() {
  var num1 = 10;
  var num2 = 20;
  console.log(num1 + num2);
}

sum();

function sub() {
  var num1 = 10;
  var num2 = 20;
  console.log(num1 - num2);
}
sub();
