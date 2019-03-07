const cards = document.querySelectorAll('.carte');

let hasFlippedCard = false;
let firstCard, secondCard;
function flipCard() {
  this.classList.add('flip');

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;
     return;
   }

   secondCard = this;
   hasFlippedCard = false;

   checkForMatch();
 }

 function checkForMatch() {
   if (firstCard.dataset.framework === secondCard.dataset.framework) {
        disableCards();
    }
    else { 
        unflipCards ();
    }



 }

 function disableCards() {
    setTimeout(() => {
        firstCard.classList.add('gone');
        secondCard.classList.add('gone');
    }, 850);

    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    
 }

 function unflipCards() {
   setTimeout(() => {
     firstCard.classList.remove('flip');
     secondCard.classList.remove('flip');
   }, 850);
 }

 (function shuffle() {
   cards.forEach(card => {
     let ramdomPos = Math.floor(Math.random() * 12);
     card.style.order = ramdomPos;
   });
 })();

  cards.forEach(card => card.addEventListener('click', flipCard));


function Endgame () {
if (all.cards = disableCards) {
prompt('You Win')
}

}
  

  
    
