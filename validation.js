function validate() {
		if(document.myForm.fullname.value == "")
			{
			alert("Please provide your full name!"); 
			document.myForm.fullname.focus();
			return false;
			}
		if(document.myForm.email.value == "")
		{
			alert("Please provide your Email address!" ); 
			document.myForm.email.focus();
			return false;
		}
		var emailID=document.myForm.email.value; 
		atpos = emailID.indexOf("@");
		dotpos = emailID.lastIndexOf(".");
		if (atpos < 1 || (dotpos - atpos < 2 ))
		{
			alert("Please provide correct email address!") 
			document.myForm.email.focus();
			return false;
		}
		if(document.myForm.subject.value == "")
			{
			alert("Please enter the subject of your message!"); 
			document.myForm.subject.focus();
			return false;
			}
		if(document.myForm.message.value == "")
			{
			alert("Please enter your message!"); 
			document.myForm.message.focus();
			return false;
			}
		alert("Your message has been successfully sent!"); 
		return(true);
}

function validateDonation() {
    let name = document.getElementById("donor-name").value.trim();
    let email = document.getElementById("donor-email").value.trim();
	var date = document.getElementById("donation-date").value.trim();
    let amount = parseFloat(document.getElementById("donation-amount").value);
    let payment = document.getElementById("payment-method").value;

    if (name === "") {
        alert("Please enter your full name!");
        document.getElementById("donor-name").focus();
        return false;
    }

    if (email === "") {
        alert("Please enter your email address!");
        document.getElementById("donor-email").focus();
        return false;
    }

    let atpos = email.indexOf("@");
    let dotpos = email.lastIndexOf(".");
    if (atpos < 1 || dotpos - atpos < 2) {
        alert("Please provide a correct email address!");
        document.getElementById("donor-email").focus();
        return false;
    }
	if (date === "") {
			alert("Please select a date.");
			return false;
		}
    if (isNaN(amount) || amount < 5) {
        alert("Please enter a valid donation amount (minimum RM5)!");
        document.getElementById("donation-amount").focus();
        return false;
    }

    if (!payment || payment === "") {
        alert("Please select a payment method!");
        document.getElementById("payment-method").focus();
        return false;
    }

    alert("Thank you for your generous donation!");
    return true;
}