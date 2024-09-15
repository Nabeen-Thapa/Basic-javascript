//creating object
let bookInfo = {
    title : "introduction to javascript",
    author : "Rajesh Khanal"
};
console.log(bookInfo); //read data from bookInfo object
//output : { title: 'introduction to javascript', author: 'Rajesh Khanal' }
console.log(bookInfo.title); //access key thought dot(.)
//output :introduction to javascript
console.log(bookInfo["author"]); //accress key through []
//output :Rajesh Khanal



//adding key/property with value
bookInfo.price ="1200";
console.log("after adding");
console.log(bookInfo);
//output :after adding
//        {
//          title: 'introduction to javascript',
//          author: 'Rajesh Khanal',
//          price: '1200'
//        }


//update/modify porperty of object
//change book pirce
bookInfo.price = 2000;
console.log("after modify:");
console.log(bookInfo);
//output : after modify:
//          {
//              title: 'introduction to javascript',
//              author: 'Rajesh Khanal',
//              price: 2000
//          }



//delete property - delete operator is used to delete the property
delete bookInfo.price;
console.log("after delete proce");
console.log(bookInfo);
//output :after delete proce
//  { title: 'introduction to javascript', author: 'Rajesh Khanal' }



//check key is sxists or not - in operator is used to check exists or not
//in perator return true if exists otherwise return false
console.log("checking key is exists or not");
console.log("author" in bookInfo); //true
console.log("name" in bookInfo); //false