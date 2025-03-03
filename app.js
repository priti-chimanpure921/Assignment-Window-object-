

//setTimeout function
console.log("Hi there!");
setTimeout(()=>{
    console.log("Apna College")
},4000);
console.log("Welcome to ");

//setInterval function
let id1 = setInterval(()=>{console.log("Hello");} , 2000);
let id2 = setInterval(()=>{console.log("Welcome to ");} , 3000);
let id3 = setInterval(()=>{console.log("Apna Collge ");} , 4000);

clearInterval(id1);
clearInterval(id2);
clearInterval(id3);

//running setInterval for 5 seconds
let id = setInterval(()=>{
    console.log("Hello World!");
} , 2000);

setTimeout(function(){
    clearInterval(id);
}, 10000);






    
    
