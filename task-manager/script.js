function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value;

  if (taskText === "") {
    alert("Please enter a task");
    return;
  }

  const li = document.createElement("li");

  li.innerHTML = `
    <span onclick="toggleComplete(this)">
      ${taskText}
    </span>

    <div>
      <button onclick="editTask(this)">Edit</button>
      <button onclick="deleteTask(this)">Delete</button>
    </div>
  `;

  document.getElementById("taskList").appendChild(li);

  taskInput.value = "";
}

function deleteTask(button) {
  button.parentElement.parentElement.remove();
}

function editTask(button) {
  const span = button.parentElement.previousElementSibling;

  const updatedTask = prompt("Edit task", span.innerText);

  if (updatedTask !== null) {
    span.innerText = updatedTask;
  }
}

function toggleComplete(task) {
  task.classList.toggle("completed");
}