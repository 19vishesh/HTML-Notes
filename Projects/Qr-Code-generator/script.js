
let mainContent = document.querySelector('.main-content')
let btn = mainContent.querySelector('.btn')
let url = mainContent.querySelector('.input-field')
let img = mainContent.querySelector('img')

btn.addEventListener('click', ()=>{
    let urlValue = url.value;
    if (!urlValue) return;
    btn.innerText = 'Generating Qr Code...'; // Changing the inner text of the button
    img.src = `https://chart.googleapis.com/chart?cht=qr&chs=250x250&chl=${urlValue}`

    // again have to change the inner text from generatin gQR code to Generate QR Code
    // will us load evntlistener for that

    img.addEventListener('load', () => {
        mainContent.classList.add('active');
        btn.innerText = 'Generate QR Code'
    })
})
