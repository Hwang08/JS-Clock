const body = document.querySelector('body');

const IMG_NUMBER = 10;

function paintImage(imgNumber) {
  const image = new Image();
  image.src = `images/${imgNumber}.jpg`; // dynamically changes the image source with random number
  image.classList.add('bgImage'); // Adds css class to make appended image element into the background image
  body.appendChild(image); // appends image element to the body of the html document
}

function genRandomNum() {
  const number = Math.floor(Math.random() * IMG_NUMBER + 1);
  return number;
}

function init() {
  const randomNumber = genRandomNum();
  paintImage(randomNumber);
}

init(); 