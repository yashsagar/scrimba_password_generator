const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let btnPassword = document.querySelector("#btn")
let password1 = document.querySelector(".password1")
let password2 = document.querySelector(".password2")

// console.log(characters.length)
function passwordGenerator() {
    let passwordIndex = Math.floor(Math.random() * 91)
    return passwordIndex
}

btnPassword.addEventListener("click", function() {
    password1.textContent = ""
    password2.textContent = ""
    for (let i = 0; i < 15; i++ ) {
        password1.textContent += characters[passwordGenerator()]
        password2.textContent += characters[passwordGenerator()]
    }
})


