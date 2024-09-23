// callback function
// just like other function 
// a fuction that passed as an argument in another function 
// that function run only after finish the parameter functino

// callback is passed three arguments: an element of the array, the index of that element, and the whole array.

// function callback_Function_Name(element, index, array) {
     // do something
// }


function child(){
    console.log("this is child funciton");
}
function parent(){
    console.log("this is parent funciton");
    child();
}
//parent();//  use/call child() function as argument

function grandparent(){
    console.log("grand child");
    parent();
}
grandparent(parent);





// Nested callbacks creating "callback hell"
function getData(callback) {
    setTimeout(() => {
        console.log("Data retrieved");
        callback();
    }, 1000);
}

function processData(callback) {
    setTimeout(() => {
        console.log("Data processed");
        callback();
    }, 1000);
}

function saveData(callback) {
    setTimeout(() => {
        console.log("Data saved");
        callback();
    }, 1000);
}

getData(() => {
    processData(() => {
        saveData(() => {
            console.log("All operations completed");
        });
    });
});
