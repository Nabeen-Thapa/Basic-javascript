// does not have argument binding 
//  - multiple arguments can be access by argumets keyword in arrow function when arrow function is defined by function() keyword
let binding = function(){
    console.log(arguments);
}
binding(2,3,4.5,6); //output : [Arguments] { '0': 2, '1': 3, '2': 4.5, '3': 6 }



//arguments keyword can be also used in non arrow functions
//argunets is implict oblect

//we can't use arguments keyword in arrow funciton
//let non_arrow = ()=> console.log(arguments); // this show error
// arguments keyword is automatically available in non-arrow functions and contains all arguments passed to the function, even if they aren't declared.

function non_arrow(){
    console.log(arguments);
}
non_arrow("Apple","cow", "goat","banana");
//output: [Arguments] { '0': 'Apple', '1': 'cow', '2': 'goat', '3': 'banana' }


//argument keyword can be used in arrow funciton using JavaScript spread syntax(...)
let arrow = (...arguments)=> console.log(arguments);
// can access the given arguments with the array index notation as arguments[0], arguments[1], and so on.
//arrow = (...arguments)=> console.log(arguments[0] +" "+ arguments[1] +" "+arguments[2]);
arrow("cow", "goat","banana"); //output: [ 'cow', 'goat', 'banana' ]


// ...args is explicty defined in funciton
function triple_dot(...args){
    console.log(args);
}
triple_dot(3,4,5, 6); //output : [ 3, 4, 5, 6 ]