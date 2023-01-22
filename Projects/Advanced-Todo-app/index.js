let form = document.querySelector("form");
let text = document.getElementById("text");
let todoCon = document.querySelector(".todo-con");

form.addEventListener("submit", (ele) => {
    ele.preventDefault();
    addTodo();
})

let todos = JSON.parse(localStorage.getItem("todos"));
if (todos) {
    todos.forEach(element => {
        addTodo(element);
    });
}

function addTodo(ele) {
    let todoCollection = document.createElement("div");
    todoCollection.classList.add("todocollection");
    let todoText = text.value;

    if (ele) {
        todoText = ele.text;
    }

    if (todoText) {
        todoCollection.innerHTML = `
        <div class="todo-li">
            <div class="check ${ele && ele.complete ? "active-check" : ""}"><img src="/images/icon-check.svg" alt=""></div>
            <p class = "ptag ${ele && ele.complete ? "complete" : ""}">${todoText}</p>
            <button class="close"><img src="/images/icon-cross.svg" alt=""></button>
        </div>
        <div class="hr"></div>
        
    `}
    todoCon.appendChild(todoCollection);

    updateLocalStorage();

    // For the cross button
    let close = todoCollection.querySelector(".close");
    close.addEventListener("click", () => {
        todoCollection.remove();
        updateLocalStorage();
    })

    // For check button
    let check = todoCollection.querySelector(".check");
    check.addEventListener("click", () => {
        check.classList.toggle("active-check");

        // Adding line-thorugh to the text on clicking the check
        todoCollection.children[0].children[1].classList.toggle("complete");
        updateLocalStorage();
    })
    
    text.value = "";
}


function updateLocalStorage() {
    let ptag = document.querySelectorAll(".ptag")
    let arr = [];
    ptag.forEach(element => {
        arr.push({
            text: element.innerText,
            complete: element.classList.contains("complete")
        })
    });
    localStorage.setItem("todos", JSON.stringify(arr));
}



let info = document.querySelectorAll(".choice p");
let todoList = document.querySelectorAll(".todocollection");

info.forEach(element => {
    element.addEventListener("click", () => {
        info.forEach(item => {
            item.classList.remove('active');
        })
        element.classList.add('active');

        if (element.innerText === "Active") {
            todoList.forEach(elem => {
                if (!elem.children[0].children[1].classList.contains("complete")) {
                    elem.style.display = "block";
                } else {
                    elem.style.display = "none";
                }
            });
        } else if (element.innerText === 'Completed') {
            todoList.forEach(elem => {
                if (elem.children[0].children[1].classList.contains("complete")) {
                    elem.style.display = "block";
                } else {
                    elem.style.display = "none";
                }
            });
        } else {
            todoList.forEach(elem => {
                elem.style.display = "block";
            });
        }
    })
});


const clear = document.querySelector(".clear");

clear.addEventListener("click", () => {
    todoList.forEach(elem => {
        if (elem.children[0].children[1].classList.contains("complete")) {
            elem.remove();
            updateLocalStorage();   // Again updating to save latest changes
        }
    });
})


const left = document.querySelector(".left");
function leftItem() {
    let activeTodo = document.querySelectorAll(".todo-li .active-check");
    let diff = todoList.length - activeTodo.length;
    left.innerText = `${diff} items left`
};
leftItem();