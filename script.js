let todoItems = [];

function addTodo(text) {
  const todo = {
    text,
    checked: false,
    id: Date.now(),
  };

  todoItems.push(todo);
  renderTodo(todo);
}

const form = document.querySelector(".js-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const input = document.querySelector(".js-todo-input");

  const text = input.value.trim();

  if (text !== "") {
    addTodo(text);
    input.value = "";
    input.focus();
  }
});

function renderTodo(todo) {
  localStorage.setItem("todoItemsRef", JSON.stringify(todoItems));

  const list = document.querySelector(".js-todo-list");

  const isChecked = todo.checked ? "done" : "";
  const node = document.createElement("li");
  node.setAttribute("class", `todo-item ${isChecked}`);
  node.setAttribute("data-key", todo.id);
  node.innerHTML = `
   
  
    <input id="${todo.id}" type="checkbox" class="check"/> 
      <label for="${todo.id}" class="tick js-tick"></label>
      <span class="spen">${todo.text}</span>
     
    `;

  list.append(node);
  deteleTodo();
}

document.addEventListener("DOMContentLoaded", () => {
  const ref = localStorage.getItem("todoItemsRef");
  if (ref) {
    todoItems = JSON.parse(ref);
    todoItems.forEach((t) => {
      renderTodo(t);
    });
  }
});

function deteleTodo() {
  const deleteButton = document.querySelector(".delete");
  const list = document.querySelector(".js-todo-list");

  deleteButton.addEventListener("click", (event) => {
    list.innerHTML = "";
    localStorage.clear();
  });
}
