//Coded by Daniel Gingras on April 24th 2022

//Variables

let victory;
let win = 0;
let lose = 0;
let draw = 0;

//Minor Functions

function tally() {
    if (victory === 'You Lose!') {
        ++lose;
    } else if (victory === 'You Win!') {
        ++win;
    } else {
        ++draw;
    }
    alert('Wins: ' + win + '. Loses: ' + lose + '. Draws: ' + draw +'.')
}

function finalScore() {
    if (win > lose) {
   alert('You win the match with ' + win + ' wins, ' + lose + ' losses, and ' + draw + ' draws. Congratulations!')
} else if (win < lose) {
   alert('You lost the match with ' + win + ' wins, ' + lose + ' losses, and ' + draw + ' draws.')
} else {
    alert('The match is a draw. You had ' + win + ' wins, ' + lose + ' losses, and ' + draw + ' draws.')
}
}

function reset() {
    win = 0;
    lose = 0;
    draw = 0;
}

function computerPlay() {
    const rand = Math.random();
    if (rand <= .3333333333) {
        computerSelection = 'Rock!';
    } else if (rand > .3333333333 && rand <= .6666666666) {
        computerSelection = 'Paper!';
    } else if (rand > .6666666666) {
        computerSelection = 'Scissors!';
    } else {
        computerSelection = 'Error!';
    }
    return computerSelection
}

//Game Function

function singleRound(playerSelection, computerSelection) {
    let answer = prompt('Choose Rock, Paper, or Scissors:')
    playerSelection = answer.toLowerCase()

    const rand = Math.random();

    if (rand <= .3333333333) {
        computerSelection = 'Rock!';
    } else if (rand > .3333333333 && rand <= .6666666666) {
        computerSelection = 'Paper!';
    } else if (rand > .6666666666) {
        computerSelection = 'Scissors!';
    } else {
        computerSelection = 'Error!';
    }

    if (computerSelection == 'Rock!' && playerSelection == 'scissors' ||
            computerSelection == 'Scissors!' && playerSelection == 'paper' ||
            computerSelection == 'Paper!' && playerSelection == 'rock') {
        victory = 'You Lose!';
        alert(victory + " Computer chose: " + computerSelection)
        tally()
    } else if (computerSelection == 'Rock!' && playerSelection == 'paper' ||
            computerSelection == 'Scissors!' && playerSelection == 'rock' ||
            computerSelection == 'Paper!' && playerSelection == 'scissors') {
        victory = 'You Win!';
        alert(victory + " Computer chose: " + computerSelection)
        tally()
    } else if (computerSelection == 'Paper!' && playerSelection == 'paper' ||
            computerSelection == 'Rock!' && playerSelection == 'rock' ||
            computerSelection == 'Scissors!' && playerSelection == 'scissors') {
        victory = 'Draw!';
        alert(victory + " Computer chose: " + computerSelection)
        tally()
    } else {
        victory = 'Draw';
        alert('Error! Please enter a valid choice.')
        tally()
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        if (i <= 5) {
            singleRound()
        } else {
            alert('Error!')
     }
    }
     finalScore()
     reset()
     alert('Okay! Next match coming up!')
     alert(game())
}

//Flow
alert('Welcome to Rock Paper Scissors! Matches are best of five. Good luck!')
alert(game())