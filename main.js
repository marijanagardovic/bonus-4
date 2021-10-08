//feature tabs
function openTab(evt, tabName) {
	var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
	  tabcontent[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
	  tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
	document.getElementById(tabName).style.display = "block";
	evt.currentTarget.className += " active";
}

  // email validation

const emailRequest = document.querySelector(".request");

function submitEmail(e){
    const email = document.querySelector(".email-1");
    const message = document.querySelector(".result");
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
 
    if(email.value == ''){
        message.innerText = "Make sure input field is not empty";
    } else if(!emailRegex.test(email.value)){
        message.innerText = "Oops! Please check your email!";
    } else if(emailRegex.test(email.value)){
        message.innerText = "";
    }

    e.preventDeafult();
};

emailRequest.addEventListener("click", submitEmail);