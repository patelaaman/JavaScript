function Validation(){
    let nam = document.getElementById('name').value;
    let Fnam = document.getElementById('Fname').value;
    let Cnumb = document.getElementById('Cnum').value;
    let Email = document.getElementById('email').value;
    let password= document.getElementById('Password').value;
    let Cpass= document.getElementById('Cpassword').value;

    if(nam ==""){
        alert("please fill the option");
        document.getElementById('name').focus();
        return false;
    }
    else if(Fnam ==""){
        alert("please fill the option");
        document.getElementById('Fname').focus();
        return false;
    }
    else if(Email ==""){
        alert("please fill the option");
        document.getElementById('email').focus();
        return false;
    }
    else if( password==""){
        alert("please fill the option");
        document.getElementById('Password').focus();
        return false;
    }
    else if(Cpass ==""){
        alert("please fill the option");
        document.getElementById('Cpassword').focus();
        return false;
    }
    else if(Cnumb.length<10 || Cnumb.length>10)
    {
        alert("Please fill Valid Number ");
        return false;
    }
    else if(isNaN(Cnumb)){
        alert("Please fill Integer Number ");
        document.getElementById('Cnum').focus();
        return false;
    }
    else if(password != Cpass)
    {
        alert("Please re Enter Password");
        document.getElementById('Cpassword').focus();
        return false;
    }
    else if(!(Email.match(/[&%$#@!~]/))){
        alert("Please Enter Special Charecter");
        document.getElementById('email').focus();
        return false;
    }
    else{
    
        alert("Your Name is : "+nam+"\n Your Father Name is : "+ Fnam +"\n Your Contact Number is : "+Cnumb+"\n Your  Email is : "+Email+"\n Your  passowrd is  : "+password);
      }
   }