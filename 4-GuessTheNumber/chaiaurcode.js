let randomNum=Math.floor(Math.random()*100+1)

const guessField=document.querySelector('#guessField')
const guessSubmit=document.querySelector('#subt')
const guesses=document.querySelector('.guesses')
const remaining=document.querySelector('.lastResult')
const lowOrHi=document.querySelector('.lowOrHi')

const startOver=document.querySelector('.resultParas')

let p=document.createElement('p') // after completion of game show the restart option

let playGame=true
// let prevGuesses=[]

let timesGuess=1
//console.log("Before if play game ")
// if(playGame){
    //console.log("after if play game ")

    guessSubmit.addEventListener('click',(e)=>{
        if(playGame){
        e.preventDefault()
        const val=parseInt(guessField.value)
        validateGuess(val)
        }
        else{
            alert('Please restart the game')
        }
    })
// }
// else{   // line never run when i not restart the game 
//     alert('Please restart the game ')
// }

function validateGuess(guess){
    if(isNaN(guess))
        alert('Please enter a valid number')
    else if(guess<1 || guess >100)
        alert('Please enter a number in range 1 - 100')
    else{
        //// prevGuesses.push(guess)
        // if(timesGuess==11){
        //     displayGuess(guess)
        //     displayMessage(`Game over, random number was ${randomNum}`)
        //     endGame()
        // }
        // else{
        //     displayGuess(guess)
        //     checkGuess(guess)
        // }
        checkGuess(guess)

    }
}

function checkGuess(guess){
    if(timesGuess<=9){
        displayGuess(guess)

        if (guess === randomNum) {
            displayMessage(`You guessed it right`);
            endGame();
        } else if (guess < randomNum) {
            displayMessage(`Number is TOOO low`);
        } else if (guess > randomNum) {
            displayMessage(`Number is TOOO High`);
        }
    }
    else{
        if (guess === randomNum) {
            displayMessage(`You guessed it right`);
            endGame();
          }
          else{
            displayMessage(`Game over, random number was ${randomNum}`)
            endGame()
          }
    }
}

function displayGuess(guess){ // internal processing after number guessing and its validation and checking
    guessField.value=''
    guesses.innerHTML += `${guess} , `
    timesGuess++
    remaining.innerText=`${11-timesGuess}`

}

function displayMessage(message){
    lowOrHi.innerHTML=`<h2>${message}</h2>`
}

function endGame(){
    guessField.value = '';
    //guessField.setAttribute('disabled', '');// do not accept the input from the users 
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function (e) {
      randomNum = parseInt(Math.random() * 100 + 1);
    //   prevGuess = [];
      timesGuess = 1;
      guesses.innerHTML = '';
      remaining.innerHTML = `${11 - timesGuess} `;
    //   guessField.removeAttribute('disabled');
      startOver.removeChild(p);
    lowOrHi.innerHTML=''
      playGame = true;
    });
  }



  /* According to previous if(playGame ) condition:
  After the event listener is added, it stays attached to the button. The code inside the if(playGame) block is not run again unless the script is reloaded. However, the event listener itself will be triggered every time the button is clicked, regardless of the playGame variable's value at that time. */