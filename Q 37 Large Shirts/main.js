"use strict";
// Large Shirts: Modify the make_shirt() function so that shirts are large by default with 
// a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, 
// and a shirt of any size with a different message.
//solved
function make_shirt(size = `large`, text = `i love typesscript.`) {
    console.log(`creat a ${size} shirt with the message: ${text}`);
}
make_shirt();
make_shirt(`mediem`);
make_shirt(`small`, `i love python`);
