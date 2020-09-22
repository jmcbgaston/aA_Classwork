// sum
// Write a sum function that takes any number of arguments:

// function sum(...args) {
//     let sum = 0;

//     for (let i = 0; i < args.length; i++) {
//         sum += args[i];
//     }

//     return sum;
// }

// console.log(sum(1, 2, 3, 4)) //=== 10;
// console.log(sum(1, 2, 3, 4, 5)) //=== 15;
// Solve it first using the arguments keyword, then rewrite your solution to use the ... rest operator.

// class Cat {
//     constructor(name) {
//       this.name = name;
//     }
  
//     says(sound, person) {
//       console.log(`${this.name} says ${sound} to ${person}!`);
//       return true;
//     }
    
    
// }
  
// class Dog {
//     constructor(name) {
//         this.name = name;
//     }
//   }

// Function.prototype.myBind = function(context) {
//     let a = Array.from(arguments);
//     let that = this;
//     return function (context) {
//         let b = Array.from(arguments);
//         let c = a.concat(b) // [a,b,c] 
//         return that.call(c[0], c[1], c[2]);
//     } 
// }
///////////////// WITH arguments on top, WITH ...args below

// Function.prototype.myBind = function (...args) {
//     let a = [];
//     for(let i = 0; i < args.length; i++){
//         a.push(args[i])
//     }
//     let that = this;
//     return function (...args) {
//         let b = [];
//         for (let j = 0; j < args.length; j++) {
//             b.push(args[j])
//         }
//         let c = a.concat(b) // [a,b,c] 
//         return that.call(c[0], c[1], c[2]);
//     }
// }

// const markov = new Cat("Markov");
// const pavlov = new Dog("Pavlov");

// markov.says("meow", "Ned");
// // Markov says meow to Ned!
// // true

// // bind time args are "meow" and "Kush", no call time args
// markov.says.myBind(pavlov, "meow", "Kush")();
// // Pavlov says meow to Kush!
// // true

// // no bind time args (other than context), call time args are "meow" and "a tree"
// markov.says.myBind(pavlov)("meow", "a tree");
// // Pavlov says meow to a tree!
// // true

// // bind time arg is "meow", call time arg is "Markov"
// markov.says.myBind(pavlov, "meow")("Markov");
// // Pavlov says meow to Markov!
// // true

// // no bind time args (other than context), call time args are "meow" and "me"
// const notMarkovSays = markov.says.myBind(pavlov);
// notMarkovSays("meow", "me");
// // Pavlov says meow to me!
// // true
                //  3

               // [3, 1,2,3]
               // Function.prototype.curriedSum = function(int) {
function curriedSum(int) {
    let numbers = []

    return function(...args) {
        let arr = Array.from(arguments);
        if (numbers.length === int) {
            let sum = 0;
            //summing function
            for (let i = 0; i < arr.length; i++) {
            sum += numbers[i];
            return sum;
            }
        } else {
            for (let i = 0; i < arr.length; i++) {
                numbers.push(arr[i]);
            }
            return numbers;
        }
    }
}



// for loop from 0 to int non inclusive
// save each int[i] to an array
//sum += arr[i]
// const sum = curriedSum(4)
// sum(5)(30)(20)(1); // => 56
const sum = curriedSum(4)(5,30,20,1);
console.log(sum); // => 56

// curriedSum(4)(5)(30)(20)(1);
// function sumThree(num1, num2, num3) {
//     return num1 + num2 + num3;
// }

// sumThree(4, 20, 6);
// let f1 = sumThree.curriedSum(3); // tells `f1` to wait until 3 arguments are given before running `sumThree`
// f1 = f1(4); // [Function]
// f1 = f1(20); // [Function]
// f1 = f1(6); // = 30

// // or more briefly:
// sumThree.curry(3)(4)(20)(6); // == 30