// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. 
// The function should have one parameter that collects as many items as the function call provides, 
// and it should print a summary of the sandwich that is being ordered. 
// Call the function three times, using a different number of arguments each time.

//Q44 is solved

function sandwich(...items:string[]): void {
    console.log("sandwich order:")

    for (let i =0 ; i <items.length; i++){
        console.log(`-${items[i]}`)
    }
}

console.log(`enjoy your sandwich Nadeem khan Bughti`)

sandwich(`chiken`,`capsicum`,`tamato`)
sandwich(`beef`,`bakra`)
sandwich(`sabzi`,`mayo souce`)