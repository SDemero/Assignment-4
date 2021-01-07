function check(){
	let password = document.getElementById("psw").value;
    if(password.value !== "123456789")
        alert("Submission Incorrect");
    else 
        alert("Password correct")
}
