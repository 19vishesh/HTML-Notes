

const pr=(x) => {new Promise((reject, resolve) => {
    if(x===1)
        reject("error is thrown");
    else
        resolve("ran successfully");
})}


pr(1)
