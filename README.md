# js-practical-exercises

JavaScript Fundamentals Practical Exercises
Create a repository and name  it  “js-practical-exercises” and  create a file  for each question and name  it according to the question title, for example if the title is Counting Zeros  name it  “countingZeros.js”.

1.Counting Zeros
Count Total number of zeros from 1 up to n?
Explanation: So the trick here is. if you have a number 1 to 50 the value is 5. just 50 divided by 10. However, if the value is 100. The value is 11. you will get by 100/10 = 10 and 10/10. That's how you will get in the more zeros in one number like (100, 200, 1000)
2.Greatest Common Divisor
How would you find the greatest common divisor of two numbers?
3.Remove Duplicate
How would you remove duplicate members from an array without Set?
4.Reverse in  place
If you have a string like "I am the good boy". How can you generate "I ma eht doog yob"? Please note that the words are in place but reversed.
5.Add numbers
You are given a mathematical expression as a string, which may contain numbers, operators, and parentheses. Your task is to evaluate the expression and return the result.


Rules:
The expression will follow operator precedence, where multiplication and division have higher precedence than addition and subtraction.
Parentheses can be used to override the default precedence.
The expression may contain spaces, which should be ignored.


calculateExpression("5 + 4 * 3 / 2 - 1"); // should return 10
calculateExpression("( 2 + 3 ) * ( 4 - 1 )"); // should return 15

Note: You can assume that the input expression will always be valid and well-formed. Eval is not allowed for this question.

6.Array statistics
You are given an array of numbers. Your task is to implement a function called arrayStats that returns an object containing various statistics about the array.

The returned object should have the following properties:
sum: The sum of all numbers in the array.
average: The average of all numbers in the array (rounded to two decimal places).
min: The minimum value in the array.
max: The maximum value in the array.

Example:
arrayStats([1, 2, 3, 4, 5]); // should return { sum: 15, average: 3.00, min: 1, max: 5 }



7.Odd Squares

You are given an array of numbers. Your task is to implement a function called oddSquares that filters out the even numbers from the array and then maps the remaining numbers to their squares.

Example:
oddSquares([1, 2, 3, 4, 5, 6]); // should return [1, 9, 25]
oddSquares([10, 15, 20, 25, 30]); // should return [225, 625]



8.Phone Number Validator
Description: Create a function called validatePhoneNumber that takes a string as input and returns true if the string represents a valid phone number and false otherwise.

A valid phone number must satisfy the following conditions:
It must be exactly 10 digits long (no more, no less).
It can optionally include hyphens - or spaces at specific positions: after the 3rd digit and after the 6th digit.

Example:
validatePhoneNumber("1234567890"); // should return true
validatePhoneNumber("123-456-7890"); // should return true
validatePhoneNumber("123 456 7890"); // should return true
validatePhoneNumber("123-45-67890"); // should return false
validatePhoneNumber("1234-567890"); // should return false

9.Sort products
You are given an array of product objects, each containing a name (string) and a price (number). Your task is to implement a function called sortProducts that sorts the products based on their prices in ascending order. 



10.String Compression
You are given a string containing only uppercase letters. Your task is to implement a function called compressString that compresses the string by counting the consecutive occurrences of each letter and returning a new compressed string.

The compressed string should consist of each letter followed by its count. If a letter appears only once consecutively, you should not include the count.

Example: 
compressString("AAAABBBCCDAA"); // should return "A4B3C2D1A2"
compressString("XYZ"); // should return "X1Y1Z1"



11.string addition

It is easy to join two strings together like this string1 + string2.
Another way to get the desired result would be with string1.concat(string2)
ES6 has introduced another way of joining strings. Your task is to find out what this is and write a function that will add two strings together, there must be a space between the two strings.
+ , .concat() & .join() will not be allowed in this exercise.
If one of the arguments is a number your code must coerce it into being a string.



12.Nullable conversion

you are given an object with properties that may contain null or undefined values. Your task is to implement a function called convertNullableValues that checks if any of the properties in the object contains null or undefined. If a property is null convert it to zero and if a property is undefined convert it to an empty string. Return the modified object.


13.JavaScript Array Methods Implementation

In this question, we would like you to demonstrate your understanding of array methods in JavaScript by implementing the following four methods from scratch: myMap, myFilter, myReduce, and myForEach.

Instructions:

You are not allowed to use the built-in map, filter, reduce, or forEach methods in your implementation.
Your implementations should work with arrays of any type.

Each method should take a callback function as its argument and execute that callback function for each element in the array (except for myReduce, which can take an optional second argument as the initial accumulator value).

The methods should return a new array (except for myForEach, which should return undefined).
Array Methods to Implement:

myMap(callbackFn): Creates a new array with the results of calling the provided function on every element in the calling array.
myFilter(callbackFn): Creates a new array with all elements that pass the test implemented by the provided function.

myReduce(callbackFn, initialValue?): Applies the callback function against an accumulator and each element in the array to reduce it to a single value. Optionally, an initialValue can be provided as the initial value of the accumulator.

myForEach(callbackFn): Executes a provided function once for each array element.


Hints:

For myMap, you'll need to create a new array, loop through each element, apply the callback function to each element, and push the result into the new array.

For myFilter, you'll need to create a new array, loop through each element, apply the callback function to test if the element passes the condition, and push the element into the new array if it passes the test.

For myReduce, you'll need to loop through each element, apply the callback function with the accumulator, and update the accumulator accordingly.

For myForEach, you'll need to loop through each element and execute the callback function for each element.





14.Counter
Your task is to implement a JavaScript function called createCounter that creates a closure to keep track of a counter variable. The createCounter function should return another function, which we'll call counterFn.

Each time you invoke the counterFn function, it should increase the counter variable by 1 and return the updated counter value.

15.Prototype
Implement a simple inheritance chain using prototypes and demonstrate how properties/methods are inherited.
Create a constructor function and add methods to its prototype. Then, create instances of the constructor and observe how they share the methods.
Use the new keyword to create instances of a constructor function and initialize their properties.
Build a custom object using Object.create and set its prototype to a predefined object. Demonstrate how inheritance works in this scenario.

16.Call, Bind, Apply
Write a function to calculate the area of a rectangle with a fixed width. Use the bind method to create a new function with a width of 10 and calculate the area when the height is 5.

Given an array of numbers [34, 12, 57, 28, 91], use the apply method to find the maximum number in the array.

Create a function to capitalize the first letter of a string. Use the call method to capitalize the first letter of the name "john."

Write a function that calculates the discounted price of a product with a fixed discount percentage. Use the bind method to create a new function with a discount of 10%. Calculate the discounted price for a product with an initial price of $50 and $100.

Given an array-like object arrayLikeObject, write a function that converts it into a regular array. Use the apply method to apply the function to the arrayLikeObject and obtain the converted array.
17. Object key transformation

Your task is to implement a JavaScript function called transformKeys that takes an object as input and returns a new object with the keys transformed according to the provided transformation function.

The transformKeys function should iterate through the keys of the input object and apply the transformation function to each key. The transformation function should take the original key as input and return the new key.

Example:
```
const inputObject = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
};

const transformFunction = (key) => key.toUpperCase();
const transformedObject = transformKeys(inputObject, transformFunction);
console.log(transformedObject);
// should return { FIRSTNAME: "John", LASTNAME: "Doe", AGE: 30 }
```

18.Code snippets prediction exercises 
https://cedar-market-5e2.notion.site/JavaScript-exercises-21def12579ae4ff385aedca804738f4e   






