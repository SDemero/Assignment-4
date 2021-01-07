
let formselect = document.querySelector("form");
formselect.addEventListener("submit", check);

function check(){
	let password = document.getElementById("psw").value;
	if(password.value !== "123456789")
        	alert("Submission Incorrect");
   	else 
       		alert("Password correct");
}
