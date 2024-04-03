// Start with the array you used in Exercise 11, 
// but instead of just printing each person’s name,
// print a message to them. The text of each message should be the same, 
// but each message should be personalized with the person’s name.
var friends = ["Ali Goher", "Shah Nawaz", "Sultan"];
var message = "you are my spacial guest i hope u will came to my birthday party Buddy ";
for (var i = 0; i < friends.length; i++) {
    console.log(message + friends[i]);
}
