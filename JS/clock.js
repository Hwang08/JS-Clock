const clockContainer = document.querySelector('.js-clock'),
  clockTitle = clockContainer.querySelector('h1');

function getTime() {
  const date = new Date(); //instantiate Date objet and set it to a constant variable
  const seconds = date.getSeconds(); // Gets the date objects seconds value into a const
  const minutes = date.getMinutes();
  const hours = date.getHours() % 12;
  // Ternary operator (conditional statement ? "if code block" : "else code block")
  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
}

// initialize application
function init() {
  getTime();
  setInterval(getTime, 1000); // runs getTime function every second to make the clock run
}
// call initialize function
init();