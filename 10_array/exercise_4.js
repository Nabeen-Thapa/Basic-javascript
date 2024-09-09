let colors = ["red","green","blue"];    //creat a array

//add black from the last
colors.push("black");
console.log(colors);  //output: [ 'red', 'green', 'blue', 'black' ]

//remove red and swap green and blue
colors.shift();
let temp = colors[0];       //put index 0 i.e. green in temp variable
colors[0] =colors[1];       //put blue in index 0 
colors[1]=temp;             //put value of temp i.e green in index 1 
console.log(colors);


//add yellow at the first index
colors.unshift("yellow");
console.log(colors);

