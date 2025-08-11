const button = document.getElementById("addNoteButton");
const board = document.getElementById("board");
const input = document.getElementById("noteInput");
const rainbowColors = [
    "#eb3d57", 
    "#FF7F00", 
    "#FFFF00", 
    "#0ae623",
    "#4cbce1",
    "#ecacdb"  
  ];
let colourIndex = 0;

let notes = JSON.parse(localStorage.getItem("notes") || "[]")
notes.forEach((text)=>{
    createNote(text)
});

button.addEventListener("click",()=>{
    addNoteFromInput();
})

input.addEventListener("keydown",(event)=>{
    if(event.key == "Enter"){
        addNoteFromInput();
    }
})

function addNoteFromInput(){
    const text = input.value.trim();
    if(text){
        createNote(text);
        notes.push(text);
        localStorage.setItem("notes",JSON.stringify(notes));
        input.value = "";
    }
}

function createNote(text){
    const note = document.createElement("div");
    note.className = "note";

    const colour = rainbowColors[colourIndex];
    note.style.backgroundColor = colour;

    colourIndex++;
    if(colourIndex >= rainbowColors.length){
        colourIndex = 0;
    }
    
    note.textContent = text;
    board.appendChild(note);

    const del = document.createElement("button");
    del.className = "delete";
    del.textContent = "\u00D7";
    note.appendChild(del);

    del.addEventListener("click",()=>{
        note.remove();

        const index = notes.indexOf(text);
        if(index!=-1){
            notes.splice(index,1);
        }

        localStorage.setItem("notes",JSON.stringify(notes));
    })
}