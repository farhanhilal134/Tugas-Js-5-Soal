function startlog(){
    var username = document.getElementById("username").value; 
    var password = document.getElementById("password").value;

     if(username == "bintang" && password == "ayam")
     {
         window.open("kurs.html");
         return false
     }
     {
         alert("Login Gagal");
     }
    }