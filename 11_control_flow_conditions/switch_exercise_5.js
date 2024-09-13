// swirch exercise
// Students that got an A will get a Chocolate
// Students that got a B will get a Cookie
// Students that got a C will get a Candy
// For any other value, print "No reward to give."

grade  = "C";
switch(grade){
    case "A":
    console.log("You got an A, so here's a Chocolate for you!");
    break;
    case "B":
        console.log("You got a B, here's a Cookie for you!");
        break;
    case "C":
        console.log("You got a C, there's room for improvement and here's your Candy!");
        break;
    default: 
        console.log("no reward to give");
}