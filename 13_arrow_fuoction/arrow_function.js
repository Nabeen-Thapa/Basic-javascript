//arrow function allow to make code short, simple and easy
//syntax 
//        const func_name = (param1, param2,......)=>{
//              //finction body
//          }
//in above func_name is the variable that hold function

const greetings = (name)=>{
    console.log(`hello, ${name}`);
}
greetings("Ram");



//omit both the curly brackets and the return keyword, creating a single line function as shown below:
const func=(a,b)=> "sum is:"+ (a+b);
console.log(func(5,10));
const funct=()=>console.log("this is arrow function");
funct();


//curly bracket is require only when have multiline functionbody

const mutliline=()=>{
    console.log("this is line 1");
    console.log("this is line 2");
    console.log("this is line 3");
}
mutliline();



//arrow function without round bracket() - it is only for single parameter if we have miltiple parameter and if no parameter we have to use round bracket()
//in arrow function round bracket is optional
let without_bracket = a => "sum is:"+ (a+3);
console.log(without_bracket(7));
