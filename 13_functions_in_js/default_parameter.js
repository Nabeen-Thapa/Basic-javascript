// default paremeters
function greet(word="Namaste", name="Ram", word1){
//word and name are know as default parameter and word1 is non-default parameter 
    console.log(`${word}, i am ${name} and i m ${word1}`);
}
greet();    //calling uisng default parameters
greet("hello", "Hari");
 //call by giving new arguments, its third parameter show undefined,
greet("Namaste" , "shyam" , "well");

// output:
// Namaste, i am Ram and i m undefined
// hello, i am Hari and i m undefined
// Namaste, i am shyam and i m well




// null parameter
function name(name="ram")
{
    console.log(name);
}
name(null);  //null parameter, it does  not replace with ram