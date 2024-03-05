/*
function fun1(){
    let c = document.getElementById('num1').value;
    let d = document.getElementById('num2').value;
 
    if(c==""){
        alert("please fill every option");
        document.getElementById('num1').focus();
        return false;
    }
   else if(d =="")
   {
    alert("please fill every option");
        document.getElementById('num2').focus();
        return false;

   }
    else{     
      let a = parseInt(c);
     let b = parseInt(d);
      alert(a+b);
    }

 }
 */

 function Aman(){
  let nam = document.getElementById('name').value;
  let Mnam = document.getElementById('Mname').value;
  let Fnam = document.getElementById('Fname').value;
  let Cnumb = document.getElementById('Cnum').value;
  let Email = document.getElementById('email').value;

  if(nam == ""){
    alert("please fill the  Name option")
    document.getElementById('name').focus();
    return false;
  }
  else if(Mnam == ""){
    alert("please fill the Mother Name option")
    document.getElementById('Mname').focus();
    return false;
  }
  else if(Fnam == ""){
    alert("please fill the FatherName option")
    document.getElementById('Fname').focus();
    return false;
  }
  else if(Cnumb == ""){
    alert("please fill the Contact Number option")
    document.getElementById('Cnum').focus();
    return false;
  }
  else if(Email == ""){
    alert("please fill the Email option")
    document.getElementById('email').focus();
    return false;
  }
  else{
    
    alert("Your Name is : "+nam+" \n Your Mother Name is : "+Mnam+"\n Your Father Name is : "+ Fnam +"\n Your Contact Number is : "+Cnumb+"\n Your  Email is : "+Email);
  }

 }