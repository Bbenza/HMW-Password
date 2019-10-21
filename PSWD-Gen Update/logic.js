
var characters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
var password_length = 8;
var randomPassword = '';

function getPassword() {
   var randomPassword = '';
   for (var i=0; i<password_length; i++) {
      var random = Math.floor(Math.random() * characters.length);
      randomPassword += characters.substring(random,random +1);
   }
   document.getElementById("Password").innerHTML=randomPassword;
}

function copyPassword() {
   var copyText = document.getElementById("Password");
   copyText.select();
   copyText.setSelectionRange(0, 99999)
   document.execCommand("copy");
}