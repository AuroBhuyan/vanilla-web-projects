const addButton = document.getElementById("todo-button");
const input = document.getElementById("todo-text");
const todoBoard = document.getElementById("todo-board");
const rainbowColors = [
    "#eb3d57", 
    "#FF7F00", 
    "#FFFF00", 
    "#0ae623",
    "#4cbce1",
    "#ecacdb"  
  ];
  let rainbowColorsIndex  = 0;

let todos = JSON.parse(localStorage.getItem("todos") || "[]");
todos.forEach( e => {
    createTask(e.text,e.done);
});

addButton.addEventListener('click',()=>{
    const text = input.value.trim();
    if(text){
        createTask(text,false);
        todos.push({text:text, done:false});
        localStorage.setItem("todos",JSON.stringify(todos));
        input.value = "";
    }
})



function createTask(text,done){
    const todo = document.createElement("div")
    todo.className = "todo";
    todo.style.backgroundColor = rainbowColors[rainbowColorsIndex];
    rainbowColorsIndex++;
    if(rainbowColorsIndex>6){
        rainbowColorsIndex = 0;
    }

    const circle = document.createElement("div");
    circle.className = "check-circle";
    if(done)
    circle.classList.add("done");

    const deleteBtn = document.createElement("div");
    deleteBtn.className = "delete-btn";
    deleteBtn.textContent = "x";

    const todoTask = document.createElement("span");
    todoTask.className = "todo-text";
    todoTask.textContent = text;
    if(done)
    todoTask.classList.add("done");

    deleteBtn.addEventListener("click",()=>{
        todoTask.remove();
        todo.remove();

        const index = todos.indexOf(text);
        if(index){
            todos.splice(index,1);
        }

        localStorage.setItem("todos",JSON.stringify(todos));
    })
    circle.addEventListener("click",()=>{toggleDone(text,circle,todoTask)})
    todoTask.addEventListener("click",()=>{toggleDone(text,circle,todoTask)})

    todo.appendChild(circle);
    todo.appendChild(todoTask);
    todo.appendChild(deleteBtn);
    todoBoard.appendChild(todo);
}

function toggleDone(text,circle,todoTask){
    circle.classList.toggle("done");
    todoTask.classList.toggle("done");

    todos = todos.map((t)=>
        t.text === text?{text:t.text,done:!t.done}:t
    )
    localStorage.setItem("todos",JSON.stringify(todos));
}

