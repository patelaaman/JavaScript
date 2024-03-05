// Voting
/*
wap to take input from user and check it is eleigible form voting or not 
if eligible for voting  than again take input and check it is indian or not 
,if indian then eligible for voting if not eligible for vote
*/

 let age = parseInt(prompt("Enter Your age "));
 if(age>=18){
    var na = parseInt(prompt("Are you Indian press 1 for yes "));
    if(na==1)
    {
         alert("You are Eligible for voting");
    }
    else{
        alert("Not Eligible for Voting ");
    }

 }
 else{
    alert("Not ELigible");
 }