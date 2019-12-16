const toDoForm = document.querySelector('.js-toDoForm'),
  toDoInput = toDoForm.querySelector('input'),
  toDoList = document.querySelector('.js-toDoList');


const TODOS_LS = 'toDos'; // object????

let toDos = []; //toDos will be dynamically updated with the users inputs and saved to the local storage.

function deleteToDo(event) {
  // Removes the to do task rendered on the screen
  const btn = event.target; // event(mouseEvent).target(button element)
  const li = btn.parentNode; // btn(event(mouseEvent).target(button element)).parentNode(li element with id 1,2,etc.)
  toDoList.removeChild(li); // Take the toDoList and remove the li element in the ul
  // Removes the to do task saved in local storage
  // filter() method creates a new array with all elements that pass the test(return true) implemented by the provided function.
  // Filter goes through each array element and calls a function on that element
  const cleanToDos = toDos.filter(function (toDo) {
    return toDo.id !== parseInt(li.id); // Check to to dos that dont have the id = to the id of the li because that is the one we want to delete.
  });
  toDos = cleanToDos; // replace the toDos with cleanToDos(updated array after deleting a to do)
  saveToDos(); // Updates the new array made by the filter and cleanToDos into local storage
}

// Saves to do tasks into local storage
function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos)); // Can only save strings on local storage
}

function paintToDo(text) {
  const li = document.createElement("li"); // Create an empty li inside ul
  const delBtn = document.createElement("button"); // Create a button
  const span = document.createElement("span"); // create span
  const newId = toDos.length + 1; // id of li will be dynamically updated starting from 1, 2, 3, etc.
  delBtn.innerText = '❌';
  delBtn.addEventListener('click', deleteToDo); // When the delete button is created this will add an event listener
  span.innerText = text;
  li.appendChild(delBtn); // Put button inside li
  li.appendChild(span); // Put span inside li
  li.id = newId; // Sets an id for the li
  toDoList.appendChild(li); // Adds an li to the empty ul inside html 
  const toDoObj = {
    text: text, // User input for to do task
    id: newId // Id starts at 1 then 2,3 etc.
  };
  toDos.push(toDoObj); // Pushes toDoObj into array
  saveToDos();
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value; // Stores toDoInput value into const currentValue
  paintToDo(currentValue);
  toDoInput.value = ''; // Refreshes the place holder after a new task is submitted
}

// Shows the saved to do tasks in the local storage.
// If the to do tasks are loaded they will be parsed into an object, and then for each one of the objects execute the function paintToDo on each to show each saved to do task in the local storage.
function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos); // to do tasks are saved as a string so we need to parse them into an object
    parsedToDos.forEach(function (toDo) { // For each object in local storage execute the paintToDo function
      paintToDo(toDo.text);
    });
  }
}
// Initializes application
function init() {
  loadToDos();
  toDoForm.addEventListener('submit', handleSubmit);
}

init();