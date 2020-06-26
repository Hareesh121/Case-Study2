
function validate()
{

    let email= document.getElementById('email').value;
    let pwd= document.getElementById('pwd').value;


let regexp=/^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+)\.([a-z]{2,4})(\.[a-z]{2,4})?$/;

let regex = /^((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20})$/;

if( email=="" || pwd=="")
{
 alert("All fields are required")

 return false;
}
else if(regexp.test(email)==false)
{
alert("Enter a valid email id")
return false;
}
else if(regex.test(pwd)==false)
{
  
alert("enter a valid password")

return false;
}
else if(regexp.test(email)==true && regex.test(pwd)==true )
{
    // alert("Login Success")
    
return true;
}
}
