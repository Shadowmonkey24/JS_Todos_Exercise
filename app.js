const todoList = document.getElementById("todoList");
const form = document.querySelector("form");

// Load the todo list from local storage (if it exists)
const savedList = localStorage.getItem("todoList");
if (savedList) {
  const listArray = JSON.parse(savedList);
  listArray.forEach((taskText) => {
    const newLi = document.createElement("li");
    newLi.innerText = taskText;
    const removeBtn = document.createElement("button");
    removeBtn.innerText = "X";
    removeBtn.addEventListener("click", function (e) {
      e.target.parentElement.remove();
    });
    newLi.appendChild(removeBtn);
    todoList.appendChild(newLi);
  });
}


document.addEventListener('DOMContentLoaded',function(){

form.addEventListener("submit", function(e){
    e.preventDefault();
    const task = document.querySelector('#task');
    const newLi = document.createElement('li');
    const removeBtn = document.createElement('button');
    newLi.innerText = task.value;
    removeBtn.innerText="X";

    removeBtn.addEventListener('click', function(e){
        e.target.parentElement.remove();
    });

    newLi.appendChild(removeBtn);
    todoList.appendChild(newLi);
    form.reset();
    saveTodoList();
});
});

// Save the todo list to local storage
function saveTodoList() {
    const listItems = todoList.getElementsByTagName("li");
    const listArray = [];
    for (let i = 0; i < listItems.length; i++) {
      listArray.push(listItems[i].innerText);
    }
    localStorage.setItem("todoList", JSON.stringify(listArray));
  }