const length = 12;
const passwordBox = document.getElementById('password');

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789"; 
const symbol = "#@&%*()$/*-+@_?";

const allChars = upperCase + lowerCase + number + symbol;



function createPassword() {
    let password = "";
    password = password + upperCase[Math.floor(Math.random() * upperCase.length)];
    password = password + lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password = password + number[Math.floor(Math.random() * number.length)];
    password = password + symbol[Math.floor(Math.random() * symbol.length)];

    console.log("st:" + password.length);

    while (length > password.length){
      
        password = password + allChars[Math.floor(Math.random() * allChars.length)]; 
      
    }

    passwordBox.value = password;
}


createPassword();
