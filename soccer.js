
    const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
    "/"];
let generate = document.querySelector("#generate")
let pass1 = document.querySelector("#pass1")
let pass2 = document.querySelector("#pass2")
function password() {
    charactersCount = 15;
    let pass = "";
    let passs = "";
    for (let i = 0; i < charactersCount; i++) {
        pass += characters[Math.floor(Math.random() * characters.length)]
        passs += characters[Math.floor(Math.random() * characters.length)]
    }
    pass1.textContent = pass
    pass2.textContent = passs
}

