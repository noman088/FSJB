// HOF --> Higher Order Function
// Callback
// function is calling a function

//  Higher Order functions are functions which take other function as a parameter or return a function as a value. The function passed as a parameter is called callback.

// function a() {
//   console.log("I was called by a function ");
// }

// function b() {
//   a();
// }

// b();
// <--------------------------------------------->
//Mini Program

// const callback = (n) => {
//   return n ** 2;
// };

// function cube(callback,n) {
//   return callback(n) * n;
// }

// console.log(cube(callback,n));

// <------------------------------------------->

// For each
// const arr = ["hey", "hii", "hola", "Namaste"];

// // arr.forEach()
// arr.forEach(myfunc);
// function myfunc(val) {
//   console.log(val);
// }

// SetTimout

// setTimeout(() => {
//   console.log("Hello FSJS2");
// }, 3000);

// **************
// settimeout-- HOF
//   ()=> { }-- Callback
// **************

