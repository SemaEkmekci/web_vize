function formKontrol(secim){
    
    console.log(secim);
    if(secim.value == "reg")
    {
        document.getElementsByClassName('login')[0].style.display = "none";
        document.getElementsByClassName("register")[0].style.display = "block";
    }
    
    if(secim.value == "log")
    {
        console.log(secim.value);
        document.getElementsByClassName('login')[0].style.display = "block";
        document.getElementsByClassName("register")[0].style.display = "none";
    }


}

function btn(btn){

  

    
    if(btn.value == "Click to Login")
    {
    
        if(document.getElementsByName("uname")[0].value == "" ||
         document.getElementsByName("lname")[0].value == "")
        {
            document.getElementById("messageLogin").innerHTML = "Login Başarısız";
            document.getElementById("messageLogin").style.color="Red";

        }
        else{
            document.getElementById("messageLogin").innerHTML = "Login Başarılı";
            document.getElementById("messageLogin").style.color="Green";
        }
    }
    else
    {
        
        if(document.getElementsByName("uname")[1].value == "" ||
         document.getElementsByName("email")[0].value == "")
        {
            document.getElementById("messageRegister").innerHTML = "Login Başarısız";
            document.getElementById("messageRegister").style.color="Red";

        }
        else{
            document.getElementById("messageRegister").innerHTML = "Login Başarılı";
            document.getElementById("messageRegister").style.color="Green";
        }
    }


}