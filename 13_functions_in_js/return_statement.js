// return
// written in the code block of function

function add(a,b){
    return a+b;
}
console.log("sum is: " +add(4,6));
// or by assigining to a variable
let sum = add(10, 5);
console.log("sum is: " +sum );



//return skips further code written inside the function block and goes back to where you call the function.
// check age
function checkage(age){
    if(age>18){
        return "you can get car licence";
    }
    return "you can not get car licence";
    }
console.log(checkage(20));
console.log(checkage(16));



//return without value
function greet(){
    console.log("hollo");
    return;
    console.log("it it is returnwithout value");
}
greet();