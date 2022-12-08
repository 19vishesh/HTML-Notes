function foo(){
    console.log('hi')
}

function baz(){
    console.log('hi there')
}

function callFunction(name){
    name();
}

let num = 5
if(num > 3){
    callFunction(foo)
}else{
    callFunction(baz)
}