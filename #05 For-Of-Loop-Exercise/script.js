const tasks = [];

function addTask() {
  const newTaskInput = document.getElementById("newTask");
  const taskDescription = newTaskInput.value.trim();

  if (taskDescription !== "") {
    const task = { description: taskDescription, completed: false };
    tasks.push(task);
    renderTasks();
    newTaskInput.value = "";
  }
}
function toggleCompletion(index) {
  tasks[index].completed = !tasks[index].completed;
  renderTasks();
}
function renderTasks() {
  const taskListElement = document.getElementById("taskList");
  taskListElement.innerHTML = "";

  for (const [index, task] of tasks.entries()) {
    const listItem = document.createElement("li");
    listItem.textContent = task.description;

    if (task.completed) {
      listItem.classList.add("completed");
    }
    const toggleButton = document.createElement("button");
    toggleButton.textContent = task.completed ? "Undo" : "complete";
    toggleButton.onclick = () => toggleCompletion(index);

    listItem.appendChild(toggleButton);
    taskListElement.appendChild(listItem);
  }
}
renderTasks();

/*====CSS Javascript Inline Styling====*/
const head = document.head;
const style = document.createElement("style");

style = innerHTML = `
body {
    font-family: Arial, sans-serif;
    text-align: center;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    margin: 5px;
    padding: 10px;
    border: 1px solid #ddd;
    display: flex;
    justify-content: space-between;
}

.completed {
    background-color: #d4edda;
}

button {
    cursor: pointer;
}
button:hover{
    background-color:dark green;

}
`;
