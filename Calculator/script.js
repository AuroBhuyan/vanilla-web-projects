const display = document.getElementById("display");
const ans = document.getElementById("result");

function appendToDisplay(input){
    if(input=='x')
    {
        display.value += '*';
    }
    else{
    display.value += input;
    }
}

function clearScreen(){
    display.value = "";
    ans.value = "";
}

function calculate(){
    ans.value = eval(display.value);
}