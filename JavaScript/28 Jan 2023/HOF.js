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

// <-----following is the same thing ------->

// function Mayur() {
//   console.log("Hello FSJS2");
// }
// setTimeout(Mayur, 3000);

// <---------------------------------------->

// setInterval(()=>{console.log("😜");},1000)

// ***CallBack***
// ForEach
// map
// filter
// reduce
// find
// every
// some
// sort

// <-----Map-------->
// const numbers = [1, 2, 3, 4, 5, 6];
// const numSqu = numbers.map((num) => num * num);
// console.log(numSqu);

// <-----------Filter-------------->
// const count = [
//   "India",
//   "Pakistan",
//   "Canada",
//   "Ireland",
//   "Japan",
//   "Kenya",
//   "Finland",
//   "Germany",
//   "shrilanka",
//   "Bharat",
// ];
// const store = count.filter((val) => val.includes("land"));
// console.log(store);

