// Guest List: If you could invite anyone, living or deceased, to dinner, 
// who would you invite? Make a list that includes at least three people you’d like to invite to dinner. 
// Then use your list to print a message to each person, inviting them to dinner.
       //[solved]
let Guest_list:string[]=[`Adil Shah`,`Ali gohar`,`Waseem`]
for(let i=0; i<Guest_list.length; i++){
    console.log("Dear sir "+Guest_list[i]+" \nwe have invited to u for dinner party tonioght\nthanks")
}

// Guest List: If you could invite anyone, living or deceased, to dinner, 
// who would you invite? Make a list that includes at least three people you’d like to invite to dinner. 
// Then use your list to print a message to each person, inviting them to dinner.

let not_presant:string=`Adil Shah`;
let new_guest:string="Azeem"
new_guest=Guest_list[1]
for(let i=0; i<Guest_list.length; i++){
    console.log("Dear sir"+Guest_list[i]+"\nwe have invited to u for dinner party tonioght\nthanks")
}
    console.log(`we have really sorry ${not_presant} is not caming party tonight`);

//Q16 solved here
// 16:More Guests: You just found a bigger dinner table, so now more space is available. 
// Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. 
// Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. 
// • Print a new set of invitation messages, one for each person in your list.



    Guest_list.unshift(`malikbhai`,`sarfrazbughti`,`javedali`,);
    for (let i=0; i<Guest_list.length; i++){
      console.log(`respacted sir/Madem  `+Guest_list[i] + `,\nwe have found big table so we think i invite u all.n\n thank you`);
    }


//   Q17 solved here
// 17:Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, 
// and you have space for only two guests.
// • Start with your program from Exercise 16. 
// Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. 
// Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
                  //Task 17

console.log(`\nunfortunetly we can not arrage big table ,only two people allow.`);
 while(Guest_list.length>2){
   let remove_guest=Guest_list.pop();
   console.log(`sorry sir. ${remove_guest}you are not invited for the dinner`)
 }
 for (let i=0; i<Guest_list.length; i++){
   console.log(`respacted sir/Madem  `+Guest_list[i] + `,\nkal tum aana boht khana para hai.n\n thank you`);
 }
 Guest_list.splice(0,2);
 console.log(Guest_list);



