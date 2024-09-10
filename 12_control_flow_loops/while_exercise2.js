//  print a reverse half pyramid as follows:

//      *****
//      ****
//      ***
//      **
//      *

for(let i = 5; i>=1;i--){
    let asterisks = "";
    for(let j=1; j<=i; j++){
        asterisks +="*";
    }
    console.log(asterisks);
}