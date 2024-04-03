//Q3 Name Cases
//Store a person’s name in a variable, and then print that person’s 
//name in lowercase, uppercase, and titlecase.


 
 
 let personName: string="NadeemKhan"
//lowercase
 console.log("lowercase:",personName.toLowerCase());
//uppercase
 console.log("upercase:", personName.toLocaleUpperCase());
//tittlecase
 console.log("Tittle:", personName.replace(/\bw/g,c => c.toUpperCase()));
