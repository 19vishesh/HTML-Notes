const popbtn1 = document.querySelector('.workexp')
const hero = document.querySelector('.hero')

function openWorkPopup() {
    popbtn1.classList.add('open-workpopup');
    hero.classList.add('blur');
}

function closeWorkPopup() {
    popbtn1.classList.remove('open-workpopup');
    hero.classList.remove('blur');
}

//********************************************************************************************* */
//********************************************************************************************* */
const popbtn2 = document.querySelector('.hireme')

function openHirePopup() {
    popbtn2.classList.add('open-hirepopup');
    hero.classList.add('blur');
}

function closeHirePopup() {
    popbtn2.classList.remove('open-hirepopup');
    hero.classList.remove('blur');
}


