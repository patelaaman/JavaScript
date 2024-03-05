function validation(){
    let na=document.getElementById('name').value;
    let fna=document.getElementById('Fname').value;
    let mna=document.getElementById('Mname').value;
    let cnum=document.getElementById('Cnum').value;
    let sel=document.getElementById('select').value;
    let add=document.getElementById('Address').value;
    let email=document.getElementById('email').value;
    let pas=document.getElementById('pass').value;
    let Dob=document.getElementById('dob').value;


    if(na ==""){
       alert("Please fill the option")
       document.getElementById('name').focus();
       return false;
    }
    else if(fna ==""){
       alert("Please fill the option")
       document.getElementById('Fname').focus();
       return false;
    }
    else if(mna ==""){
       alert("Please fill the option")
       document.getElementById('Mname').focus();
       return false;
    }
    else if(cnum ==""){
       alert("Please fill the option")
       document.getElementById('Cnum').focus();
       return false;
    }
    else if(sel ==""){
       alert("Please fill the option")
       document.getElementById('select').focus();
       return false;
    }
   else if(add ==""){
       alert("Please fill the option")
       document.getElementById('Address').focus();
       return false;
    }
   else if(email ==""){
       alert("Please fill the option")
       document.getElementById('email').focus();
       return false;
    }
   else if(pas ==""){
       alert("Please fill the option")
       document.getElementById('pass').focus();
       return false;
    }
   else if(Dob ==""){
       alert("Please fill the option")
       document.getElementById('dob').focus();
       return false;
    }
}
