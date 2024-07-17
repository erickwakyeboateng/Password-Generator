const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+-={}[]|\:;\"'<>,.?/~";

const lenghtEl = document.getElementById("length");
const lowercaseEl = document.getElementById("lowercase");
const uppercaseEl = document.getElementById("uppercase");
const symbolsEl = document.getElementById("symbols");
const numbersEl = document.getElementById("numbers");
const generatebtn = document.getElementById("generate");
const passwordEl = document.getElementById("password");


generatebtn.addEventListener("click", function(){

    const length = lenghtEl.value;
    let characters = "";
    let password = "";


    if (lowercaseEl.checked){
        characters += lowerCaseLetters;
    }

    if (uppercaseEl.checked){
        characters += upperCaseLetters;
    }

    if (numbersEl.checked){
        characters += numbersEl;
    }

    if (symbolsEl.checked){
        characters += symbols;
    }

    for (let i = 0; i  < length; i++){
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    passwordEl.value = password;

})