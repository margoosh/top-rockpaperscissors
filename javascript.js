let humanScore = 0;
let computerScore = 0;

function getHumanChoice(){
    let humanChoice = prompt(`Please make your choice: Rock, Paper or Scissors `);
    
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

function playRound() {

    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();

    console.log(`You chose: ${humanChoice}`);
    console.log(`Computer chose: ${computerChoice}`);
    
        if (humanChoice.toLowerCase() === 'rock'){

            switch (computerChoice.toLowerCase()) {

                case 'rock':
                    return console.log(`It's a tie!`);
                case 'paper':
                    console.log(`You lose! Paper beats Rock`)
                    return computerScore++;
                case 'scissors':
                    console.log(`You won! Rock beats Scissors`);
                    return humanScore++;

            }

        } else if (humanChoice.toLowerCase() === 'paper') {

            switch (computerChoice.toLowerCase()) {

                case 'paper':
                    return console.log(`It's a tie!`);
                case 'rock':
                    console.log(`You won! Paper beats Rock`);
                    return humanScore++;
                case 'scissors':
                    console.log(`You lose! Scissors beats Paper`);
                    return computerScore++; 

            }

        } else if(humanChoice.toLowerCase() === 'scissors'){

            switch (computerChoice.toLowerCase()) {

                case 'scissors':
                    return console.log(`It's a tie!`);
                case 'paper':
                    console.log(`You won! Scissors beats Paper`);
                    return humanScore++;
                case 'rock':
                    console.log(`You lose! Rock beats Scissors`);
                    return computerScore++;

            }

        }else {
            console.log('whooooa slow down');
        }

    // console.log(`Your score: ${humanScore}`);
    // console.log(`Computer score: ${computerScore}`);
    
};

function playGame(){

    
    for(let round = 1; round <= 5; round++){
        
        console.log(`Round: ${round}`);

        playRound();

        // console.log(`Computer score: ${computerScore}`);
        // console.log(`Your score: ${humanScore}`);

    }

    if (humanScore > computerScore){
        console.log(`End of Game! You:\n${humanScore} vs Computer: ${computerScore}`)
        console.log(`You Won!!`);
    }else {
        console.log(`End of Game!\nComputer: ${computerScore} vs You: ${humanScore}`);
        console.log(`Computer Won!!`);
    }
}
console.log(`Welcome to Rock Paper Scissors!`);

// const humanSelection = getHumanChoice();
// const computerSelection = getComputerChoice();

playGame();