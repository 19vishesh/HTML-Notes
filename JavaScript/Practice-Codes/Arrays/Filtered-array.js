const numbers = [1, 2, -1, 4]

const filtered = numbers.filter(n => (n >= 0));

const items = filtered.map(n => '<li>' + n + '</li>')

console.log(items);