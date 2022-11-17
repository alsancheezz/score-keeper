const p1Button = document.querySelector('#p1Button')
const p2Button = document.querySelector('#p2Button')
const p1 = document.querySelector('.p1')
const p2 = document.querySelector('.p2')
const res = document.querySelector('#reset')
const numRounds = document.querySelector('#rounds')
const btn1 = document.querySelector("#p1Button")
const btn2 = document.querySelector("#p2Button")
const score = document.querySelector('.scoreHistory')

btn1.disabled = true;
btn2.disabled = true;

let p1Score = 0;
let p2Score = 0;
let winScore = 0;
let isGameOver = false;
let isTiebreaker = false;
let tieBreakerScore = 0;


numRounds.addEventListener('change', () =>{
  winScore=parseInt((numRounds.value))
  tieBreakerScore = winScore - 1;
  btn1.disabled = false;
  btn2.disabled = false;
  reset();
  const history = document.createElement('li')
  history.append(`Round start. Target score is: ${numRounds.value}`)
  score.append(history)
})

p1Button.addEventListener('click', ()=>{
 if (isGameOver) return;
 p1Score += 1;
 
if (isTiebreaker) {
   const diff = p1Score-p2Score

    if(diff===2){
      isGameOver = true;
      p1.classList.add('winner')
      p2.classList.add('loser')
    }
    if (p1Score===p2Score) {
      const history = document.createElement('li')
      history.prepend(`Tiebreaker!! First to lead 2 points win`)
      score.prepend(history)
    }

 } else {
    isTiebreaker = tieBreakerScore === p1Score && tieBreakerScore === p2Score;

      if (p1Score === winScore) {
    isGameOver = true;
    p1.classList.add('winner')
    p2.classList.add('loser')
 } 

}
 p1.textContent = p1Score;
 const history = document.createElement('li')
 history.prepend(`Player 1 wins round ${(p1Score+p2Score)}!`)
 score.prepend(history)
 }

)

p2Button.addEventListener('click', ()=>{
  if (isGameOver) return;
  p2Score += 1;
 
 if (isTiebreaker) {
    const diff = p2Score-p1Score
 
     if(diff===2){
      isGameOver = true;
      p2.classList.add('winner')
      p1.classList.add('loser')
     }
     if (p2Score===p1Score) {
      const history = document.createElement('li')
      history.prepend(`Tiebreaker!! First to lead 2 points win`)
      score.prepend(history)
     }
   
  } else {
     isTiebreaker = tieBreakerScore === p1Score && tieBreakerScore === p2Score;
 
       if (p2Score === winScore) {
     isGameOver = true;
     p2.classList.add('winner')
     p1.classList.add('loser')
  } 

 }
  p2.textContent = p2Score;
  const history = document.createElement('li')
  history.prepend(`Player 2 wins round ${(p1Score+p2Score)}!`)
  score.prepend(history)
  }
 
 )


function deleteScore() {
  var e = document.querySelector("ul");
  
  var child = e.lastElementChild; 
  while (child) {
      e.removeChild(child);
      child = e.lastElementChild;
  }
}

function reset() {
  isGameOver = false;
  isTiebreaker = false;
  p1Score = 0;
  p2Score = 0;
  diff = 0;
  p1.textContent = 0;
  p2.textContent = 0;
  p1.classList.remove('winner', 'loser')
  p2.classList.remove('loser', 'winner')
  deleteScore()
}

res.addEventListener('click', reset)
