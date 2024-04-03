// Hello Admin: Make a array of five or more usernames, including the name 'admin'. 
// Imagine you are writing code that will print a greeting to each user after they log in to a website. 
// Loop through the array, and print a greeting to each user:


// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?

// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.

// solved
let username:string[]=[`Nadeem`,`sultan`,`Waseem`,`Nadeem`,`Tariq`];


for(let i=0; i <username.length;i++){
    if(username[i]== `admin`){
console.log(`\n hello ${username[i]} would you like to see a status report?\n`);
    }
    
    
    
    else{
        console.log(`hello ${username[i]} thanks for logging in again!`);

    }
}

