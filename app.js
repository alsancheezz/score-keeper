const p1Button = document.querySelector('#p1Button')
const p2Button = document.querySelector('#p2Button')
const p1 = document.querySelector('.p1')
const p2 = document.querySelector('.p2')
const res = document.querySelector('#reset')
const numRounds = document.querySelector('#rounds')


let p1Score = 0;
let p2Score = 0;
let winScore = 0;
let isGameOver = false;

numRounds.addEventListener('change', () =>{
  winScore=parseInt((numRounds.value))
  reset();
})

p1Button.addEventListener('click', ()=>{
 if (!isGameOver) {
  p1Score += 1;
  if (p1Score === winScore) {
     isGameOver = true;
     p1.classList.add('winner')
     p2.classList.add('loser')
  } 
  p1.textContent = p1Score; 
 }

})

p2Button.addEventListener('click', ()=>{
  if (!isGameOver) {
    p2Score += 1;
    if (p2Score === winScore) {
       isGameOver = true;
       p2.classList.add('winner')
       p1.classList.add('loser')
    } 
    p2.textContent = p2Score; 
   }
  
})


function reset() {
  isGameOver = false;
  p1Score = 0;
  p2Score = 0;
  p1.textContent = 0;
  p2.textContent = 0;
  p1.classList.remove('winner', 'loser')
  p2.classList.remove('loser', 'winner')

}


res.addEventListener('click', reset)
