// Function that returns a promise
function fetchData() {
  return new Promise((resolve, reject) => {
    // Simulate an asynchronous operation (e.g., fetching data from a server)
    setTimeout(() => {
      const success = true; // Change this to simulate success or failure

      if (success) {
        resolve("Data fetched successfully!");
      } else {
        reject("Failed to fetch data!");
      }
    }, 2000); // Simulating a 2-second delay
  });
}
// Using the promise
fetchData()
  .then((result) => {
    console.log(result); // This will be executed if the promise is resolved
  })
  .catch((error) => {
    console.error(error); // This will be executed if the promise is rejected
  })
  .finally(() => {
    console.log("Promise settled."); // This will be executed regardless of success or failure
  });

// Chained Promises:

const initialPromise = new Promise((resolve) => {
  resolve(42);
});

initialPromise
  .then((result) => {
    return result * 2;
  })
  .then((result) => {
    console.log(result); // Output: 84
  });

// overloading
/**
 * Display Name
 * @param {string} name Name
 */
function displayName(name) {
  return `Hi ${name}`;
}
/**
 * Display Name
 * @param {string} fName First Name
 * @param {string} lName Last Name
 * The above function will be overwritten by this function.
 */
function displayName(fName, lName) {
  return `Hi ${fName} ${lName}`;
}
displayName("Ana"); // 'Hi Ana undefined'

// Function with parameters
function greet(name, greeting) {
  console.log(greeting + ", " + name + "!");
}
// Calling the function with arguments
greet("John", "Hello"); // Output: Hello, John!

// mutable and immutable
let x = 10;
let y = x;
y = y + 1;
console.log(y);
console.log(x);

let a = [1, 2, 3];
let b = a.concat();

b.pop();
console.log(b);
console.log(a);

let s = {
  name: "gowshick",
  age: "1",
};

// let r = Object.assign({},s);
let r = { ...s };
r.name = "ram";

console.log(r);
console.log(s);

// Dynamic Oject Properties

// Set Variables as Property Names

const key1 = "language";
const key2 = "isStudent";

const obj = {
  name: "dillion",
  age: 1000,
  [key1]: "javascript",
  [key2]: true,
};

console.log(obj);
// {
//   name: "dillion",
//   age: 1000,
//   language: "javascript",
//   isStudent: true
// }

// Conditional Expressions as Property Names
const age = 10;

const key3 = "ageIsMoreThan5";
const key4 = "ageIsMoreThan10";

const obj1 = {
  name: "dillion",
  [age > 10 ? key4 : key3]: true,
};

console.log(obj1);
// {
//   name: "dillion",
//   ageIsMoreThan5: true
// }

// shallow js

let profile = ["Bruce", { language: ["English", "Spanish", "French"] }];

let profile_copy = Array.from(profile);

profile_copy[1].language = ["Igbo", "Yoruba"];
console.log(JSON.stringify(profile)); // ["Bruce",{"language":["Igbo","Yoruba"]}]

profile_copy[0] = "Pascal";
console.log(profile[0]); // Bruce

console.log(JSON.stringify(profile_copy)); // ["Pascal",{"language":["Igbo","Yoruba"]}]

console.log(JSON.stringify(profile)); // ["Bruce",{"language":["Igbo","Yoruba"]}]

// deep copy

let profile1 = ["Bruce", { language: ["English", "Spanish", "French"] }];
let profile_deep_copy = JSON.parse(JSON.stringify(profile1));

// Change the value of the 'language' property
profile_deep_copy[1].language = ["Ibo", "Yoruba"];

// The 'language' property does not change in profile.
console.log(profile[1].language); //[ "English", "Spanish", "French" ]

// obj assign
const target = {};
const source = { name: "Pascal", age: 23 };

const newObject = Object.assign(target, source);

console.log(target); // {name: "Pascal", age: 23}

console.log(newObject); // {name: "Pascal", age: 23}

//merging with the spread operator in JavaScript:

let employee = {
  position: "Frontend Developer",
  country: "USA",
};

let location1 = {
  city: "Asaba",
  country: "Nigeria",
};

let profile2 = {
  ...employee,
  ...location1,
};

console.log(profile2);

// {
//    position: 'Frontend Developer',
//    city: 'Asaba',
//    country: 'Nigeria'
// }

// garbage collection
// Creating an object
let obj01 = { name: "Object 1" };

let obj2 = obj1;

let obj3 = { name: "Object 3" };

obj01 = null;

console.log(obj2); // The second object is still accessible
console.log(obj3); // The third object is accessible

// function expressions
const generateIntro = function (name) {
  return `Hi, my name is ${name}`;
};

const dillion = generateIntro("Dillion");
console.log(dillion); // Hi, my name is Dillion

//  recursive function
function doSomething(n) {
  if (n === 0) {
    console.log("TASK COMPLETED!");
    return;
  }
  console.log("I'm doing something.");
  doSomething(n - 1);
}
doSomething(3);

function findFactorial(num) {
  if (num === 0) return 1;
  let factorial = num * findFactorial(num - 1);
  return factorial;
}

findFactorial(5); // 120

// closures
function c() {
  let m = 1;
  function y() {
    console.log(m);
  }
  return y;
}
let func = c();
console.log(func);
func();

// this keyord
const person = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  getThis: function () {
    return this;
  },
};

console.log("this in object method", person.getThis());

const person2 = {
  firstName: "John",
  lastName: "Doe",
  id: 5566,
  getFullName: function () {
    return this.firstName + " " + this.lastName;
  },
};

console.log("this in object method", person2.getFullName());

// // memory leaks

// //  Accidental global variables
// ("use strict");
// function createGlobalVariables() {
//   leaking1 = "I leak into the global scope"; // assigning value to the undeclared variable
//   this.leaking2 = "I also leak into the global scope"; // 'this' points to the global object
// }
// createGlobalVariables();
// window.leaking1; // 'I leak into the global scope'
// window.leaking2; // 'I also leak into the global scope'

// // closure

// function createClosure() {
//   let data = "Some data";

//   // This inner function forms a closure by capturing the 'data' variable
//   function innerFunction() {
//     console.log(data);
//   }

//   // Return the inner function, creating a closure
//   return innerFunction;
// }

// // Create a closure by calling the outer function
// const closure = createClosure();

// // Now, 'closure' holds a reference to the inner function, which in turn holds a reference to 'data'
// // If 'closure' is kept alive longer than necessary, it can lead to a memory leak

// // To prevent the memory leak, ensure that the closure is not retained unnecessarily
// // For example, by setting 'closure' to null when it is no longer needed

// // Closing the reference when it's no longer needed
// closure(); // This will log 'Some data' because it still has access to the 'data' variable

// // Now, set 'closure' to null to release the reference and allow 'data' to be garbage-collected
// closure = null;

// // The 'data' var

// // Timer
// function startLeakyTimer() {
//   let data = []; // Imagine this is a large data structure

//   // This timer function appends data to the 'data' array every second
//   setInterval(function () {
//     data.push("Some data");
//     console.log("Data length:", data.length);
//   }, 1000);

//   return data; // Returning the data array, keeping a reference to it
// }

// // Start the leaky timer
// const leakedData = startLeakyTimer();

// // After a while, if 'leakedData' is not properly handled, it will retain a reference to the data array
// // Even if the timer is stopped, the 'data' array will not be garbage-collected, leading to a memory leak

// // To prevent the memory leak, make sure to clear or stop the timer and release references when no longer needed
// // For example, by using clearInterval and setting the reference to null

// // Clear the interval and release the reference to 'leakedData'
// clearInterval(leakedData);
// leakedData = null;

// // event listeners
// function addEventListener() {
//   const button = document.createElement("button");
//   button.textContent = "Click me";
//   document.body.appendChild(button);

//   function handleClick() {
//     console.log("Button clicked");
//   }

//   // Adding an event listener to the dynamically created button
//   button.addEventListener("click", handleClick);

//   // Assume the button is dynamically removed from the DOM at some point
//   // If the event listener is not removed, it can lead to a memory leak

//   // Uncomment the next line to simulate removing the button from the DOM
//   // document.body.removeChild(button);
// }

// // Calling the function to set up the event listener
// addEventListener();

// block scope mimicking

function getAddr(city) {
  if (city == "Bengaluru") {
    //All the variables below, gets Garbage Collected when function execution is done.
    (function () {
      var state = "Karnataka";
      var num = 3000000;
      var language = "Kannada";
      document.write(
        city +
          " is capital of " +
          state +
          " with population of " +
          num +
          " people speaking " +
          language
      );
    })();
  } else {
    document.write("Database does not have information");
  }
}
//Output:Bengaluru is capital of Karnataka with population of 3000000 people speaking Kannada.
getAddr("Bengaluru");
