// switch case
//      - laternative of else if
//      - used when too many condition needs to check
//      - the data type of the case value that you want to match with the       expression, The number expression doesn't match the string case value


// number matching
let age= 21;
switch(age){    
    case 1: 
        console.log("you are one year old");
        break;
    case 5:
        console.log("you are five year old");
        break;
    case 10:
        console.log("you are ten year old");
        break;
    case 20:
        console.log("you are adult");
        break;
    default:
        console.log("your age is not in these cases");
}



// string matching
let str= "a";
switch(str){
    case "a":
    case "e":
    case "i":
    case "o":
    case "":
        console.log(str + " is in the vowel words");
        break;
    default:
        console.log(str + " not vowel");
}



// we can't match value with different datatype
switch(1){    
    case "1": //this return default message i.e  not match
        console.log("you are one year old");
        break;
    default:
        console.log("not match");
}



//can't match boolean true as 1 and false as 0
switch(1){ //this show the default message
    case true:
        console.log("it is true");
        break;
    case false:
        console.log("it is false");
        break;
    default:
        console.log("not match");
}


//break; in switch is necessary
//if we don't use break; it display all the cases after matching case
let ager= 5;
switch(ager){     
    case 1: 
        console.log("you are one year old");   
    case 5:
        console.log("you are five year old");
       
    case 10:
        console.log("you are ten year old");
       
    case 20:
        console.log("you are adult");
       
    default:
        console.log("your age is not in these cases");
}


// we can also check cases as follows
switch (20) {
    case 10 +10:
        console.log("it is twenty");
        break;
    default:
        console.log("not match");   
}

// we can't use condition in switch body
// below code run the default message
let age1 = 20;
switch(age1){
    case age1 <18:
        console.log("child");
        break;  
    case age1 < 60:
        console.log("adult");
        break; 
    case age1> 60:
        console.log("senior citizen");
        break; 
    default:
        console.log("not match");  
}

