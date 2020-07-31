function validateForm(){
    var email = document.getElementById('email');
    var psw = document.getElementById('psw');
    var psw_re = document.getElementById('psw-re');
    var foo = false
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value))
    {
        foo = true;
    }
    else{
        
        alert("You have entered an invalid email address!")
        foo = false
    }
    foo = false;
    if (psw.value == psw_re.value ){
        foo = true
    }
    else{
        alert("Password and confirm password must match")
        foo = false
    }

    return foo;
}