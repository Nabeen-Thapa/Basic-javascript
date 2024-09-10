// Find out how many times you need to flip a coin until it lands on heads.
let head = false;
let count = 0;
while(!head){
    count++;
    head = Math.random() <0.5;
}
console.log(count + " times need to flip a coin until it lands on heads");

