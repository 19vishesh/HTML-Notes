
let redDiv = document.getElementById('red')
let yellowDiv = document.getElementById('yellow')
let greenDiv = document.getElementById('green')

// redDiv.onclick = () => { console.log('red') }
// yellowDiv.onclick = () => { console.log('yellow') }
// greenDiv.onclick = () => { console.log('green') }

const squares = document.querySelectorAll('.colorSquare')
// console.log(squares)

// foreach loop

squares.forEach(element => {
    element.onclick = () => console.log(element.value)
});

// for printing the number counter on the boxes
const timesClicked = { 'red': 0, 'yellow': 0, 'green': 0 }
squares.forEach(element => {
    element.onclick = () => {
        timesClicked[element.value] += 1;
        element.innerText = timesClicked[element.value];
    }
});

// for clearing the button

function clearScores() {
    timesClicked.red = 0;
    timesClicked.yellow = 0;
    timesClicked.green = 0;
    squares.forEach(element => {element.innerText = ''})
}
const clearGamebtn = document.getElementById('clear-game')
clearGamebtn.onclick = () => clearScores()
