// Parameters are variables used to accept inputs given when the function is called.

// syntax:  
//            function function_name(parameter1, parameter2,...){
//              function body/codes
//            }


function greet(name){       //name is parameter
    console.log(`namste, a am ${name}`);
}
greet("Ram");       //Ram is argument

// more then one pareameter
function greeting(name, weather){
    console.log(`hello, ${name}`);
    console.log(`it's ${weather} today, yes`);
}
greeting("Hari", "Cloudy");
