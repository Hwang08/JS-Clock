const clockContainer = document.querySelector('.js-clock'),
  clockTitle = clockContainer.querySelector('h1');

function getTime() {
  const date = new Date(); //instantiate Date objet and set it to a constant variable
  // const seconds = date.getSeconds(); // Gets the date objects seconds value into a const // PASTE THIS CODE IN FOR SECONDS TO SHOW :${seconds < 10 ? `0${seconds}` : seconds} 
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const suffix = (hours >= 12) ? 'pm' : 'am';

  // If hours is greater than 12 subtract 12 from military time to equal format 1-12
  (hours > 12) ? hours - 12 : hours;
  // If hours is equal to 0(military time) or midnight return 12 for standard time format for midnight
  (hours === 0) ? 12 : hours;

  // Ternary operator (conditional statement ? "if code block" : "else code block")
  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes} ${suffix}`;
}

// initialize application
function init() {
  getTime();
  setInterval(getTime, 1000); // runs getTime function every second to make the clock run
}
// call initialize function
init();