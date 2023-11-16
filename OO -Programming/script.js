/*Step 1: Create the HTML Structure Dynamically*/
document.body.style.fontFamily = "sans-serif"

//1. **Create the main container:**
const container = document.createElement("div");
container.ClassName = "container";
document.body.appendChild(container);

/* 2.Create a heading (h1) for your Todo app:**
- Create an h1 using `document.createElement('h1')*/
const heading = document.createElement("h1");
heading.textContent = "To Do list";
container.appendChild(heading);

//3. **Create an input field for new tasks:**
/*Set the type, id, and placeholder attributes.
- Append the input to the container.*/
const inputField = document.createElement("input")
inputField.type = "text"
inputField.id = "newTaskInput"
inputField.placeholder = "New Task"
container.appendChild(inputField);

//4. **Create a button to add tasks:**
