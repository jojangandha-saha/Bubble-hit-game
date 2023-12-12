//select elements
const computerChoiceDisplay = document.querySelector('#computer-choice')
const userChoiceDisplay = document.querySelector('#user-choice')
const resultDisplay = document.querySelector('#result')
const possibleChoices = document.querySelectorAll('button')
let userChoice;
let computerChoice;
let result;
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click',(e)=>{
  userChoice= e.target.id
  userChoiceDisplay.innerHTML = userChoice
  generateComChoice()
  getResult()
}))

//random number generation for computer choice 
function generateComChoice(){
    const randomNumber = Math.floor(Math.random() * possibleChoices.length)
    

    if(randomNumber === 1){
        computerChoice = 'rock'
    }
    if(randomNumber === 2){
        computerChoice = 'paper'
    }
    if(randomNumber === 3){
        computerChoice = 'scissor'
    }
    computerChoiceDisplay.innerHTML = computerChoice


}

//compare and get the result
function getResult(){
    if(computerChoice === userChoice){
        result = "it's a tie"
    }
    if(computerChoice === 'rock' && userChoice === 'paper'){
        result = 'you win'
    }
    if(computerChoice === 'rock' && userChoice === 'scissor'){
        result = 'you lost'
    }
    if(computerChoice === 'paper' && userChoice === 'scissor'){
        result = 'you win'
    }
    if(computerChoice === 'paper' && userChoice === 'rock'){
        result = 'you lost'
    }
    if(computerChoice === 'scissor' && userChoice === 'rock'){
        result = 'you win'
    }
    if(computerChoice === 'scissor' && userChoice === 'paper'){
        result = 'you lost'
    }

    resultDisplay.innerHTML = result

}