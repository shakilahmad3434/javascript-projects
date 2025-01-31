// get the all reference
const sumbitForm = document.querySelector("form");
const todoInput = document.querySelector(".todo_input");
const submitBtn = document.querySelector(".submit_btn");
const todoContainer = document.querySelector(".todo_container");
const todoTitle = document.querySelector(".complete_title");
const editItem = document.querySelector("#edit_btn");
const deleteItem = document.querySelector("#delete_btn");
const taskContainer = document.querySelector(".task_container")
const taskStatus = document.querySelector(".task_status");
const notifications = document.querySelector(".notifications");
const editInput = document.querySelector(".edit_input");

let taskComplete = false;
let todoArray = JSON.parse(localStorage.getItem("todoItemList")) || [];

const toastDetails = {
    timer: 3000,
    success: {
        icon: 'fa-circle-check',
        text: 'Todo item Created Successfully.',
    },
    error: {
        icon: 'fa-circle-xmark',
        text: 'Please Enter Your Task',
    },
    warning: {
        icon: 'fa-triangle-exclamation',
        text: 'Todo Item Delete Successfully',
    },
    info: {
        icon: 'fa-circle-info',
        text: 'Todo Item is already Exits',
    }
}


const removeToast = (toast) => {
    toast.classList.add("hide");
    if(toast.timeoutId) clearTimeout(toast.timeoutId); // Clearing the timeout for the toast
    setTimeout(() => toast.remove(), 500); // Removing the toast after 500ms
}

const createToast = (id) => {
    const { icon, text } = toastDetails[id];
    const toast = document.createElement("li");
    toast.className = `toast ${id}`;
    toast.innerHTML = `<div class="column">
                         <i class="fa-solid ${icon}"></i>
                         <span>${text}</span>
                      </div>
                      <i class="fa-solid fa-xmark" onclick="removeToast(this.parentElement)"></i>`;
    notifications.appendChild(toast);
    toast.timeoutId = setTimeout(() => removeToast(toast), toastDetails.timer);
}

// create a todo item
const createTodoItem = (itemName, num, taskCom) => {
    const div = document.createElement("div");
    div.classList.add("todo_item");
    div.innerHTML = `
                <div class="todo_heading">
                    <p class="complete_title ${taskCom ? "line-through" : ""}" id="${num}">${itemName}</p>
                </div>
                <div class="todo_icons">
                    <i class="fa-solid fa-pencil" id="edit_btn"></i>
                    <i class="fa-solid fa-trash-can" id="delete_btn"></i>
                </div>`;
                todoContainer.append(div);
// task status bar active
    taskContainer.classList.add("active");
}

// initial calling for todo item list
let numId = 0;
if(todoArray){

    todoArray.map((item) => {
        createTodoItem(item.todoValue, numId++, item.taskComplete);
    })
}

// add todo task item
const addTodo = (event) => {
    event.preventDefault();
    const todoValue = todoInput.value.trim();
    // if empty input value
    const updateArr = todoArray.map(element => element.todoValue).filter(value => value === todoValue);
    
    if(!todoValue){
        createToast("error");
        return;
    }else if(updateArr.includes(todoValue)){

        createToast("info");
        return;
    }
    
    let todoObj = {
        todoValue, taskComplete
    }
    todoArray.push(todoObj);
    
    localStorage.setItem("todoItemList", JSON.stringify(todoArray));
    createTodoItem(todoValue, numId++);
    createToast("success");
    todoInput.value = "";
    
}
// check todo item task complete
const todoTaskComplete = (element) =>{
    if(element.target.className.includes("line-through")){
        element.target.classList.remove("line-through");
        todoArray[element.target.id].taskComplete = false;
        localStorage.setItem("todoItemList", JSON.stringify(todoArray)); 
        
    }else{
        element.target.classList.add("line-through");
        todoArray[element.target.id].taskComplete = true;
        localStorage.setItem("todoItemList", JSON.stringify(todoArray));   
    }
    
    
}
// edit todo item
const editTodoHandle = (e) => {
    document.querySelector(".model").style.display = "block";
    editInput.value = e.target.parentElement.previousElementSibling.firstElementChild.textContent;

    document.querySelector(".save").addEventListener("click", () => {
        const saveUserValue = editInput.value.toLowerCase().trim();
        const updateArr = todoArray.map(element => element.todoValue).filter(value => value === saveUserValue);
       
        if (!saveUserValue) {
            createToast("error");
            return;
          }
      
          if (Object.keys(updateArr).length > 0) {
            alert("Product already exists!");
            return;
          }

        todoArray[e.target.parentElement.previousElementSibling.firstElementChild.id].todoValue = saveUserValue;
        localStorage.setItem("todoItemList", JSON.stringify(todoArray)); 
        e.target.parentElement.previousElementSibling.firstElementChild.textContent = saveUserValue;
        document.querySelector(".model").style.display = "none";  
    })
    
    document.querySelector(".cancel").addEventListener("click", () => {
        document.querySelector(".model").style.display = "none";
    })
   
}

// delete todo item
const deleteTodoHandle = (e) => {
    const currentItem = e.target.parentElement.parentElement;
    const currentId = Number(e.target.parentElement.previousElementSibling.firstElementChild.id);
    todoArray.splice(currentId, 1);
    localStorage.setItem("todoItemList", JSON.stringify(todoArray));
    currentItem.remove()
    createToast("warning");
    location.reload();
    
}
// complete task todo item title
const todoItemContainer = (e) => {
    const currectTarget = e.target;
    if(currectTarget.tagName === "P"){
        todoTaskComplete(e);
    }else if(currectTarget.id === "delete_btn"){
        deleteTodoHandle(e);
    }else if(currectTarget.id === "edit_btn"){
        editTodoHandle(e)
    }

}


// filter task status bar
const filterTaskStatus = (e) => {
    if(e.target.className === "all"){
        if(todoArray){
            todoContainer.innerHTML = "";
            todoArray.map((item) => {
                createTodoItem(item.todoValue, numId++, item.taskComplete);
            })
        }
    }else if(e.target.className === "complete"){
        const completeArray = todoArray.map(element => element).filter(task => task.taskComplete === true);
        if(completeArray){
            todoContainer.innerHTML = "";
            completeArray.map((item) => {
                createTodoItem(item.todoValue, numId++, item.taskComplete);
            })
        }
    }else if(e.target.className === "incomplete"){
        const completeArray = todoArray.map(element => element).filter(task => task.taskComplete === false);
        if(completeArray){
            todoContainer.innerHTML = "";
            completeArray.map((item) => {
                createTodoItem(item.todoValue, numId++, item.taskComplete);
            })
        }
    }

}

// Event Listeners
sumbitForm.addEventListener("submit", addTodo);
todoContainer.addEventListener("click", todoItemContainer);
taskStatus.addEventListener("click", filterTaskStatus);