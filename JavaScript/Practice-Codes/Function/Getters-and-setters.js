const person = {
    firstName: 'Mosh',
    lastName: 'Hamedani', 
    get fullName() {
        return `${person.firstName} ${person.lastName}`
    },
    set fullName(value){
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

// changed the name using setter function
person.fullName = 'John Smith';

// can get the full name using getter function
console.log(person.fullName)
console.log(person)