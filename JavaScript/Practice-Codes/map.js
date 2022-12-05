let result = [1,2,3,4].map(number => number * 2)


// OR MAKING A FUNCTION FOR THE SAME

const doubleNumber = (numbers) =>  {
    return numbers.map(number => number * 2)
}

console.log(doubleNumber([1,2,3,4])) 