let boxes=document.querySelectorAll('.box');
let resetButton=document.querySelector('#reset');

let turnO=true;
const win=[[0,1,2],
           [0,3,6],
            [0,4,8],
        [1,4,7],
    [2,5,8],
[2,4,6],
[3,4,5],
[6,7,8]];

boxes.forEach(
    (box)=>{
        box.addEventListener('click',()=>{
            box.innerText=(turnO===true)?"O":"X";
            box.disabled="true";
            (turnO===true)?turnO=false:turnO=true;
            setTimeout(checkWinner,500);
            setTimeout(checkTie,200);
        });
    }
);

const checkWinner=()=>{
    for(pattern of win){
        if(boxes[pattern[0]].innerText!=""&&boxes[pattern[0]].innerText!=""&&boxes[pattern[0]].innerText!=""&&boxes[pattern[0]].innerText==boxes[pattern[1]].innerText&&boxes[pattern[1]].innerText==boxes[pattern[2]].innerText){
            window.alert(`Winner is ${boxes[pattern[0]].innerText}`);
            newGame();
        }
    }
}
const checkTie=()=>{
    let b=0;
    for(box of boxes){
        if(box.innerText=="")b=1;
    }
    if(b==0){
        window.alert("Game tie");
        newGame();
    }
}
const newGame=()=>{
    for(box of boxes){
        box.innerText="";
        box.disabled=false;
    }
}
resetButton.addEventListener('click',newGame);