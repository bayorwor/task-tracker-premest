const form = document.getElementById("add-task-form");
const taskList = document.querySelector("#task-list");
const no_task = document.querySelector("#no-task");

//declaring arrays
let tasks = [];

tasks.length == 0 && (no_task.textContent = "Task board is empty");

//declaring, defining a function
function addTask(e) {
  e.preventDefault();

  if (form.task.value === "") {
    alert("task field  is null");
  } else {
    tasks.push(form.task.value);

    if (tasks.length > 0) {
      //clearig the text
      no_task.textContent = "";

      //creating new html elements
      let task = document.createElement("p");
      let task_subcontainer = document.createElement("div");

      //setting attributes
      task.setAttribute("class", "task-txt");
      task.setAttribute("class", "task-subcontainer");

      //displaying data from an array
      tasks.map((t) => (task.textContent = t));

      //appending elements to their parents
      task_subcontainer.appendChild(task);
      taskList.appendChild(task_subcontainer);

      //clearing inputs after submiting
      form.task.value = "";
    }
  }
}

//adding event listeners to add  task
form.addEventListener("submit", addTask);
