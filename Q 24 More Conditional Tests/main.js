//More Conditional Tests: You don’t have to limit the number of tests you create to 10. 
// If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, 
// greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
//[solved]
//equility comparision [true]
//test 1[]
var car = "toyota";
console.log("Is car == \u2018toyota\u2019? I predict True.");
console.log(car == "toyota");
// //test 2 []
// //strict equility comparision [true]
console.log("Is car === \u2018toyota\u2019? I predict True.");
console.log(car === "toyota");
// //Test 3  //inequility comparision [false]
console.log("Is car != \u2018toyota\u2019? I predict false.");
console.log(car != "toyota"); //false
// //test 4  // strict inequility comparision [false]
console.log("Is car !== \u2018toyota\u2019? I predict false.");
console.log(car !== "toyota"); //false
// more conditional tests:you don't have limit the number of tests you create to 10
// Test 05 (lowercase convercation [true])
var cars = "Toyota";
var age = 25;
var numbers = [1, 2, 3, 4, 5];
// //tast 5:[lowercase conversion (true)]
console.log("Is car.tolowercase() == \u2018Toyota\u2019? I predict false.");
console.log(car.toLocaleLowerCase() == "Toyota"); //false (converted to lowercase)
//  //test 6:[lowercase conversion (false)]
console.log("Is car === car.tolowercase()? I predict True.");
console.log(car === car.toLowerCase()); //true (orignal value remains uppercase)
//  //**numerical test **
//  // test 7:equlity (true)
console.log("is age == 25? i predict true.");
console.log(age == 25); //true
//  //test 8: Inequality (false)
console.log("is age !=30? i predict false.");
console.log(age != 30); //true
//Test 09: Greater than (false)
console.log("is age > 30? i predict False");
console.log(age > 30); //false
//Test 10: less then or equel (True)
console.log("is age <= 25? I Predict True.");
console.log(age <= 25); //True
//legical Operators
//Test 11: And (True)
console.log("is age > 20 && age <30? I predict True.");
console.log(age > 20 && age < 30); // True (both conditions met)
//Test 12: or (False)
console.log("is age >30 || age <18? i predict false.");
console.log(age > 30 || age < 18);
//arrey (True)&&&& (false)
//Test 13:in arrey(True)
console.log("is 3 in numbers? i predict True.");
console.log(3 in numbers); // True (checks for index existence)
//Test 14: not in arrey (false)
console.log("in 5 not in numbers? i predict false.");
console.log(5 in numbers);
