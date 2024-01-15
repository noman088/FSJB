function setState() {
  let score = 22;
  // return score;
  return [score]; // your passing the reference but value is actually a number
}
let myScore = setState();

myScore;
myScore = 12; // these values are still numbers
console.log(myScore);

// let anotherScore = setState();
let [anotherScore] = setState();
anotherScore;
console.log(anotherScore);

// Number, string, Boolean // Primitive data type(we copy them not get the actual reference , actual valuue doesn't get change)

// Array  and Object// Non - Primitive data types (call by reference value (get the actual reference) , actual value get change)

