/*******************Exercise 1*************************************/
/******************************************************************/
/*
What would happen if the following code was executed?
function test() {
    if (null) {
        console.log('1')
    }
    if ('a') {
        console.log('2')
    }
    var array = [];
    if (array.length) {
        console.log('3')
    }
}

// My Answer:
// WOULD RETURN UNDEFINED
// to fix: you could move the array initialization outside the function and pass in as a parameter as I put below
// in which case it would return console.log('1')

var array = [];
function test(array) {
    if (null) {
        console.log('1')
    }
    if ('a') {
        console.log('2')
    }
    if (array.length) {
        console.log('3')
    }
}





*/
/*******************Exercise 2*************************************/
/******************************************************************/
/*
Demonstrate adding an element to the beginning and end of an array.

// My Answer:
// Make an array to put elements in
// Unshift adds to [0] (beginning)
// Push adds to [array.length-1] (end)

let array = []
array.unshift("A")
array.push("B")

// (Optional pointer they might like) "In more complex situations, I might want to log array to make sure we are getting our expected outcome"
console.log(array)


*/
/*******************Exercise 3*************************************/
/******************************************************************/
/*
Given the array below, return a new array with only unique values.

array = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];









*/
/*******************Exercise 4*************************************/
/******************************************************************/
/*
What's the result of executing this code and why?

function test() {
   console.log(foo());
   console.log(a);
   

   var a = 1;
   function foo() {
      return 2;
   }
}

test();






*/
/*******************Exercise 5*************************************/
/******************************************************************/
/*
Implement a function oddBallOut(), which takes an array randomNumbers() 
as an input and returns a new array with all odd integers.

let randomNumbers = [1,2,4,5,10,6,3];







*/
/*******************Exercise 6*************************************/
/******************************************************************/
/*
Create a function that iterates up to 100 while outputting "fizz" at
mulitples of 3, "buzz" at multiples of 5, and "fizzbuzz"
at multiples of 3 and 5.

function excercise() {
    for(i = 0; i <= 100; i++); {
        if ((i % 3) == 0 && i % 5 == 0); {
            console.log("fizzbuzz")
        } else if ((i % 5) == 0);{
            console.log("buzz")
        } else ((i % 3) == 0 ); {
            console.log("fizz")
        }
    }
}







*/
/*******************Exercise 7*************************************/
/******************************************************************/
/*
Write a simple function (less than 160 characters) that returns a
boolean indicating whether or not a string is a palindrome.



*/
/*******************Exercise 8*************************************/
/******************************************************************/
/*
Write a function that finds and returns a user named Johnnie Depp inside an unsorted list.
let randomList = [{name: "Billy Bob"}, {name: "Johnnie Depp"}, {name: "Bambi"}];








*/
/*******************Exercise 9*************************************/
/******************************************************************/
/*
Given the users array below, count the number of users per activity.

const users = [
  { name: "John", activities: ["golfing", "walking", "playing guitar"] },
  { name: "Terry", activities: ["swimming", "playing guitar"] },
  { name: "Anna", activities: ["walking", "swimming", "playing guitar"] },
  { name: "Paul", activities: ["swimming", "singing"] },
];







*/
/******************************************************************/
/******************************************************************/
