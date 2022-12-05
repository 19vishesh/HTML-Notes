const numbers = [1, 2, -1, 4]

const result1 = numbers.reduce((accumulator, currentValu) => accumulator + currentValu)
console.log(result1)

// *****************************************************************************************************
// *****************************************************************************************************
function sum(a, b){
    return a+b;
}
// const result2 = numbers.reduce((a,b)=>a+b,0);   // here zero is by default but you can mention any number for the limit of the calulation till number in the array
const result2 = numbers.reduce(sum);
console.log(result2)
