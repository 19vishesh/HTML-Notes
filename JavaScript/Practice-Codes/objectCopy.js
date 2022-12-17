const obj = {
    fullname : {
        firstName : 'Vishesh',
        lastName: 'Kumar'
    },
    age : 20
}

const objectCopy = obj;

// in js objects are copied by reference and not by value
// so if you change value in copy then original object will get changed as well 
objectCopy.age = 26
console.log(obj.age)

// object.create original will not changed

// JSON.parse() is another method for object.create
// for convert the string into the object