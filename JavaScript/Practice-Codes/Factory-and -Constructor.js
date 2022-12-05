
//*********************************************************************************************
//Factory Function
//*********************************************************************************************
let address = createAddress('a', 'b', 'c')
console.log(address)

function createAddress(street, city, zipCode) {
    return {
        street,
        city,
        zipCode
    };
}

//*********************************************************************************************
//Constructor Function
//*********************************************************************************************
let address2 = new Address('a', 'b', 'c')
console.log(address2)

function Address(street, city, zipCode){
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}