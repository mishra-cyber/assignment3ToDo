//selectors
const todoInput=document.querySelector('.todo-input');
const todoButton=document.querySelector('.todo-button');
const todoList=document.querySelector('.todo-list');

//Event Listeners
 todoButton.addEventListener('click', addTodo);
 todoList.addEventListener('click',deleteCheck);

//Function

function addTodo(event)
{   
   //prevent from submiotting
    event.preventDefault();
    const todoDiv =document.createElement("div");
    todoDiv.classList.add("todo");
    //create li
    
    const newTodo=document.createElement('li');
    const todoInput=document.querySelector('.todo-input');
    newTodo.innerText=todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    //check mark button

    const completedButton=document.createElement('button');
    completedButton.innerHTML='<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    //trash button
    const trashButton=document.createElement('button');
    trashButton.innerHTML='<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    todoList.appendChild(todoDiv);
    todoInput.value=" ";
}

function deleteCheck(e)
{
    const item=e.target;
    if(item.classList[0]=="trash-btn")
    {
        const todo= item.parentElement;
        todo.remove();
    }

    
}