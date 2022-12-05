const person = {
    firstName: 'Mosh',
    lastName: 'Hamedani',
    set fullName(value) {
        if (typeof value !== 'string')
            throw new Error('Value is not a string.');
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};
try {
    person.fullName = null;
} catch (e) {
    alert(e);   // it will pop-up the error message
}
console.log(person)