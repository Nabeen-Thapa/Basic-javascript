// Exercise #8

// Create a person object with the following properties:

//     name - the person's name
//     age - the person's age
//     greet() - a function to greet another person

// Inside the greet() function, introduce the person, specifying the name and the age.

let person ={
    name: "Rahul Sivakoti",
    age : 30,
    greet: function(){
        console.log(`Hello, my name is  ${this.name} and i am ${this.age} years old`);
        
    }
}
// console.log(person);
person.greet();
//output : Hello, my name is  Rahul Sivakoti and i am 30 years old