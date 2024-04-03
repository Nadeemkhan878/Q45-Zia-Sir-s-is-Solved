// Cars: Write a function that stores information about a car in a Object. 
// The function should always receive a manufacturer and a model name. 
// It should then accept an arbitrary number of keyword arguments. 
// Call the function with the required information and two other name-value pairs, 
// such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.


// Q45 is solved

type car= {
    manufacture : string
    modal:string
    [key:string]:any;

}

function createcar(manufacture:string,modal:string,optional:Record<string,any>): car {
    return{
        manufacture,
        modal,
        ...optional
    }
}

const mycar:car = createcar("Toyota","corolla",{color: "silver", year: "2024"})
console.log(mycar)