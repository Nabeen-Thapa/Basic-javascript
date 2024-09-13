// two types 
//      1) local scope - declared inside the function, accssiable only from that function
//      2) golbal scope- declared outside the function ,accssiable  from any where

//local varialbe i.e insode the function
// function greet(){
//     let str = "hollow, this is local scope";
// }
// greet();
// console.log(str); //it show error because local variable try to access outside the function  :  ReferenceError: str is not defined 



//global variable i.e definfing variable outside the function
let strings  ="this is global variabe";
function greeting(){
    console.log(strings); //accesing global variable inside the function
}
greeting();
console.log(strings);



// global and local both without overwriting it
let varables = "this is new global variable";
function var_function(){
    let varables ="this is new local variable";
    console.log(varables); 
}
var_function();//it print local variable message declase inside the function
console.log(varables); //it print global variable message, declare outside the function
