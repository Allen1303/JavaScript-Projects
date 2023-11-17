/*=====Step 1: CREATE THE HTML STRUCTURE DYNAMICALLY====*/
document.body.style.fontFamily = "sans-serif";
const container = document.createElement("div");
container.className = "container";
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
inputField.style.marginBottom = "10px";
inputField.style.width = "18%";
inputField.style.padding = ".5rem";
inputField.style.borderRadius = ".7rem";
container.appendChild(inputField);

//4. **Create a button to add tasks:**
const addTaskBtn = document.createElement("button");
addTaskBtn.textContent = "Add Task";
addTaskBtn.onclick = () => app.addTask();
addTaskBtn.style.backgroundColor = "#4CAF50";
addTaskBtn.style.color = "whitesmoke";
addTaskBtn.style.padding = ".4rem";
addTaskBtn.style.width = "80px";
addTaskBtn.style.borderRadius = ".7rem";
addTaskBtn.style.marginLeft = ".4rem";
addTaskBtn.style.backgroundColor = "#4CAF50";
addTaskBtn.style.color = "whitesmoke";
addTaskBtn.style.padding = ".4rem";
addTaskBtn.style.width = "80px";
addTaskBtn.style.borderRadius = ".7rem";
addTaskBtn.style.marginLeft = ".4rem";
addTaskBtn.style.cursor = "pointer";
addTaskBtn.style.transition = "background-color 0.3s ease";

addTaskBtn.addEventListener("mouseover", () => {
    addTaskBtn.style.backgroundColor = "whitesmoke";
    addTaskBtn.style.color = "#4CAF50";
});

addTaskBtn.addEventListener("mouseout", () => {
    addTaskBtn.style.backgroundColor = "#4CAF50";
    addTaskBtn.style.color = "whitesmoke";
});

addTaskBtn.style.cursor = "pointer";
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

    this.tasks.forEach((task, index) => {
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
  taskList: new TaskList(),

  addTask() {
    const inputField = document.getElementById("newTaskInput");
    const description = inputField.value.trim();
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
    this.taskList.renderTasks();
  },
};
app.init();
