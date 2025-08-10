const button = document.getElementById("addNoteButton");
const board = document.getElementById("board");

let notes = JSON.parse(localStorage.getItem("notes") || "[]")
notes.forEach((text)=>{
    createNote(text)
});

button.addEventListener("click",()=>{
    const text = prompt("Enter a note");
    if(text){
        createNote(text);
        notes.push(text);
        localStorage.setItem("notes",JSON.stringify(notes));
    }
})

function createNote(text){
    const note = document.createElement("div");
    note.className = "note";
    note.textContent = text;
    board.appendChild(note);
}