/*=====Step 1: CREATE THE HTML STRUCTURE DYNAMICALLY====*/
document.body.style.fontFamily = "sans-serif"
const container = document.createElement('div');
container.className = 'container';
document.body.appendChild(container);

/* 2.Create a heading (h1) for your Todo app:**
- Create an h1 using `document.createElement('h1')*/
const heading = document.createElement("h1");
heading.textContent = "To Do list";
container.appendChild(heading);

//3. **Create an input field for new tasks:**
/*Set the type, id, and placeholder attributes.
- Append the input to the container.*/
const inputField = document.createElement("input");
inputField.type = "text";
inputField.id = "newTaskInput";
inputField.placeholder = "New Task";
container.appendChild(inputField);

//4. **Create a button to add tasks:**
const addTaskBtn = document.createElement("button");
addTaskBtn.textContent = "Add Task";
addTaskBtn.onclick = addTask;
container.appendChild(addTaskBtn);
//5  Create unordered List to display Task
const taskList = document.createElement("ul");
taskList.id = "taskList";
container.appendChild(taskList);

//6. **Append created elements to the container:
container.append(heading, inputField, addTaskBtn, taskList);

/*========### STEP 2: DEFINING THE TASK CLASS=================*/
class Task {
  constructor(description) {
    this.description = description;
    this.completed = false;
  }
  toggleCompletion() {
    this.completed = !this.completed;
  }
}
/*======### STEP 3: DEFINE THE TASK LIST CLASS======*/
class TaskList {
  constructor() {
    this.tasks = [];
  }
  addTask(task) {
    this.tasks.push(task);
  }
  removeTask(index) {
    this.tasks.splice(index, 1);
  }
  renderTasks() {
    const taskListElement = document.getElementById("taskList");
    taskListElement.innerHTML = "";

    this.tasks.foreach((task, index) => {
      const ListItem = document.createElement("li");
      ListItem.textContent = task.description;
      ListItem.className = task.completed ? "completed" : "";

      ListItem.addEventListener("click", () => {
        task.toggleCompletion();
        this.renderTasks();
      });
      taskListElement.appendChild(ListItem);
    });
  }
}
/*==========### Step 4: Initialize the App============*/
const app = {
  addTask() {
    const inputField = document.getElementById("newTaskInput");
    const description = inputField.ariaValueMax.trim();
    if (description !== "") {
      const task = new Task(description);

      this.taskList.addTask(task);
      this.taskList.renderTasks();
      inputField.value = "";
    }
  },
  removeTask(index) {
    this.taskList.removeTask(index);
    this.taskList.renderTasks();
  },
  init() {
    const addTaskBtn = document.getElementById("addTaskBtn");
    addTaskBtn.addEventListener("click", () => this.addTask());
    this.TaskList.renderTasks();
  },
};
app.init();
