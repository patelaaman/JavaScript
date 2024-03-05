/*
var radius = parseInt(prompt("Enter first number"));
var Ar_o_cir = 3.14 *(radius*radius);
//console.log("Area of circle ="+Ar_o_cir);
alert("Area of circle ="+Ar_o_cir);
*/

//Write a progra to swap two value using third value

/*
var a = parseInt(prompt("Enter first number"));
var b = parseInt(prompt("Enter second number"));
alert("Before Swap     First ="+a +"    Second"+b);
//var c = a;
//  a = b;
//  b =c;
 a = a+b;
 b = a-b;
 a = a-b;

   alert("After Swap  First ="+a +"  Second"+b);
   */


// Which number is Greater  check   
/* 
var a = parseInt(prompt("Enter first number"));
var b = parseInt(prompt("Enter second number"));
alert("   First ="+a +"    Second"+b);
if(a>b){
    alert("Grater Number is "+a);
}
else if(b>a)
alert("Loweest number"+b);
else
 alert("Number is Equal");

 */

 // Even or Oodd number
 /*
 var a = parseInt(prompt("Enter first number"));
if(a%2==0){
    alert("The Number is Even"+a);
}
else 
alert("The Number is Odd "+a);
 */

/*
var a = parseInt(prompt("Enter first number"));
if(1==a){
    alert("Cybrom Number is "+a);
}
else if(2==a)
alert("technology  number is "+a);
else
 alert("Wrong Value");
*/

// check the case
/*
var a = parseInt(prompt("Enter first number"));
if((a>100) &&(a<500) ){
    alert("Buy Cake "+a);
}
    else if(a>=500 && a<1000)
       alert("Going on Shoopping "+a);
    else if(a>=1000 && a<2000)
       alert("Going to taj  "+a);
*/

// Take input and print table 
let number = parseInt(prompt("Enter a number : "));
let i = 1;

while (i <= 10) {
 /* alert(number + "*" + i + "=" + number * i);
  i++;*/
  console.log(number*i);
    i++;
}

//wap to print only even number between 1 tp 20;

/*

let number = 2; 

while (number <= 20) { 
  
  alert(number);
  
  number = number + 2;
}

*/

//wap to add all odd number between 10 to 1 and print it;
/*
 
let sum = 0;


let num = 10;


while (num >= 1) {
  
  if (num % 2 !== 0) {

    sum += num;
  }
  
  num--;
}


alert("The sum of all odd numbers between 10 and 1 is " + sum);

*/
