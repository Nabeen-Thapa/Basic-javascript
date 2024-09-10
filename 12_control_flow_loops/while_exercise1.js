// Write a program that prints a half pyramid using asterisks * as shown below:
//      *
//      **
//      ***
//      ****
//      *****

for(let i=1;i<=6;i++){
    let asterisks = "";
    for(let j=1;j<=i;j++){
        asterisks += "*";
    }
    console.log(asterisks);
}
