// ROCK PAPER SCISSSOR

let userscore = 0;
let comscore =0;
const choice = document.querySelectorAll(".choice");

const genComputerChoice =() =>{
const option =["rock","paper","sissors"]
const randindex=Math.floor(Math.random() * 3);
return option[randindex];
}


const playGame =(userchoice) =>{
console.log("user choice =",userchoice);
const comchoice=genComputerChoice();
console.log("comp choice =",comchoice);
}
choice.forEach((choice) =>{
    console.log(choice);
    choice.addEventListener("click",() =>{
        const userchoice =choice.getAttribute("id")
console.log("choice was clicked", choice);
playGame(userchoice);
    });
});