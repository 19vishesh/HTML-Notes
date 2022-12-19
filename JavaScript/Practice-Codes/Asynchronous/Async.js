// Whenever we use await we use async say calling any api

/*
console.log('fetch:',
    fetch('https://dog.ceo/api/breeds/image/random')    // Promise
        .then(response => response.json())                  // Promise
        .then(value => console.log(value))
)
*/

// Now we do not need to use .then in fetch using TODO:await
// And whwnerver we use await we have to use TODO:async function

const url = 'https://dog.ceo/api/breeds/image/random'

const getDog = async () => {
    const response = await fetch(url)
    const data = await response.json()
}
// getDog()

// NOTE: Rules for using asyc / await
// 1. You must create a function
// 2. You must use the keyword async
// 3. Use the word await

// **********************************************************************************************************
// **********************************************************************************************************
// **********************************************************************************************************


const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // isReady = true
        isReady = [true, false][Math.floor(Math.random() * 2)]
        isReady ? resolve('🐼 Soup is ready') : reject('❌ No soup today')
    }, 2000)
})
/*
console.log(
    promise1
        .then(value => console.log(value))
        .catch(value => console.log(value))     // This runs in case or reject
)
*/

// Now calling the soup promise using await

const getSoup = async () => {
    try{
        const soup = await promise1
        console.log(soup)
    }catch(e){
        console.log(e)
    }
}

getSoup()

// NOTE: if used async function there is only and only 2 WAYS 1st AWAIT, 2nd .then