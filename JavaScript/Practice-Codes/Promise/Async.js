// When you add async keyword in front of any regular function
// it automatically returns a promise from that function

//Await can only be used inside the async function
// it makes the function pause the execution and wait for the promise to resolve

function createOrder() {
    return new Promise(
        (resolve, reject) => {
            setTimeout(() => {
                resolve("Order created")
            }, 2000);
    })
}
function proceedToPayment() {
    return new Promise(
        (resolve, reject) => {
            setTimeout(() => {
                resolve("Order created")
            }, 2000);
    })
}

async function foo() {
    try{
        const orderId = await createOrder();
        await proceedToPayment();
        console.log("Last statement of Aysnc Function");
    }
    catch (err) {
        console.log("Error is :",err)
    }
}
foo();
console.log(3)