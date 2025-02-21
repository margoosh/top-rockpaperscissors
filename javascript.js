function getHumanChoice(){
    let humanChoice = prompt(`Please make your choice: Rock, Paper or Scissors `);
    
    console.log(humanChoice);
    return humanChoice;
};

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);

    switch (computerChoice) {
        case 0:
            return 'Rock';
        case 1: 
            return 'Paper';
        case 2: 
            return 'Scissors';
    } 
};

function playRound(humanChoice, computerChoice) {
    
    let humanScore = 0;
    let computerScore = 0;

    for(let round = 1; round <= 5; round++){
        console.log(`Round: ${round}`);
        console.log(`Your choice: ${humanChoice}`);
        console.log(`Computer Chose: ${computerChoice}`);

        if (humanChoice.toLowerCase() === 'rock'){

            switch (computerChoice.toLowerCase()) {
                case 'rock':
                    return console.log(`It's a tie!`);
                case 'paper':
                    computerScore++;
                    console.log(computerScore);
                    return console.log(`You lose! Paper beats Rock`);
                case 'scissors':
                    humanScore++;
                    console.log(humanScore);
                    return console.log(`You won! Scissors beats Rock`);
            }

        } else if (humanChoice.toLowerCase() === 'paper') {

            switch (computerChoice.toLowerCase()) {
                case 'paper':
                    return console.log(`It's a tie!`);
                case 'rock':
                    computerScore++;
                    console.log(humanScore);
                    return console.log(`You lose! Paper beats Rock`);
                case 'scissors':
                    humanScore++;
                    console.log(computerScore);
                    return console.log(`You won! Scissors beats Rock`);
            }

        } else if(humanChoice.toLowerCase() === 'scissors'){
            switch (computerChoice.toLowerCase()) {
                case 'scissors':
                    return console.log(`It's a tie!`);
                case 'paper':
                    humanScore++;
                    console.log(humanScore);
                    return console.log(`You lose! Paper beats Rock`);
                case 'rock':
                    computerScore++;
                    console.log(computerScore);
                    return console.log(`You lose! Scissors beats Rock`);
            }
        }else {
            console.log('whooooa slow down');
        }
    }

    // console.log(`Your score: ${humanScore}`);
    // console.log(`Computer score: ${computerScore}`);
    
};

console.log(`Welcome to Rock Paper Scissors!`);

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

