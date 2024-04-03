// Make a array of your favorite fruits, and then
// write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, 
// the if block should print a statement, such as You really like bananas!
//solved
var favorite_fruits = ["apple", "banana", "orange",];
if (favorite_fruits.includes("mango")) {
    console.log("i would like to eat mango");
}
else if (favorite_fruits.includes("apple")) {
    console.log("i would like to eat apple");
}
else {
    console.log("fruits are not availabe!");
}
// here we change fruitsavailbe.
var fruitavailabe = "orages";
if (favorite_fruits.includes(fruitavailabe)) {
    console.log("i would like to eat ".concat(fruitavailabe));
}
else {
    console.log("fruits are not availabe!");
}
// let favorite_fruits:string[]=[`apple`,`bananas`,`mango`];
// if(favorite_fruits.includes(`bananas`)) {
//     console.log(`you really like bananas!`);
// }
// if(favorite_fruits.includes(`apple`)) {
//     console.log(`you really like apple!`);
// } 
// if(favorite_fruits.includes(`mango`)){
//     console.log(`you realy like mango`)
// }
