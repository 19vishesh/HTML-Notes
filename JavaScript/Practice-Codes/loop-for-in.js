const person = {
    name:'Mosh', age:30
};

for(let key in person){
    console.log(key, person.key);   //this will throw undefined, since key is calculated at run-time
    console.log(key, person[key]);
}

const colors = ['red', 'blue', 'green'];
for(let index in colors){
    console.log(index, colors[index]);
}