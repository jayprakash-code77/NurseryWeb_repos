let signinbtn = document.getElementById("signinbtn");
        let signupbtn = document.getElementById("signupbtn");
        let namefield = document.getElementById("namefield");
        let title = document.getElementById("title");

        signinbtn.onclick = function(){
            namefield.style.maxHeight = "0";
            title.innerHTML = "Sign In";
            signupbtn.classList.add("disable");
            signinbtn.classList.remove("disable");
        }

        signupbtn.onclick = function(){
            namefield.style.maxHeight = "65px";
            title.innerHTML = "Sign Up";
            signinbtn.classList.add("disable");
            signupbtn.classList.remove("disable");
        }


        let eyeIcon = document.getElementById("eyeicon");
        let password = document.getElementById("password");

        eyeIcon.onclick = function(){
            if(password.type == "password"){
                password.type = "text";
                eyeIcon.src = "jsimage/view.png";
            }else{
                password.type = "password";
                eyeIcon.src = "jsimage/eye.png";
            }
        }
