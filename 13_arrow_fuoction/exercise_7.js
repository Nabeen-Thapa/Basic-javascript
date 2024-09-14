// Exercise #7
// Write a function named calculateSquare() that's used to calculate the area and perimeter of a square shape.
// The function accepts one parameter: the side of the square.
// The formula to calculate the area is side * side, and the formula to calculate the perimeter is 4 * side.

// normal function
function calculateSquare(side){
    console.log("the square side is:" +side);
    console.log("area of square is : " + (side * side));
    console.log("area of perimter is : " + (4 * side));
}
calculateSquare(8);




//arrow function
let calculateSquareArrow = side => 
    console.log("the square side is:" +side);
    console.log("area of square is : " + (side * side));
    console.log("area of perimter is : " + (4 * side));

calculateSquareArrow(8);