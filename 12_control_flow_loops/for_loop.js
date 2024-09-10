// A Loop statement is another category of control flow statement used to execute a block of code multiple times until a certain condition is met.

// for looop
for(let x=0; x<=10;x++){ 
    console.log(x); //print 1-10 number 
    // This block will be executed repeatedly until condition satsfy
}

// also like that
for(let x=0; x<=20;x+=2){ 
    console.log(x); 
}


let heads = 0;
let tails = 0;
for (x = 1; x <= 10; x++) {
  if (Math.random() < 0.5) {
    tails++;
  } else {
    heads++;
  }
}

console.log("Tossed the coin ten times");
console.log(`Number of heads: ${heads}`);
console.log(`Number of tails: ${tails}`);
