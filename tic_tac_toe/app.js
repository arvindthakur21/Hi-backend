let boxs = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset_btn");
let newgamebtn = document.querySelector("#new_btn");
let msgcontainer = document.querySelector(".msg-container");
letmsg = document.querySelector("#msg");
let turnO = true;
//playerx , player y 

const winpattern =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],

];

const resetgame =() => {
    let turnO = true;
    anableboxs();
msgcontainer.classList.add("hide");

}

boxs.forEach((box) => {
    box.addEventListener("click",() =>{
        console.log("box was clicked");
        if(turnO){
            box.innerText ="O";
            turnO = false;
        }else{
            box.innerText ="X"; 
            turnO = true;
        }
        box.disabled = true;

        checkwinner();
    });
});

const disableboxs =() =>{
    for(let box of boxs){
        box.disabled = true;
    }
};

const anableboxs =() =>{
    for(let box of boxs){
        box.disabled = false;
        box.innerText ="";
    }
};

const showwinner  = (winner) => {
    msg.innerText = `Congratulation Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableboxs();
}
const checkwinner =() => {
    for(pattern of winpattern){
     let posval1 = boxs[pattern[0]].innerText;
     let posval2 = boxs[pattern[1]].innerText;
     let posval3 = boxs[pattern[2]].innerText;
     if(posval1 != "" && posval2 != "" && posval3 != ""){
        if(posval1 === posval2 && posval2 === posval3){
            console.log("winner",posval1);

            showwinner(posval1);
        }
     }
    }
};

newgamebtn.addEventListener("click", resetgame);
resetbtn.addEventListener("click", resetgame);
