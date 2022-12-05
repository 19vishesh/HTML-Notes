let numbers = [1,2,3,4,5]

// Solution 1, this is not optimal solution , can use if you have not any other reference of the array
numbers = [];
console.log(numbers)

// Solution 2
numbers.length = 0;

// Solution 3
while(numbers.length > 0)
    numbers.pop();