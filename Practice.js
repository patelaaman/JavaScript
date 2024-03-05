function Check() {
    let Name = document.querySelector("#name").value
    let email = document.querySelector("#email").value
    let number = document.querySelector("#number").value
    let address = document.querySelector("#address").value
    
    let password = document.querySelector("#password").value
    let cpassword = document.querySelector("#cpassword").value

    
    if (Name==""){
        alert("Please Enter your name");
        // document.querySelector("#name").focus();
        return false;
    }
        else if(email=="") {
    alert ("Enter your email")
    return false
    }
    else if(number=="") {
    alert ("Enter your number ")
     return false
    }
    else if(password=="") {
        alert("Enter password")
        return false
    }
    else if (cpassword==""){  
        alert("Confirm password")
        return false
    }
    else if (password!=cpassword) {
        alert("Both password should be same")
        return false
    }

}