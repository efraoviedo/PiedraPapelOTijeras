const EMPATE = 0;
const GANASTE = 1;
const PERDISTE = 2;

const Rock = 'rock';
const Paper = 'paper';
const Scissors = 'scissors';


const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');
const startGame = document.getElementById('start-game');
const userImg = document.getElementById('user-img');
const machineImg = document.getElementById('machine-img');

rockBtn.addEventListener('click', () => {
      show(Rock);
});

paperBtn.addEventListener('click', () => {
     show(Paper);

});
scissorsBtn.addEventListener('click', () => {
      show(Scissors);

});

function show (playerSelection) {
      const computerSelection = calcComputerSelection();
      const result = calcResult(playerSelection,computerSelection);
      userImg.src = 'img '+playerSelection+'.png';     
      machineImg.src = 'img '+computerSelection+'.png';

      switch(result){
            case EMPATE:
                  startGame.innerHTML = 'ES UN EMPATE !';
                  break;
            case GANASTE:
                  startGame.innerHTML = 'GANASTE !';
            break;
            case PERDISTE:
                  startGame.innerHTML = 'PERDISTE !';
            break;
      }
}

function calcComputerSelection() {
      const number = Math.floor(Math.random() * 3);
      switch (number) {
            case 0:
                  return Rock;
                  case 1:
                        return Paper;
                        case 2:
                              return Scissors;
      }
}

function calcResult(playerSelection,computerSelection) {   
    if(playerSelection === computerSelection){
      return EMPATE;

    }else if(playerSelection === Rock){
       if(computerSelection === Paper)
       return PERDISTE;
       if(computerSelection === Scissors)
       return GANASTE;           
      
    }else if(playerSelection === Paper){ 
          if(computerSelection === Scissors)
          return PERDISTE;
          if(computerSelection ===  Rock)
          return GANASTE;         
          
    }else if(playerSelection === Scissors){ 
          if(computerSelection === Rock)
          return PERDISTE;
          if(computerSelection === Paper)
          return GANASTE;
    }
}