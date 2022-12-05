function interest(pricipal, rate = 3.5, years = 5){
    return pricipal * rate / 100 * years;
}
// passing only interest
console.log(interest(10000))


function interest(pricipal, rate = 3.5, years){
    return pricipal * rate / 100 * years;
}
// passing interest and year
console.log(interest(10000, undefined, 5))


function interest(pricipal, rate, years){
    return pricipal * rate / 100 * years;
}
// passing all the values since no default value set
console.log(interest(100000, 3.5, 5))