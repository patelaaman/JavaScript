// Math is  object  and ( . ) is access member op  and pow() is a function-->

// Power function --> 

/*let a = Math.pow(3,2);
alert(a)  */

// Power function with input 

/*
let base = parseInt(prompt("Enter Base of the number"));
let power = parseFloat(prompt("Enter power of the number square"))

let result = Math.pow(base, power);
alert(result)
*/

// Square root  function 

/*
let a = Math.sqrt(16)
alert(a)
*/

// trunc function trunc() square root ki point wali value ko hata deta hai

/*
let a  = Math.trunc(Math.sqrt(12));
document.write("<h1>"+a+"</h1>")
*/

// max() function 
/*
let a = Math.max(23,3,5,22,57,5,67,489)
document.write("<h1>"+a+"</h1>")
*/

// min() function 

/*
let a = Math.min(23,3,5,22,57,5,67,489)
document.write("<h1>"+a+"</h1>")
*/

// sign() function is check the function is negative(-1) or positive(1) and Zero(0)
/*
let a = Math.sign(-83)
document.write("<h1>"+a+"</h1>")
*/

// random()  function by default 0 and 1 ke beech ki points value deta hai
// and koi bhi number ke beech ki bhi value de sakta hai( this is work like a capcha)

/*
let a = Math.trunc(Math.random()*5+1)
document.write("<h1>"+a+"</h1>")
*/

/*
let base = parseInt(prompt("Enter the number"));
   if(Math.sign(base)>=0)
     document.write("<h1>"+" The number is positive "+base+"</h1>")
   else if(Math.sign(base)==0)
     document.write("<h1>"+" The number is Zero"+base+"</h1>")
   else 
     document.write("<h1>"+" The number is negstive "+base+"</h1>")
*/
let li =document.getElementById('sec')
let a = Math.trunc(Math.random()*5+1)
function math(){
    a = Math.random()*5+1;
    li.innerHTML=a;
    
}

