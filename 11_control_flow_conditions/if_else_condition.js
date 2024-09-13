// if allow to run any program id required condition met
// syntax :
//          if(condition){
//                 statements
//          }

let age = 16;
if(age >= 18){
    //return messasge only if age is greate or equal to 18 else return nothing
    console.log("you can vote"); 
}


// if we want run message/statement when if condition is not meet then we can use else

if(age>=18){
    console.log("you can vote");
}else{
    console.log("you can't vote ");
}


// if we want to check two condition when if condition is not met we can use else if 

let new_age = 68;
if(new_age <=18){
    console.log("your are child");
}else if(new_age <= 60){
    console.log("you are adult");
}else{
    console.log("you are senior citizen");
}