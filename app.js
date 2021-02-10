
let options = ["rock" , "paper" , "scissors"]


function play(playerChoice){

console.log(`You played ${playerChoice}`);

let botChoice = options[Math.floor(Math.random() * 3)]

if (playerChoice=="rock") {

    if(botChoice=="rock"){document.getElementById("text-change").textContent = "You TIED!";}
    else if(botChoice=="paper"){document.getElementById("text-change").textContent = "You're a LOSER! Super Intelligent AI is laughing at you!";}
    else{document.getElementById("text-change").textContent = "You're a WINNER! What a productive way you've spent your time!";}

} else if (playerChoice=="scissors") {

    if(botChoice=="rock"){document.getElementById("text-change").textContent = "You're a LOSER! Super Intelligent AI is laughing at you!";}
    else if(botChoice=="paper"){document.getElementById("text-change").textContent = "You're a WINNER! What a productive way you've spent your time!";}
    else{document.getElementById("text-change").textContent = "You TIED!";}

} else {
    if(botChoice=="rock"){document.getElementById("text-change").textContent = "You're a WINNER! What a productive way you've spent your time!";}
    else if(botChoice=="paper"){document.getElementById("text-change").textContent = "You TIED!";}
    else{document.getElementById("text-change").textContent = "You're a LOSER! Super Intelligent AI is laughing at you!";}
}
}





