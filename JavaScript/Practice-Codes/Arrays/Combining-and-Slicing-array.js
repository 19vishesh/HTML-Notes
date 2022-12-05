const first = [1,2,3]
const second = [4,5,6]

// Combining
const combine = first.concat(second)
console.log(combine)

// Slicing
const slice = combine.slice(2,4)
console.log(slice)

// Using the Spread operator
const combineed = [...first, ...second]
console.log(combineed)