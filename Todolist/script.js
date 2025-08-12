const addButton = document.getElementById("todo-button");
const input = document.getElementById("todo-text");
const todoBoard = document.getElementById("todo-board");

let todos = JSON.parse(localStorage.getItem("todos") || "[]");
todos.forEach( e => {
    createTask(e);
});

addButton.addEventListener('click',()=>{
    const text = input.value.trim();
    if(text){
        createTask(text);
        todos.push(text);
        localStorage.setItem("todos",JSON.stringify(todos));
        input.value = "";
    }
})



function createTask(text){
    const todo = document.createElement("div")
    todo.className = "todo";
    todo.textContent = text;
    todoBoard.appendChild(todo);
}

