// Q41 ;Magicians: Make a array of magician’s names. 
// Pass the array to a function called show_magicians(), 
// which prints the name of each magician in the array.



// Q41 is Solved
function show_magicians(magicians: string[]): void{
    for (const magician of magicians){
        console.log((magician.charAt(0).toUpperCase() + magician.slice(1)));
        
    }
}

//Q42; Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() 
// that modifies the array of magicians by adding the phrase the Great to each magician’s name. 
// Call show_magicians() to see that the list has actually been modified.

// Q42 is solved

function make_great(magicians:string[]): void {
for(let i=0; i <magicians.length; i++){

    magicians[i] =magicians[i] + `the great`
}
}

const magicians2:string[]=[`Nadeem khan`,`Gull goher`,`Sultan`,`salman`];
make_great(magicians2)
show_magicians(magicians2)




// Q43;Unchanged Magicians: Start with your work from Exercise 40. 
// Call the function make_great() with a copy of the array of magicians’ names. 
// Because the original array will be unchanged, return the new array and store it in a separate array. 
// Call show_magicians() with each array to show that you have one array of the original names and one array with 
// the Great added to each magician’s name.

//Q43 is Solved

function make_great2(magicians: string[]): string[]{
    const greatmagicians:string[]=[];
    for(let i=0; i<magicians.length; i++){
        greatmagicians.push(magicians[i] + `thge great`);
    }
    return greatmagicians;
}

const magicians3:string[]=[`Shah Nawaz`,`Shahbaz`,`Ali Nawaz`];


const greatmagicians2:string[]= make_great2(magicians3)
show_magicians(magicians3);
show_magicians(greatmagicians2);



