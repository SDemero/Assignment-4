var password = document.getElementById("psw").value;

function check(){
    if(password.value === "123456789")
        alert("Submission Received");
    else 
        alert("Password Incorrect")
}
