// Array
// To create an array, you need to use the square brackets [] and separate the items using a comma.

                let birds = ["pesion", "crow", "eagle","lophophorous"];
// index positoin aof bords     0         1        2           3


console.log(birds[1]);   //accress second element through index and indexing starts form 0 
    console.log(birds);

    
let mixarray = ["cow", 2,8,5.7, 2*3, "rabbit", true];
console.log("before replace: ");
for(i = 0; i<=6;i++){
    console.log( mixarray[i]);
}
mixarray[5] = 'cat';            //rabbit of mixarray is replace by cat
console.log("after replace:");
for(i = 0; i<=6;i++){
    console.log( mixarray[i]);
}
