const clock = document.querySelector("#clock");

function getClock() {
  const date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}

getClock();
setInterval(getClock, 1000);
