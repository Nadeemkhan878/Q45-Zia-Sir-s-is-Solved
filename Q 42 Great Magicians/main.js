// Q41 ;Magicians: Make a array of magician’s names. 
// Pass the array to a function called show_magicians(), 
// which prints the name of each magician in the array.
// Q41 is Solved
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log((magician.charAt(0).toUpperCase() + magician.slice(1)));
    }
}
//Q42; Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() 
// that modifies the array of magicians by adding the phrase the Great to each magician’s name. 
// Call show_magicians() to see that the list has actually been modified.
// Q42 is solved
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the great";
    }
}
var magicians2 = ["Nadeem khan", "Gull goher", "Sultan", "salman"];
make_great(magicians2);
show_magicians(magicians2);
// Q43;Unchanged Magicians: Start with your work from Exercise 40. 
// Call the function make_great() with a copy of the array of magicians’ names. 
// Because the original array will be unchanged, return the new array and store it in a separate array. 
// Call show_magicians() with each array to show that you have one array of the original names and one array with 
// the Great added to each magician’s name.
//Q43 is Solved
function make_great2(magicians) {
    var greatmagicians = [];
    for (var i = 0; i < magicians.length; i++) {
        greatmagicians.push(magicians[i] + " the great Magicions");
    }
    return greatmagicians;
}
var magicians3 = ["Shah Nawaz", "Shahbaz", "Ali Nawaz"];
var greatmagicians2 = make_great2(magicians3);
show_magicians(magicians3);
show_magicians(greatmagicians2);
