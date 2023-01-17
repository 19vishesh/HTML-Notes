// Selectors
const input = document.getElementById('input');
const addBtn = document.getElementById('add');
const display = document.getElementById('display');
const even = document.getElementById('even');
const odd = document.getElementById('odd');
const join = document.getElementById('join');
document.getElementById('error').style.display = 'none';


addBtn.addEventListener('click', () => {
    let a = input.value.split(",");
    
    for(let x of a){
        if(!Number.isInteger(parseInt(x))){
            document.getElementById('error').style.display = 'block'
            return
        }
    }

    display.innerHTML = `[${a}]`
})


even.addEventListener('click', () => {
    let a = input.value.split(",");
    let even = a.filter(function (x) {
        return x % 2 == 0;
    })
    display.innerHTML = `[${even}]`
})

odd.addEventListener('click', () => {
    let a = input.value.split(",");
    let odd = a.filter(function (x) {
        return x % 2 !== 0;
    })
    display.innerHTML = `[${odd}]`
})

join.addEventListener('click', () => {
    let a = input.value.split(',').join("");
    display.innerHTML = `${a}`
})
