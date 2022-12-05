let address1 = new Address('a', 'b', 'c')
let address2 = new Address('a', 'b', 'c')

console.log(areEqual(address1, address2))
console.log(areSame(address1, address2))

//Constructor Function
function Address(street, city, zipCode) {
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

//for checking the properties, in this case objects prop is same 
function areEqual(address1, address2){
    return address1.street === address2.street &&
        address1.city === address2.city &&
        address1.zipCode === address2.zipCode;
}


//for referencing the same object, i.e if pointing to same object, but in this case they don't belong to same object
function areSame(address1, address2){
    return address1 === address2
}