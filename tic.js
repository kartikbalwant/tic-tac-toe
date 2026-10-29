let allbox = document.querySelectorAll(".box");
let reset = document.querySelector(".Reset");
let turnO = true;

let winpatterns =[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

allbox.forEach((box) =>{
    box.addEventListener("click", () =>{
       if( turnO ){
           box.innerText = "O";
           turnO = false;
       }else{
           box.innerText = "X";
           turnO = true;
       }
       box.disabled = true;

       checkwinner();
    });
});

const checkwinner = () =>{
    for(let pattern of winpatterns){
        let pos1val = allbox[pattern[0]].innerText;
        let pos2val = allbox[pattern[1]].innerText;
        let pos3val = allbox[pattern[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val != "") { 
            if(pos1val == pos2val && pos2val == pos3val){
               console.log("winner");
               alert(`Winner is ${pos1val}`);

               resetgame();
            }
            }
               
    }
};


const resetgame = () => {
    allbox.forEach((box) =>{
        box.innerText= "";
        box.disabled = false;
    });
    turnO =true;
};

reset.addEventListener("click",() =>{
       allbox.forEach((box) =>{
         box.innerText= "";
    });
       
});