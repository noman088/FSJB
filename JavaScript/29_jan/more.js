// HOF and Callback
// Rst and spread
// try and Catch
//  Promises and  at the end  a small MCQ's Games

// Spread and rest ...
// function sumone(x, y) {
//   return x + y;
// }
// let vari = [5, 7];

// console.log(sumone(...vari)); // Spread

// <-----Rest------>

// function sum(...args) {
//   // Rest Operator
//   //   console.log(args); //tell what  is it  in the args
//   let sum = 0;
//   for (const x of args) {
//     sum = sum + x;
//   }
//   return sum;
// }

// console.log(sum(1, 2, 3, 4, 5, 6, 7, 7, 8, 9, 0));

// <-----------Try and Catch ------------->

// syntax

// try {
//   console.log(Noman);
// } catch (err) {
//   console.log(err.name);
// }

// try {
//   let firstName = "noman";
//   console.log(firstName + "" + lastName);
// } catch (err) {
//   console.log("variable name missing");
// }

// try {
//   let firstName = "noman";
//   console.log(firstName + "" + lastName);
// } catch (err) {
//   console.log("variable name missing");
// } finally {
//   console.log("I will run ");
// }

// throw=> Explore this topic

// Different type of error we have in Javascript
/*

-Reference Error
-Syntax error
-TypeError8

*/

// <-------Promise------>
//  -pending
//  - fullfilled
//  -rejected

// we need to understand even loop before promise

// *** Event Loop***

// const userOne = () => {
//   console.log("Hello UserOne");
// };
// const userTwo = () => {
//   setTimeout(() => {
//     console.log("Hello I'm Inside");

//   }, 3000);
//   console.log("Hello UserTwo");
// };
// const userThree = () => {
//   console.log("Hello UserThree");
// };

// userOne();
// userTwo();
// userThree();

//     ....... Promise........
// const one = () => {
//   return "Index page";
// };
// const two = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Credential Correct   ");
//     }, 3000);
//   });
// };
// const three = () => {
//   return "redirect to home page";
// };

// const callMe = async () => {
//   let valOne = one();
//   console.log(valOne);
//   let ValTwo = await two();
//   console.log(ValTwo);
//   let ValThree = three();
//   console.log(ValThree);
// };

// callMe();
