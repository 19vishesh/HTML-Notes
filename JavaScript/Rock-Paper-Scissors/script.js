// ***************************  Global declaration for totalScore ***************
const totalScore = {computerScore:0, playerScore:0}


// ***************************  For aclculaing the computer choice **************
function getComputerChoice() {
    const rpsChoice = ['Rock', 'Paper', 'Scissors']
    const randomNumber = Math.floor(Math.random()*3)

    return rpsChoice[randomNumber]
}

// **************************** getResult compares playerChoice & computerChoice and returns the score accordingly **********
// human wins - getResult('Rock', 'Scissors') 👉 1
// human loses - getResult('Scissors', 'Rock') 👉 -1
// human draws - getResult('Rock', 'Rock') 👉 0
function getResult(playerChoice, computerChoice) {
    // return the result of score based on if you won, drew, or lost
    let score;
    if(playerChoice==computerChoice){
        score = 0;
    }else if (playerChoice == 'Rock' && computerChoice == 'Scissors'){
        score = 1
    }else if (playerChoice == 'Paper' && computerChoice == 'Rock'){
        score = 1
    }else if (playerChoice == 'Scissors' && computerChoice == 'Paper'){
        score = 1
    }else{
        score = -1
    }

    // return score
    return score

}
// *************************** Show the result of the game *************************** 
function showResult(score, playerChoice, computerChoice) {

    const resultDiv = document.getElementById('result')
    const handsDiv = document.getElementById('hands')
    const playerScoreDiv = document.getElementById('player-score')


    if(score == -1){
        resultDiv.innerText = 'You lose!'
    }else if (score == 0){
        resultDiv.innerText = "it's a tie!"
    }else {
        resultDiv.innerText = 'You Won!'
    }

    handsDiv.innerText = `👦${playerChoice} vs 🤖${computerChoice}`

    playerScoreDiv.innerText = `Your score: ${totalScore.playerScore}`

}

// *************************** Calculate who won and show it on the screen ***********
function onClickRPS(playerChoice) {
    console.log({playerChoice})
    const computerChoice = getComputerChoice()
    console.log({computerChoice})

    const score = getResult(playerChoice, computerChoice)
    console.log(score)
    
    totalScore['playerScore'] += score
    totalScore['computerScore'] = score
    console.log(totalScore)

    showResult(score, playerChoice, computerChoice)
}


// *****************************  Make the RPS buttons actively listen for a click and do something once a click is detected ********
function playGame() {

    const rpsButtons = document.querySelectorAll('.rpsButton');

    rpsButtons.forEach(rpsButton => {
        rpsButton.onclick = () => onClickRPS(rpsButton.value)
    })

    const endGameButton = document.getElementById('endGameButton')
    endGameButton.onclick = () => endGame(totalScore)
    
}

// *****************************  endGame function clears all the text on the DOM ***********
function endGame() {
    totalScore['playerScore'] == 0
    totalScore['computerScore'] == 0

    const resultDiv = document.getElementById('result')
    const handsDiv = document.getElementById('hands')
    const playerScoreDiv = document.getElementById('player-score')

    resultDiv.innerText = ''
    handsDiv.innerText = ''
    playerScoreDiv.innerText = ''
}

playGame()