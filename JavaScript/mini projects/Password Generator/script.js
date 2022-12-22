const input = document.querySelector('#input');
const passwordLength = document.getElementById('passlength');
console.log(passwordLength)



function generatePassword() {
    let char = '0123456789abcdefghijklmnopqristuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let length = passwordLength.value
    let password = ''
    input.disabled = false; // for disabling the input field

    for(let i=0; i<length; i++){
        let randomNumber = Math.floor(Math.random() * char.length)
        password += char.substring(randomNumber, randomNumber+1)
    }
    input.value = password

}

function copyPassword() {
    input.select();
    document.execCommand('copy')
}