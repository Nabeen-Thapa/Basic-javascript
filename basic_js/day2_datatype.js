console.log(2 + "nabin"); //concatinates
//output : 2nabin

// other concatination
console.log(2 +"concate");
console.log(2 + 4 +"concate");
console.log("concate" +2 + 4);
console.log('true' + true);
console.log(true + true);
console.log(false + false);
console.log(false + true);
console.log(true + false);
console.log(false + 1);



// string -series of chcaracters and string needs to be enclosed in quotations
let message = "this is string datatype";
console.log(message);

//let invalid_syn = "string';   //invalid syntax to for string , enclosed in quotation 


// join two or more string
let message1 = "javascript";
let message2 = " string datatype";
console.log("i" + " am" + " learning " + message1 + message2 + " at day 2");// + symbol used to join string


// tamplate string format - (``) -backtick 
let tmp = "tamplate";
let fmt = "format";
console.log(`this is ${tmp} string ${fmt}`); 


// string represent number
let num = "50" + "30";
console.log(num); 
// When we join two string  numbers with a + symbol, JavaScript will join the two numbers instead of performing arithmetic addition.



//Numbers (integers and floats) datatype
// two types
//     -integer 
//     -floats

// integer
let a= 5;
let b=10;
console.log(a+b);   //can be perform all arithematic operation (* , /, -, % etc)

// floats
let x= 5.5;
let y = 3.14;
console.log(x+y);   //can be perform all arithematic operation (* , /, -, % etc)



// boolean in js - true or false / on or off
let on = true;
let off = false ;



// undefiened in js
let fname;
console.log(fname);
//or 
let lname = undefined; 
console.log(lname);



//null in js - represents an empty or unknown value
let name = null;
console.log(name);


