const numbers = [1,2,3,1,1,4];

console.log(numbers.indexOf('a'))
console.log(numbers.indexOf(2))
console.log(numbers.indexOf(4))

// last occurance of any number
console.log(numbers.lastIndexOf(1))

// Checking if the number present in the array
console.log(numbers.indexOf(1) !== -1)
console.log(numbers.includes(1))



// for finding in the objects

const courses = [
    { id: 1, name: 'a'},
    { id: 2, name: 'b'},
];

const cou = courses.find(cou => cou.name === 'a')
console.log(cou)