const form = document.querySelector('.js-form'),
    input = form.querySelector('input'),
    greeting = document.querySelector('.js-greetings');

const USER_LS = 'currentUser', // Is a const for the users name inside browsers console localStorage.getItem('Pat'); is text because the paintGreeting function takes text as a param.
    SHOWING_CN = 'showing'; // showing is a class in css

function saveName(text){
    localStorage.setItem(USER_LS, text); // Saves users name as text into local storage
}

function handleSubmit(event) { // event is the submit event in the form
    event.preventDefault(); // Prevents the refreshing of the page when the form is submitted
    const currentValue = input.value; // Gets the current input value
    paintGreeting(currentValue); // paintGreeting requires text parameter and the text is currentValue
    saveName(currentValue); //savName requries text parameter and the text is currentValue
}

// Asks for users name if input is empty
function askForName() {
    form.classList.add(SHOWING_CN); // Shows the form
    form.addEventListener('submit', handleSubmit); //
}

// Takes text as a param therefore SHOWING_CN value is text
function paintGreeting(text) {
    form.classList.remove(SHOWING_CN); // Removes the form
    // Adds element h4 with class greeting document.querySelector(".js-greetings").classList.add("showing");
    greeting.classList.add(SHOWING_CN); 
    greeting.innerText = `Hello ${text}` // Shows greeting
}

// Gets the key or item from the local storage in the browser
function loadName() {
    const currentUser = localStorage.getItem(USER_LS); // Gets current users name
    // if currentUser is not null or is text then call paintGreeting(currentUser);
    if (currentUser === null) {
        askForName();
    } else {
        paintGreeting(currentUser);
    }
}

// initialize application
function init() {
    loadName();
}

init();