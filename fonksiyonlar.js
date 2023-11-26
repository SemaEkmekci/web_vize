window.onload = function(){
    document.getElementById("formTipiLogin").addEventListener('change', function(){
        document.getElementById("loginDiv").style.display = "block";
        document.getElementById("registerDiv").style.display = "none";
        document.getElementById("bilgiBolumu").innerHTML = '';
        document.getElementById("bilgiBolumu").style.color = "#000";
        document.getElementById("formTipiRegister").checked = false;
    });
    document.getElementById("formTipiRegister").addEventListener('change', function(){
        document.getElementById("loginDiv").style.display = "none";
        document.getElementById("registerDiv").style.display = "block";
        document.getElementById("bilgiBolumu").innerHTML = '';
        document.getElementById("bilgiBolumu").style.color = "#000";
        document.getElementById("formTipiLogin").checked = false;
    });
}

function formKontrol(){
    if(document.getElementById("formTipiLogin").checked == true){
        var username = document.getElementById("loginUsername").value;
        var password = document.getElementById("loginPassword").value;
        if(username == "" || password == ""){
            document.getElementById("bilgiBolumu").innerHTML = "Login islemi basarisiz!";
            document.getElementById("bilgiBolumu").style.color = "red";
        }else{
            document.getElementById("bilgiBolumu").style.color = "green";
            document.getElementById("bilgiBolumu").innerHTML = "Giris Basarili!";
        }
    }else{
        var name = document.getElementById("registerName").value;
        var mail = document.getElementById("registerMail").value;
        if(name == "" || mail == ""){
            document.getElementById("bilgiBolumu").style.color = "red";
            document.getElementById("bilgiBolumu").innerHTML = "Register islemi basarisiz!";
        }else{
            document.getElementById("bilgiBolumu").style.color = "green";
            document.getElementById("bilgiBolumu").innerHTML = "Basariyla Kayit Olundu!";
        }
    }
}