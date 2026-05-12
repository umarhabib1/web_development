let userScore = 0;
let compScore = 0;
let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");
let msg = document.querySelector("#msg");

const genCompChoice = ()=>{
    const options =["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}

const showWinner = (userWin,userChoice, compChoice) =>{
    if(userWin){
    userScore++;
    userScorePara.innerText =userScore;
    msg.innerText =  `you win! your ${userChoice} beats computer ${compChoice}`;
    msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `you lose! computer ${compChoice} beats your ${userChoice}` 
        msg.style.backgroundColor = "red";
    }
}
    

const choices = document.querySelectorAll(".choice");
const drawGame = () =>{
    console.log("Game was a draw")
    msg.innerText = "Game was draw";
    msg.style.backgroundColor = "orange";
}

const playGame = (userChoice) => {
    console.log("userChoice =", userChoice);

    const compChoice = genCompChoice();
    console.log("computerChoice =", compChoice);

    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;

        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else if (userChoice === "scissors") {
            userWin = compChoice === "rock" ? false : true;
        }

        showWinner(userWin, userChoice,compChoice); 
    }
};


choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
    playGame(userChoice);
    });
});