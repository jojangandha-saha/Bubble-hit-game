/*
EVENT BUBBLING- BUBBLE GAME
*/
//Math.floor(Math.random()*10) -> b/w 0-1, 
let score = 0;
let timer = 60;
let highestScore = 0;
var randHit;
/* EVENT BUBBLING - where click -> that particular element will raise event
if can't find listener , in event element's parent try to find listener, if there also 
can't find listener then event's parent's parent's parent listener will
*/

function increaseScore(){
    score  += 10;
    let scoreVal = document.querySelector(".elem #score")
    scoreVal.textContent = score;
}
function makeBubble(){
    let clutter = "";
    for(let i=1; i<=119;i++){
        var rn =  Math.floor(Math.random()*10);
        clutter += `<div class="bubble">${rn}</div>`
    }
    
    document.querySelector(".panel-bottom").innerHTML = clutter;   
}

let timerDiv = document.querySelector(".elem #timer");

function runTimer(){
 let timeInterval = setInterval(function(){
    if(timer >0){
        timer--;
        timerDiv.textContent = timer;
    }else{
        clearInterval(timeInterval);
        let gameGround =  document.querySelector(".panel-bottom")
        gameGround.innerHTML = "";
        gameGround.innerHTML = `<h1>GAME OVER</h1>`
    }
 },1000)
}

function getNewHit(){
 let hit = document.querySelector(".elem #hit")
randHit = Math.floor(Math.random()*10);

hit.textContent = randHit;
}

runTimer();
//increaseScore(); - increase value when hit happens
makeBubble();
missVals();
//event bubbling
document.querySelector(".panel-bottom")
.addEventListener('click', function(dets){
    if(dets.target.textContent === hit.textContent){
        increaseScore();
         makeBubble();
        getNewHit();
        
    }
})
let count = 0;
function missVals(){
    document.querySelector(".panel-bottom")
    .addEventListener('click', function(dets){
        if(dets.target.textContent != hit.textContent){
            count++;
            document.querySelector(".elem #miss").textContent = count;
            makeBubble();
            getNewHit();
        }
    })
}

