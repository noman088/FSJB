// Var and Let
// global
// local (script)
// Hoisting
// Execution Content
// Call Stack
// Clouser

// var a = 10;
// console.log(a);
// function sum() {
//   var num1 = 10;
//   var num2 = 20;
//   console.log(num1 + num2);
// }

// sum();

// function sub() {
//   var num1 = 10;
//   var num2 = 20;
//   console.log(num1 - num2);
// }
// sub();

// function sum() {
//   var a = 10;
//   function sub(parameter) {
//     function mul() {
//       console.log(a);
//     }
//   }
//   sub(a);
// }
// sum();

// <-------Home Work-------->
// var sum = function () {
// }

// let sum = () => {
// }
// <-------------------------------->

// HOF
// other function as paramater
// Return  a function
// Callback
// --------- A function which can be passed as parameter to other functions

// *** SetTimout***
// setTimeout(() => {
//   console.log("Hello Duniya");
// }, 3000);
// setInterval(() => {
//   console.log("Refresh");
// }, 1000);

// ***Functional Programming:- So that we don't have to write regular loop and function
// const arr = [
//   "noman",
//   "rahul",
//   "animesh",
//   "vyom",
//   "aarif",
//   "mister",
//   "aman",
//   "muzzamil",
//   "yusuf",
// ];

// arr.forEach((val) => {
//   console.log(val);
// });

// here foreach is HOF and function inside foreach is callback function

// IMP
// Map, Filter , Reduce

// const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 16];
// const num = number.map((val) => val * 3.14);
// console.log(num);

// ----Filter----

// const contries = ["India", "Ireland", "england", "finland", "Kenya"];
// const count = contries.filter((desh) => desh.includes("land"));
// console.log(count);
