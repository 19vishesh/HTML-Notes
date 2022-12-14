const numbers = [1, 2, -1, 4]

const filtered = numbers.filter(function(element,index){
    return element>=0
});
// shorthand way
// const filtered = numbers.filter(n => (n >= 0));

const items = filtered.map(n => '<li>' + n + '</li>')

console.log(items);