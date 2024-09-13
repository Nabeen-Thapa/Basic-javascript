// The rest parameter is a parameter that can accept any number of data as its arguments, shuld define ine the function header by addinf triple dots (...) before hte parameter name. The arguments will be stored as an array.
// syntax: 
//          function function_name(...agrs){
//              console.log(agrs);
//          }

function printargs(...args){
    console.log(args);
}
printargs("R","E","S","T");//output in array  : [ 'R', 'E', 'S', 'T' ]
