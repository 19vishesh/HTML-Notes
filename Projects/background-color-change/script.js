function randomColor() {
    let char = '123456789ABCDEF'
    let color = '#'
    for(let i=0; i<5; i++){
        color += Math.floor(Math.random() * 16)
    }
    return color
}

function setback(){
    let mybody = document.getElementsByTagName("body")[0];
    let color = randomColor()
    mybody.style.background = color
    console.log(mybody.style.background)
}