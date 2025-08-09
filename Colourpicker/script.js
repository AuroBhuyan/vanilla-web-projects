const colour = document.getElementById("colour");
const box = document.getElementById("container");
const text = document.getElementById("text");

colour.addEventListener("input",(e)=>{
    box.style.backgroundColor= e.target.value;
    text.textContent = e.target.value;
})

