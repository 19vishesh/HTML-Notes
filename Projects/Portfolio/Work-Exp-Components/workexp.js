const popbtn = document.getElementById('workpopup')
const hero = document.querySelector('.hero')

function openWorkPopup() {
    popbtn.classList.add('open-workpopup');
    hero.classList.add('blur');
}

function closeWorkPopup() {
    popbtn.classList.remove('open-workpopup');
    hero.classList.remove('blur');
}

