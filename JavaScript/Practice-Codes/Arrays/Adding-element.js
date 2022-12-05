const numbers = [3,4];

// At the end
numbers.push(5, 6);

// Beginning
numbers.unshift(1, 2);

// Middle
numbers.splice(2, 0, 'a', 'b');


console.log(numbers);