function fun1(){
    console.log("this function 1");
}
function fun2(){
    console.log("this function 2");
};


function fun3(){
    console.log("this function 3");
};
fun1();
// setInterval(fun2,100); 
// setTimeout(fun2, 120);
fun3();


//in single function
function eventloop(){
    console.log("this is the first loop"); 
    setTimeout( //this execute in the last because if seTimeInterval is 5 so it goes in callback queue and run after 5ms 
        function displ(){ console.log('this is second loop'); }
      ,5);
    console.log("this is third loop");
}
eventloop();
//output: 
// this is the first loop
// this is third loop
// this is second loop

// Explanation for above program: 
// In the above example, the first console log statement is pushed to the call stack, and “This is the first statement” is logged on the console, and the task is popped from the stack. Next, the setTimeout is pushed to the queue and the task is sent to the Operating system and the timer is set for the task. This task is then popped from the stack. Next, the third console log statement is pushed to the call stack, and “This is the third statement” is logged on the console and the task is popped from the stack. 

// When the timer set by the setTimeout function (in this case 1000 ms) runs out, the callback is sent to the event queue. The event loop on finding the call stack empty takes the task at the top of the event queue and sends it to the call stack. The callback function for the setTimeout function runs the instruction and “This is the second statement” is logged on the console and the task is popped from the stack.

//     Note: In the above case, if the timeout was set to 0ms then also the statements will be displayed in the same order. This is because although the callback will be immediately sent to the event queue, the event loop won’t send it to the call stack unless the call stack is empty i.e. until the provided input script comes to an end.












function callme(){
    return callme();
}
callme(); // this return error 
// RangeError: Maximum call stack size exceeded