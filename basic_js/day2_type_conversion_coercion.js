// type conversion or type casting - changing one datatype to another datatype
// 3 function used to type conversion
//      -Number()
//      -String()
//      -Boolean()


// to converse string to integer int() is used
let x="30";
let y= 20;
let z=10;
console.log("without type conversion: "+( x + y));   //output : 3020
x= Number(x);   //convert string x to integer
console.log("after type convert string to integer: "+( x + y));    //output : 50

// integer into string
console.log("before type convert integer to string: "+(y+z));    //output :30
y= String(y);
z= String(z);
console.log("after type convert integer to string: "+(y+z));    //output :2010




//Type coercion
// a process where a value of one type is implicitly converted into another type.
console.log(1 + "1");

//type coercion rules
//  -JavaScript will first convert to string when it finds different data types
        console.log(1 + "1");               //11
        console.log("coersion" +1);         //coersion1
        console.log(true + "1");            //true1
        console.log("couersion" + true);    //couersiontrue
    
//  -But the order of the values matters when you have an object
        console.log({a: 1} + "1");           //[object Object]1
        console.log("1" + {a:1});            //1[object Object]
        console.log(true + {a:1});           //true[object Object]
        console.log(1 + {a:1});              //1[object Object]
        console.log({a:1} + 1);              //[object Object]1
        console.log({a:1} + true);           //[object Object]true



//implicitly type conversion - automatically done
let a = "20";
let b= 10;
console.log(a+b); //output :2010 i.e it automatically change 10 int to string

//Explicitly type conversion - done by programmer
let exp1= "40";
let exp2 = 30;
exp1= Number(exp1);
console.log(exp1+ exp2); //output : 70  because exp1 is changed string to number uisng Number() function
