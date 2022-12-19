function showButtons(){
    for(let i=1;i<=10;i++){
        const buttonElement = document.createElement('button')
        buttonElement.innerText = i;

        buttonElement.setAttribute('id',"button-"+i);

        

    }
}