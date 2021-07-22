document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  form.addEventListener("submit", function(e){
    e.preventDefault();
    const newTask = document.querySelector("#new-task-description").value;
    const item = document.createElement("li")
    item.innerText = newTask;
    taskList.appendChild(item);
  });
});

