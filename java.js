let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#resetbtn");
let newGameBtn = document.querySelector("#newGamebtn");
let msgcontainer = document.querySelector("#msgcontainer");
let msg = document.querySelector("#msg");
//playerX , playerO
 
let turnO = true;

const winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
]; 

const resetGame = () => {
    turnO = true;
    enableboxes();
    msg.innerText = ""; 
    msgcontainer.classList.add("hide");
    // addd chat gpt 
    newGameBtn.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener ("click",() => {
        if (turnO) { // palyer O
            box.innerText = "O";
            box.classList.add("o-color");
            turnO = false;
        } else {// layer x
            box.innerText = "X";
            box.classList.add("x-color")
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const disableBoxes = () => {
    for(let box of boxes ) {
        box.disabled = true;
    };
};

const enableboxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";  
        box.classList.remove("o-box");
        box.classList.remove("o-color");
    };
};

const showWinner = (winner) => {
     msg.innerText = `Congratulations, winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    // add chat gpt
      newGameBtn.classList.remove("hide"); 
    disableBoxes();
    // console.log("SHOW WINNER FUNCTION CALLED");

};
const checkWinner = () => {
    for(pattern of winPattern) {

    let pos1val =  boxes[pattern[0]].innerText;
    let pos2val =  boxes[pattern[1]].innerText;
    let pos3val =  boxes[pattern[2]].innerText;

    if (pos1val != "" && pos2val != "" && pos3val != "") {
        if(pos1val === pos2val && pos2val === pos3val) {
            showWinner(pos1val); 
            return;
        };
    };
    };
};

newGameBtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);

msgcontainer.classList.add("hide");
newGameBtn.classList.add("hide");

