let boxes= document.querySelectorAll(".box");
let reset = document.querySelector("#rest");
let newGame = document.querySelector("#New-btn");
let MSgcontanier = document.querySelector(".msg-contanier");
let msg = document.querySelector("#msg")

let turnO = true;

const winpatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];


const resetGame = () =>{
    turnO = true;
    enabledbtn();
}


const disabledbtn = () =>{
    for (let box of boxes) {
        box.disabled = true;
    }

}
const enabledbtn = () =>{
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
        MSgcontanier.classList.add("hide");
    }
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if(turnO){
            box.innerHTML = "<span style='color: blue;'>O</span>"; 
            turnO = false;
        }else{
            box.innerHTML = "<span style='color: red;'>X</span>"; 
            turnO = true;
        }
        box.disabled = true;
        
        checkWinner();
    });
});

const showWinner = (winner)=>{
  msg.innerText = `Congratulations, winner is ${winner}`
MSgcontanier.classList.remove("hide")
disabledbtn();
}

const checkWinner = () => {
    for (let pattern of winpatterns) {
     let pos1val = boxes[pattern[0]].innerText;   
     let pos2val = boxes[pattern[1]].innerText;   
     let pos3val = boxes[pattern[2]].innerText;   

     if (pos1val != "" &&pos2val != "" &&pos3val != "" ) {
        if (pos1val === pos2val && pos2val === pos3val) {
            console.log("winner",pos1val);
            showWinner(pos1val);
        }
     }
    }
}    

newGame.addEventListener("click",resetGame )
reset.addEventListener("click",resetGame )

