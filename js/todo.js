const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEYS = "todos";

let toDos = [];

function onSaveToDos() {
  localStorage.setItem(TODOS_KEYS, JSON.stringify(toDos));
}

function onDeleteTodo(e) {
  const li = e.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  onSaveToDos();
}

function onPaintTodo(newToDo) {
  const li = document.createElement("li");
  li.id = newToDo.id;
  const span = document.createElement("span");
  span.innerText = newToDo.text;
  const Btn = document.createElement("button");
  Btn.innerText = "✖";
  Btn.addEventListener("click", onDeleteTodo);
  li.appendChild(span);
  li.appendChild(Btn);
  toDoList.appendChild(li);
}

function onTodoSubmit(e) {
  e.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  const newToDoObj = {
    text: newToDo,
    id: Date.now(),
  };
  toDos.push(newToDoObj);
  onPaintTodo(newToDoObj);
  onSaveToDos();
}

toDoForm.addEventListener("submit", onTodoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEYS);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(onPaintTodo);
}
