const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const greetingBox = document.querySelector("#greeting-rename");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(e) {
  e.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  onPaintGreeting(username);
}

function onRename() {
  localStorage.removeItem(USERNAME_KEY);
  window.location.reload();
}

function onPaintGreeting(username) {
  greeting.innerText = `Hello ${username}`;
  greetingBox.classList.remove(HIDDEN_CLASSNAME);
  const renameBtn = document.createElement("button");
  renameBtn.innerText = "↻";
  renameBtn.addEventListener("click", onRename);
  greetingBox.appendChild(renameBtn);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  onPaintGreeting(savedUsername);
}
