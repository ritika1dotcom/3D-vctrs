function validateForm()
{
    var name = document.forms["myForm"]["Name"].value;
    var last = document.forms["myForm"]["Last"].value;
    var emal = document.forms["myForm"]["email"].value;
    var pass = document.forms["myForm"]["password"].value;

    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		if(name =='')
		{
			alert("please enter user name.");
		}
        else if(last == '')
        {
            alert("please enter last name.");
        }
        else if(emal == '')
        {
            alert("please enter the email address.");
        }
		else if(pass=='')
		{
        	alert("enter the password");
		}
		else if(!filter.test(emal))
		{
			alert("Enter valid email id.");
		}
		else if(pass.length < 8 || pass.length > 8)
		{
			alert("Password min and max length is 6.");
        }

        else
        {
            alert("Account is created successfully.");
            window.location = "index.html";
        }
}
function validate()
{
    var email1 = document.getElementById("Email").value;
    var password1 = document.getElementById("Password").value;

    if (email == "emal" && password == "pass")
    {
        alert("Login Successful!");
        window.location = "index.html";
        return false;
    }
    else
    {
        document.getElementById("Email").disabled = true;
        document.getElementById("Email").disabled = true;
        return false;

    }
}
