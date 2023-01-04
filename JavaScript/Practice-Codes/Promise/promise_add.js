const promise1 = new Promise((resolve, reject) => {
    resolve("resolved promise1")
})
const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("resolved promise2");
    }, 2000);
})
const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve("resolved promise3");
        reject(new Error("Not resolved promise3"))
    }, 2000);
})

// if all the promise resolved

Promise.all([promise1, promise2, promise3]).then((data) => {
    console.log("data is:",data)
}).catch((e) => {
    console.log("error :",e)
})