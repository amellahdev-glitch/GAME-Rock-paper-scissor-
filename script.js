// Computer move 

function pickComputerMove() {
    const randomNumber = Math.random();
    let computerMove = '';
    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'Rock';
    }
    else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'Paper';
    }
    else if (randomNumber >= 2 / 3 && randomNumber <= 1) {
        computerMove = 'Scissors';
    }
    return computerMove;
}


// proccess the winner by the player move

const winsInput = document.querySelector('#winsCounter')
const losesInput = document.querySelector('#losesCounter')

function playGame(playerMove) {
    const computerMove = pickComputerMove();


    let result = '';

    if (playerMove === 'Scissors') {
        if (computerMove === 'Paper') {
            result = 'You win';
        }
        else if (computerMove === 'Scissors') {
            result = 'tie';
        }
        else if (computerMove === 'Rock') {
            result = 'You lose';
        }
    }

    else if (playerMove === 'Paper') {
        if (computerMove === 'Paper') {
            result = 'tie';
        }
        else if (computerMove === 'Scissors') {
            result = 'You lose';
        }
        else if (computerMove === 'Rock') {
            result = 'You win';
        }
    }

    else if (playerMove === 'Rock') {
        if (computerMove === 'Rock') {
            result = 'tie';
        }
        else if (computerMove === 'Paper') {
            result = 'You lose';
        }
        else if (computerMove === 'Scissors') {
            result = 'You win';
        }
    }

    alert(` you pick ${playerMove}. Computer pick ${computerMove}, ${result}`);

    // Wins and Loses Counter




    if (result === 'You win') {
        winsInput.value = Number(winsInput.value) + 1;
    } else if (result === 'You lose') {
        losesInput.value = Number(losesInput.value) + 1;
    }


}






