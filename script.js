const toDOList = document.getElementById("todolist");
const newToDoInput = document.getElementById("input-text");
const addToDobtn = document.getElementById("addTodoBtn");

addToDobtn.addEventListener("click", ()=>{
    const newToDoText = newToDoInput.value;

    if(newToDoText !==""){
        const newToDoItem = document.createElement("li");
        newToDoItem.innerText = newToDoText; 
        const deleteToDoBtn =document.createElement("button")
        deleteToDoBtn.innerText ="X";
        
        deleteToDoBtn.classList.add("delete-todo-btn");
        deleteToDoBtn.addEventListener("click", ()=>{
            newToDoItem.remove();
        });

        toDOList.appendChild(newToDoItem)
        newToDoItem.appendChild(deleteToDoBtn);
        newToDoInput.value ="";
    }

});