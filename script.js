const choice = document.getElementById("textInput")
const container = document.querySelector("#task-container");
const button = document.querySelector("#btn")
let taskId = 0;

button.addEventListener("click", addTask)
choice.addEventListener("keyup", function(KeyboardEvent){
    if(KeyboardEvent.key === "Enter"){
        addTask();
        console.log(KeyboardEvent.key)
    }
})


function addTask(){
    let div = document.createElement("div");
    div.style.background = "blue";
    div.classList.add("task");
    div.id = taskId + 1;
    taskId = taskId + 1;
    div.textContent = choice.value;
    container.appendChild(div);
    choice.value = '';
}