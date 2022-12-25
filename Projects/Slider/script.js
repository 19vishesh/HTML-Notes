const slides = document.querySelectorAll('.slide')
var counter = 0;

slides.forEach(
    (slide,index) => { slide.style.left = `${index * 100}%`}
)

const slideImage = () => 
{
    slides.forEach (
        (slide) => {slide.style.transform = `translateX(-${(counter%4)*100}%)`}
    )
}

const goNext = () => { counter++; slideImage()}
const goPrev = () => { counter--; slideImage()}

function randomColor() {
    let char = '123456789ABCDEF'
    let color = '#'
    for(let i=0; i<6; i++){
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