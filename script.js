const input = document.getElementById("input");
const addBtn = document.getElementById("add-btn");
const list = document.getElementById("todo-list");
const time = document.getElementById("todo-time");

//Add Event Listener to Button
addBtn.addEventListener("click", addTodo);

//To update day and date
function addDayWithDate() {
    const now = new Date();

    const option = now.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    });

    time.textContent = `Today: ${option}`;
}

//Create Function for Local Storage

function getTask() {
    return JSON.parse(localStorage.getItem("tasks")) || [];
}

function saveTask(tasks) {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

//create function for addTodo
function addTodo() {
    const text = input.value.trim();

    if (text === "") return;

    const tasks = getTask()
    const task = {
        id: Date.now(),
        text: text,
        completed: false
    };

    tasks.push(task);
    saveTask(tasks)
    renderTask();
    input.value = "";
}

function saveElementTask(task, index) {
    const li = document.createElement("li");
    const span = document.createElement("span");

    span.textContent = task.text;
    span.style.textDecoration = task.completed ? "line-through" : "none";

    span.onclick = () => toggleCompleted(index);

    //Edit button

    const editBtn = document.createElement("button");
    editBtn.textContent = "✏️";
    editBtn.onclick = () => editTask(index);

    //delete button

    const delBtn = document.createElement("button");
    delBtn.textContent = "❌";
    delBtn.onclick = () => delTask(index);

    li.appendChild(span);
    li.appendChild(editBtn);
    li.appendChild(delBtn);
    return li;
}

function toggleCompleted(index) {
    const tasks = getTask();
    tasks[index].completed = !tasks[index].completed;
    saveTask(tasks);
    renderTask();
}

function editTask(index) {
    const tasks = getTask();
    const newTask = prompt("Edit your task:", tasks[index].text);
    if (newTask !== null && newTask !== "") {
        tasks[index].text = newTask.trim();
    };

    saveTask(tasks);
    renderTask();
}

function delTask(index) {
    const tasks = getTask();
    tasks.splice(index, 1);
    saveTask(tasks);
    renderTask();
}

function renderTask() {
    const tasks = getTask();
    list.innerHTML = "";
    tasks.forEach((task, index) => {
        const li = saveElementTask(task, index);
        list.appendChild(li);
    });
}
window.onload = function () {
    renderTask();
    addDayWithDate();
}