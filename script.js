const form = document.getElementById("form");
const addtask = document.querySelector(".addtask");
const taskul = document.querySelector(".taskul");
const input = document.querySelector(".input");
const taskcount = document.querySelector(".count-task");

let countTask = 0;

function displayCount(countTask) {
  taskcount.innerHTML = countTask;
}

function addTasks() {
  if (input.value === "") {
    alert("You Must Enter Task");
  } else {
    let li = document.createElement("li");
    li.innerHTML = input.value;
    taskul.appendChild(li);
    countTask += 1;
    displayCount(countTask);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  input.value = "";
  saveData();
}

taskul.addEventListener(
  "click",
  (e) => {
    if (e.target.tagName === "LI") {
      const li = e.target;
      li.classList.toggle("checked");

      if (li.classList.contains("checked")) {
        
        countTask -= 1;
      } else {
        
        countTask += 1;
      }

      displayCount(countTask);
      saveData();
    } else if (
      e.target.tagName === "SPAN" &&
      e.target.parentElement.classList.contains("checked")
    ) {
      const li = e.target.parentElement;
      li.remove();

      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", taskul.innerHTML);
}

function showTask() {
  taskul.innerHTML = localStorage.getItem("data");
}

showTask();
