let icon = document.getElementById('icon')

let loader = document.getElementById('preloader')

window.addEventListener('load', function() {
    loader.style.display = 'none'
})

icon.onclick = function() {
    document.body.classList.toggle('dark-theme')
    if(document.body.classList.contains('dark-theme')){
        icon.src = 'images/sun.png'
    }else{
        icon.src = 'images/moon.png'
    }
}

// For Auto-typing
let typed = new Typed('.auto-type', 
{
    strings: ['नमस्ते', 'Hi', 'Hello', 'Holā', 'Nǐn hǎo'],
    typeSpeed: 150,
    backSpeed: 100,
    loop:true
})


