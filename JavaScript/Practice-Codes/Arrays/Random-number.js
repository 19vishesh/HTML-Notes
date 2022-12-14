const randomFruit = (fruits) => {
    const randomNumber = Math.floor(Math.random() * fruits.length)
    
    console.log(randomNumber)
    
    return fruits[randomNumber]
}

fruits = ['🍊','🍋','🍌','🍎','🍇'] 
console.log(randomFruit(fruits))