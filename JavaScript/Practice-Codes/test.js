
arr = [7,4,2,6,5,89,9,,1,10,2]



const even = arr.filter(n => Number(n % 2 === 0))

even.sort();

//   const odd = arr.filter(n => n%2!==0)

//   odd.sort();
//   odd.reverse();

console.log(even)