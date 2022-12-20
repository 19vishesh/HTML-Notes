document.querySelector('#add').onclick = function () {
    if(document.querySelector('#newtask  input').value.length === 0){
        alert('Please Enter the Task')
    }else{
        document.querySelector('#tasks').innerHTML 
        += `
            <div class = 'taskblock'>
                <span id='taskname'>
                    ${document.querySelector('#newtask input').value}
                </span>
                <button class = 'delete'>
                    <i class="fas fa-trash-alt"></i>
                </button>
            </div>
        `;

        let current_task = document.querySelectorAll('.delete')
        for(let i=0; i<current_task.length; i++){
            current_task[i].onclick = function () {
                this.parentNode.remove();
            }
        }

        let tasks = document.querySelectorAll('.taskblock')
        for (let i = 0; i < tasks.length; i++) {
            tasks[i].onclick = function() {
                this.classList.toggle('completed')
            }
        }

        document.querySelector('#newtask input').value = ''

    }
}