const arr1 = document.getElementById('1');
const arr2 = document.getElementById('2');
const btn1 = document.getElementById('add-1');
const btn2 = document.getElementById('add-2');
const display1 = document.getElementById("disp-1");
const display2 = document.getElementById("disp-2");
const result = document.getElementById("result");
const error = document.getElementById("error");

let firstArray = [];
let secondArray = [];

let flag1 = true;
let flag2 = true;
btn1.addEventListener('click', () => {
    firstArray = arr1.value.split(",");
    for (let i = 0; i < firstArray.length; i++) {
        if (!Number.isInteger(parseInt(firstArray[i]))) {
            error.className = "";
            flag1 = false;
            break;
        }
    }
    if (flag1) {
        error.className = "d-none";
        display1.innerHTML = `[${firstArray}]`
    }
})

btn2.addEventListener('click', () => {
    secondArray = arr2.value.split(",");
    for (let i = 0; i < secondArray.length; i++) {
        if (!Number.isInteger(parseInt(secondArray[i]))) {
            error.className = "";
            flag2 = false;
            break;
        }
    }
    if (flag2) {
        error.className = "d-none";
        display2.innerHTML = `[${secondArray}]`
    }
})

document.getElementById('merge').addEventListener('click', () => {
    if (flag1 && flag2) {
        result.innerHTML = `[${firstArray},${secondArray}]`
    }
})