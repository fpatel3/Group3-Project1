
var email=document.forms['form']['email'];
var password=document.forms['form']['password'];

var email_error=document.getElementById('email_error');
var password_error=document.getElementById('password_error');

email.addEventListner('textInput',email_Verify);
password.addEventListner('textInput',password_Verify);


function formValidate()
{
	if(email.value.length < 9)
	{
		email.style.border = "1px solid red";
		email_error.textContent = "Email is required";
		email.focus();
		return false;
	
	}
	if(password.value.length < 6)
	{
		password.style.border = "1px solid red";
		password.error.textContent = "Password is required";
		password.focus();
		return false;	
	}

}

function emailVerify()
{
	if(email.value.length >= 8 )
	{
	 email.style.border="1px solid red";
	 email_error.style.display = "none";
	 return true;
	}
}
function password_Verify()
{
	if(password.value.length >= 8)
	{
	 password.style.border="1px solid red";
	 password_error.style.display = "none";
	 return true;
	}


}
