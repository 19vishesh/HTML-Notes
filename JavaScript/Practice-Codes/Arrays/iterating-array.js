const numbers = [1, 2, 3]

for (let key of numbers )
    console.log(key)

// Using foreach loop
// 1.
numbers.forEach(function(key){
    console.log(key)
})
// 2.
numbers.forEach(key => console.log(key))

// 3. with index
numbers.forEach((key, index) => console.log(index, key))