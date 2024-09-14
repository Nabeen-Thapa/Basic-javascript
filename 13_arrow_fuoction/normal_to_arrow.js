// we can cnage normmal function to arrow function in three steps
// 1. Replace the function keyword with the variable keyword let or const
// 2. Add = symbol after the function name and before the round brackets
// 3. Add => symbol after the round brackets
// optinal steps
// 4. remove curly bracket and return keyword 
// 5. remove round bracket if only one parameter

//normal funciton
// function normal_to_arrow(num){
//     return num *  num ; 
// }
// console.log(normal_to_arrow(5)); //output : 25


// translation normal to arrow function
// step 1 : replace function be let/const
// let normal_to_arrow(num){
//     return num *  num ; 
// }
//console.log(normal_to_arrow(5));


// step 2 : add = the round brackets
// let normal_to_arrow = (num){
//     return num *  num ; 
// }
// console.log(normal_to_arrow(5));


// step 3: Add => symbol after the round brackets
// let normal_to_arrow = (num)=>{
//     return num *  num ; 
// }
// console.log(normal_to_arrow(5)); //output : 25


//we can remove curly brackers and return keyowrd when there is single line of function
// let normal_to_arrow = (num)=> num *  num ; 
// console.log(normal_to_arrow(5)); //output : 25

//when we have exactly one parameter we can also remove round bracket
let normal_to_arrow = num => num *  num ; 
console.log(normal_to_arrow(5)); //output : 25