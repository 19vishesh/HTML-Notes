// After specific time interval it will execute again & again till infinite until u made any stopper(using setTimeOut)

/*
setInterval(() => {
    console.log(`I'll come again & again`)
}, 2*1000);

console.log("1");
console.log("2");
*/

// Now to exit the infinite execution we can delete the interval id after specific time using clearInterval(inbuilt)

const intervalId = setInterval(() => {
  console.log(`I'll come again & again`);
}, 2 * 1000);

setTimeout(() => {
    console.log('stopping the interval');
    clearInterval(intervalId);
}, 10*1000);