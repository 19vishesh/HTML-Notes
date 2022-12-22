const popbtn2 = document.getElementById('hirepopup')
const hero = document.querySelector('.hero')

function openHirePopup() {
    popbtn2.classList.add('open-hirepopup');
    hero.classList.add('blur');
}

function closeHirePopup() {
    popbtn2.classList.remove('open-hirepopup');
    hero.classList.remove('blur');
}


