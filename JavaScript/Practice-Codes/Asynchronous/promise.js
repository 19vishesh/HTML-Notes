const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // isReady = true
        isReady = [true, false][Math.floor(Math.random() * 2)]
        isReady ? resolve('🐼 Soup is ready') : reject('❌ No sopup today')
    }, 2000)
})

console.log(
    promise1
    .then(value => console.log(value))
    .catch(value => console.log(value))     // This runs in case or reject
)

// For fetch

console.log('fetch:', 
    fetch('https://dog.ceo/api/breeds/image/random')    // Promise
    .then(response => response.json())                  // Promise
    .then(value => console.log(value))
)