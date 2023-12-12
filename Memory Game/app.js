const cardArr = [
    {
        name : 'fries',
        img:  './img/fries.png'
    },
    {
        name : 'cheeseburger',
        img:  './img/cheeseburger.png'
    },

    {
        name : 'hotdog',
        img:  './img/hotdog.png'
    },
    {
        name : 'milkshake',
        img:  './img/milkshake.png'
    },
    {
        name : 'icecream',
        img:  './img/ice-cream.png'
    },
    {
        name : 'pizza',
        img:  './img/pizza.png'
    },
    {
        name : 'fries',
        img:  './img/fries.png'
    },
    {
        name : 'cheeseburger',
        img:  './img/cheeseburger.png'
    },

    {
        name : 'hotdog',
        img:  './img/hotdog.png'
    },
    {
        name : 'milkshake',
        img:  './img/milkshake.png'
    },
    {
        name : 'icecream',
        img:  './img/ice-cream.png'
    },
    {
        name : 'pizza',
        img:  './img/pizza.png'
    }
]

//sort array randomly, compare two values
//random retuens 0 to 1
//**shuffling arr arandomly */ */
cardArr.sort(()=> 0.5-Math.random())
// console.log(cardArr)

//create the board
 const gridDisplay = document.querySelector('#grid')
const cardsChosen = []

 function createBoard(){
    //for each item create element
    for(let i=0; i<cardArr.length;i++){
       const card =  document.createElement('img')
       card.setAttribute('src','./img/blank.png')
       card.setAttribute('data-id',i)
       card.addEventListener('click',flipCard)//passing callback
       gridDisplay.append(card)
    }
 }
 createBoard()

 function checkMath(){
    document.querySelectorAll('img')
    console.log("check for match")
   if(cardsChosen[0] == cardsChosen[1]){
    alert('you found a match')

   }
 }
 function  flipCard(){
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArr[cardId].name)
    // console.log('clicked', cardId)
    // console.log(cardsChosen)
    this.setAttribute('src',cardArr[cardId].img)
    if(cardsChosen.length === 2){
        setTimeout(checkMath,500)
    }
 }