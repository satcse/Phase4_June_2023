//IIFE - Immediately invoked Function Expressions. - Define a function and immediately call it.
const empId = (function()
{
    let count=0;
    return function()
    {
        ++count;
        return `emp${count}`;
    }
})();

/*
let count=0;
const empId = function()
{
    ++count;
    return `emp${count}`;
}
*/

console.log("New Employee Ids are listed here");
console.log("Alex: "+empId());
console.log("Dexter: "+empId());
console.log("John: "+empId());

//Callbacks
console.log("\n");
function fullName(firstName, lastName, callback)
{
    console.log("My Name is: "+firstName+" "+lastName);
    callback(lastName);
}

var greeting = function(lastName)
{
    console.log('Welcome '+lastName);
}

fullName("Alex","Wilson",greeting);
console.log("\n");
fullName("Dexter","Johnson",greeting);
console.log("\n");
fullName("Annie","Thomas",greeting);
console.log("\n");
