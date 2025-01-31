// DOM Elements
const UI = {
    form: document.querySelector("form"),
    input: document.querySelector(".todo_input"),
    submitBtn: document.querySelector(".submit_btn"),
    todoContainer: document.querySelector(".todo_container"),
    taskContainer: document.querySelector(".task_container"),
    taskStatus: document.querySelector(".task_status"),
    notifications: document.querySelector(".notifications"),
    editInput: document.querySelector(".edit_input"),
    modal: document.querySelector(".model")
};

// Toast Configuration
const TOAST_TYPES = {
    success: {
        icon: 'fa-circle-check',
        text: 'Todo item created successfully.'
    },
    error: {
        icon: 'fa-circle-xmark',
        text: 'Please enter your task'
    },
    warning: {
        icon: 'fa-triangle-exclamation',
        text: 'Todo item deleted successfully'
    },
    info: {
        icon: 'fa-circle-info',
        text: 'Todo item already exists'
    }
};

// State Management
let todos = JSON.parse(localStorage.getItem("todoItemList")) || [];
let numId = 0;

// Local Storage Functions
function saveTodosToStorage() {
    localStorage.setItem("todoItemList", JSON.stringify(todos));
}

function getTodosFromStorage() {
    return JSON.parse(localStorage.getItem("todoItemList")) || [];
}

// Toast Functions
function removeToast(toast) {
    toast.classList.add("hide");
    if (toast.timeoutId) clearTimeout(toast.timeoutId);
    setTimeout(() => toast.remove(), 500);
}

function createToast(type) {
    const { icon, text } = TOAST_TYPES[type];
    const toast = document.createElement("li");
    
    toast.className = `toast ${type}`;
    toast.innerHTML = `
        <div class="column">
            <i class="fa-solid ${icon}"></i>
            <span>${text}</span>
        </div>
        <i class="fa-solid fa-xmark"></i>
    `;

    const closeBtn = toast.querySelector(".fa-xmark");
    closeBtn.addEventListener("click", () => removeToast(toast));
    
    UI.notifications.appendChild(toast);
    toast.timeoutId = setTimeout(() => removeToast(toast), 3000);
}

// Todo Item Creation
function createTodoElement(todoText, index, isComplete = false) {
    const div = document.createElement("div");
    div.classList.add("todo_item");
    div.innerHTML = `
        <div class="todo_heading">
            <p class="complete_title ${isComplete ? "line-through" : ""}" id="${index}">
                ${todoText}
            </p>
        </div>
        <div class="todo_icons">
            <i class="fa-solid fa-pencil" id="edit_btn"></i>
            <i class="fa-solid fa-trash-can" id="delete_btn"></i>
        </div>
    `;
    return div;
}

function renderTodos(todosToRender = todos) {
    UI.todoContainer.innerHTML = "";
    todosToRender.forEach((todo, index) => {
        const todoElement = createTodoElement(todo.todoValue, index, todo.taskComplete);
        UI.todoContainer.appendChild(todoElement);
    });
    UI.taskContainer.classList.add("active");
}

// Todo Operations
function addTodo(event) {
    event.preventDefault();
    const todoValue = UI.input.value.trim();
    
    if (!todoValue) {
        createToast("error");
        return;
    }
    
    if (todos.some(todo => todo.todoValue === todoValue)) {
        createToast("info");
        return;
    }

    todos.push({ todoValue, taskComplete: false });
    saveTodosToStorage();
    renderTodos();
    createToast("success");
    UI.input.value = "";
}

function toggleTodoComplete(element) {
    const id = parseInt(element.id);
    todos[id].taskComplete = !todos[id].taskComplete;
    element.classList.toggle("line-through");
    saveTodosToStorage();
}

function deleteTodo(element) {
    const id = parseInt(element.parentElement.previousElementSibling.firstElementChild.id);
    todos.splice(id, 1);
    saveTodosToStorage();
    renderTodos();
    createToast("warning");
}

function setupEditModal(element) {
    const todoText = element.parentElement.previousElementSibling.firstElementChild;
    UI.editInput.value = todoText.textContent;
    UI.modal.style.display = "block";

    function handleSave() {
        const newValue = UI.editInput.value.trim().toLowerCase();
        
        if (!newValue) {
            createToast("error");
            return;
        }

        if (todos.some(todo => todo.todoValue === newValue)) {
            createToast("info");
            return;
        }

        todos[todoText.id].todoValue = newValue;
        saveTodosToStorage();
        renderTodos();
        UI.modal.style.display = "none";
        
        cleanup();
    }

    function handleCancel() {
        UI.modal.style.display = "none";
        cleanup();
    }

    function cleanup() {
        document.querySelector(".save").removeEventListener("click", handleSave);
        document.querySelector(".cancel").removeEventListener("click", handleCancel);
    }

    document.querySelector(".save").addEventListener("click", handleSave);
    document.querySelector(".cancel").addEventListener("click", handleCancel);
}

// Event Handlers
function handleTodoAction(event) {
    const target = event.target;
    
    if (target.tagName === "P") {
        toggleTodoComplete(target);
    } else if (target.id === "delete_btn") {
        deleteTodo(target);
    } else if (target.id === "edit_btn") {
        setupEditModal(target);
    }
}

function filterTodos(event) {
    const filterType = event.target.className;
    let filteredTodos;

    switch (filterType) {
        case "complete":
            filteredTodos = todos.filter(todo => todo.taskComplete);
            break;
        case "incomplete":
            filteredTodos = todos.filter(todo => !todo.taskComplete);
            break;
        case "all":
        default:
            filteredTodos = todos;
    }

    renderTodos(filteredTodos);
}

// Initialize App
function initializeApp() {
    todos = getTodosFromStorage();
    renderTodos();
    
    // Set up event listeners
    UI.form.addEventListener("submit", addTodo);
    UI.todoContainer.addEventListener("click", handleTodoAction);
    UI.taskStatus.addEventListener("click", filterTodos);
}

// Start the application
initializeApp();