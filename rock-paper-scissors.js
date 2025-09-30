let buttons = document.querySelectorAll(".button");
let firstpart = document.querySelector(".firstpart");
let secondpart = document.querySelector(".secondpart");
let wintitle = document.querySelector(".wintitle");
let player = document.querySelector(".player");
let computer = document.querySelector(".computer");
let wintext = document.querySelector(".wintext");
let playagain = document.querySelector(".playagain");
let win = document.querySelector(".win");
let lost = document.querySelector(".lost");
let draw = document.querySelector(".draw");

let cidx = 0;
let wincount = 0;
let lostcount = 0;
let drawcount = 0;

buttons.forEach((button,idx)=>{
    button.addEventListener("click",()=>{
        firstpart.classList.add("hide");
        secondpart.classList.remove("hide");
        if(idx === 0){
            player.classList.add("rock1");
        }
        else if(idx === 1){
            player.classList.add("paper1");
        }
        else{
            player.classList.add("scissors1");
        }
        computerPick();
        winner(idx,cidx);
    });
});
const computerPick = ()=>{
    let pick = Math.floor(Math.random() * 10);
    if( pick >= 0 && pick <=2){
        computer.classList.add("rock2");
        cidx = 0;
    }
    else if( pick >=3 && pick <=5){
        computer.classList.add("paper2");
        cidx = 1;
    }
    else if( pick >=6 && pick <=9){
        computer.classList.add("scissors2");
        cidx = 2;
    }
}
async function winner(idx,cidx){
    await delay(1200);
    if(idx == cidx){
        wintext.innerText = "DRAW";
        drawcount++;
    }
    else if((idx == 0 && cidx == 2) || (idx == 1 && cidx == 0) || (idx == 2 && cidx == 1)){
        wintext.innerText = "WIN";
        wincount++;
    }
    else{
        wintext.innerText = "LOST";
        lostcount++;
    }
    wintitle.classList.remove("hide");
    win.innerHTML = `Win : ${wincount}`;
    lost.innerHTML = `Lost : ${lostcount}`;
    draw.innerHTML = `Draw : ${drawcount}`;
}
function delay(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}
const again = ()=>{
    firstpart.classList.remove("hide");
    secondpart.classList.add("hide");
    wintitle.classList.add("hide");
    player.classList.remove("paper1","rock1","scissors1");
    computer.classList.remove("paper2","rock2","scissors2")
}
playagain.addEventListener("click",again);