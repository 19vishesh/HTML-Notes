// Divisible by 3 => fizz
// Divisible by 5 => buzz
// Divisible by Both 5 and 3 => FizzBuzz
// not Divisible by 3 and 5 => input
// Not a number => 'not a number'

const output = fizzBuzz(3);
console.log(output)

function fizzBuzz(input){
    if(typeof input !== 'number')
        return 'Not a Number'

    if((input % 3)===0){
        return 'Fizz'
    }
    if((input % 5)===0)
        return 'Buzz'
    if((input % 5)===0 && (input % 3)==0)
        return 'FizzBuzz'
    
    return input
}