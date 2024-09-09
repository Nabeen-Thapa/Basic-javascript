// push()  - use to insert the elements in array from last
let birds = ["pesion", "crow","lophophorous"];
birds.push("eagle"); //-output:  [ 'pesion', 'crow', 'lophophorous', 'eagle' ] - insert from last
console.log(birds);


//pop() - used to remove an item from the end of an array
let array = ["ram", "shyam", "cow"];
array.pop();
console.log(array);     //it remove cow from the array (form the last) 


// unshift()  - method can be used to add an item from the front 
let animals = ["cow", "goat"];
animals.unshift("eagle"); //it add eagle at the first index of array i.e index 0
console.log(animals);


// shift()  - method can be used to remove an item from index 0
let person= ["narayan", "laxman", "shyam" , "lal"];
person.shift();     //it remove narayan from the array i.e from index 0
console.log(person);


// indexOf() -  used to find and return the index of array item
let array1 = ["eagle", "cow", "buff"];
console.log(array1.indexOf("cow")); //it return the index of cow i.e 1


//length -used to fidn the size of array or number of items in array
let array2 = ["eagle", "cow", "buff"];
console.log(array2.length); //it return 3 beacuse there are three items in array