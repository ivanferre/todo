// todo.js

const btnAddTask = document.querySelector("#addtask");
const txtNewTask = document.querySelector("#newtask");
const tasksSection = document.querySelector("tasks");
//var textNewTask = "";

btnAddTask.addEventListener("click", (b) => {
    const t = txtNewTask.textContent;
    addTask(sanitize(t));
});

function sanitize(string) {
  const map = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#x27;',
      "/": '&#x2F;',
  };
  const reg = /[&<>"'/]/ig;
  return string.replace(reg, (match)=>(map[match]));
}

function addTask(str) {
    const p = document.createElement("p");
    p.textContent = str;
    tasksSection.appendChild(p);
}

inputText = sanitize(userText);
