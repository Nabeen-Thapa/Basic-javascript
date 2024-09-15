//object
// - allow to store more than one value like array
// - the different between object and array is that array store data as list where object store as key:value form 
// - where key must be unique , can,t use same key two or more times in same object



//eg book info
//regular variable 
let bookName = "javascript";
let bookAuthor = "Nathan Sebhastian";
//it certainly isn't the best way to store related values.


//in array form 
let bookInfo = [
    "javascript", "Nathan sebhastian"
]
console.log(bookInfo); //output: [ 'javascript', 'Nathan sebhastian' ]
//this is better than storing in variable form but have no way to add context to the value



//onject form i.e key: value form - object is declare using curly brackets {}
let book_info = {
    title :"javascipt", //title is key and javascript is value
    author : "Nathan sebhastian" //author is key and Nathan sebhastian is value
}
console.log(book_info);//{ title: 'javascipt', author: 'Nathan sebhastian' }
//these object's items are also know as porperty, with the key as property name and value as property value.



//we caN create functions in object
let bookData = {
    title: "js",
    author : "N.S",
    describe: function(){
        console.log(`i am learning ${this.title}`);
        console.log(`written by ${this.author}`);
    } //describe book in function
}
console.log(bookData);
//to access value of an object , we can use . or []
console.log(`book title : ${bookData.title}`); //using dot (.)
console.log(bookData.author);//using dot (.)
console.log(bookData["title"]);//using [] 
console.log(bookData["author"]);//using [] - property name shuold be wrap in qoutes like string
bookData.describe();


